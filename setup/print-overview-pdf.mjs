#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright-chromium';
import readline from 'node:readline';

const BASE_URL = 'http://localhost:3030';
const DEFAULT_ROUTE = '/overview';
const DEFAULT_CSS_FILE = 'styles/overview.css';
const DEFAULT_OUTPUT = 'public/notes-export.pdf';

function parseArguments(argv) {
  const options = {
    output: DEFAULT_OUTPUT,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];

    if (argument === '--out') {
      options.output = argv[index + 1];
      index += 1;
      continue;
    }

    if (argument === '--help') {
      printHelp();
      process.exit(0);
    }

    throw new Error(`Unknown argument: ${argument}`);
  }

  return options;
}

function printHelp() {
  console.log(`Usage: node setup/print-overview-pdf.mjs [options]

Options:
  --out [path]      PDF output path (default: public/overview.pdf)
  --help            Show this help message
`);
}

async function isServerAvailable(baseUrl) {
  try {
    const response = await fetch(baseUrl, { method: 'GET' });
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForServer(baseUrl, timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    if (await isServerAvailable(baseUrl)) {
      return;
    }

    await sleep(300);
  }

  throw new Error(`Timed out waiting for dev server at ${baseUrl}`);
}

function prefixStreamLines(stream, targetStream, prefix) {
  if (!stream) {
    return;
  }

  const lineReader = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  lineReader.on('line', (line) => {
    targetStream.write(`${prefix} ${line}\n`);
  });
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const projectRoot = process.cwd();
  const cssPath = path.resolve(projectRoot, DEFAULT_CSS_FILE);
  const pdfPath = path.resolve(projectRoot, options.output);
  const normalizedRoute = DEFAULT_ROUTE;
  const targetUrl = `${BASE_URL}${normalizedRoute}`;

  const serverAlreadyRunning = await isServerAvailable(BASE_URL);
  if (serverAlreadyRunning) {
    console.log(`Reused running Slidev server at: ${BASE_URL}`);
  }
  const serverProcess = serverAlreadyRunning
    ? null
    : spawn('pnpm', ['exec', 'slidev'], {
        stdio: ['ignore', 'pipe', 'pipe'],
        env: {
          ...process.env,
          BROWSER: 'none',
        },
      });

  if (serverProcess) {
    prefixStreamLines(serverProcess.stdout, process.stdout, '[slidev]');
    prefixStreamLines(serverProcess.stderr, process.stderr, '[slidev]');
  }

  try {
    await waitForServer(BASE_URL);

    const browser = await chromium.launch();

    try {
      const page = await browser.newPage();
      await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });
      await page.addStyleTag({ path: cssPath });
      await page.waitForLoadState('networkidle');
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        scale: 0.75,
      });

      console.log(`PDF created at: ${pdfPath}`);
    } finally {
      await browser.close();
    }
  } finally {
    if (serverProcess) {
      serverProcess.kill('SIGTERM');
      await sleep(500);

      if (!serverProcess.killed) {
        serverProcess.kill('SIGKILL');
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

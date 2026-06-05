---
layout: chapter-split
title: Linting & Formatting
chapter-number: '03'
section:
  duration: 10m
---

Automatisierte Standards und CI

<!--
Wir haben gerade gesehen: TypeScript gibt uns ein starkes Sicherheitsnetz für Typen.

Der nächste Schritt ist, auch die Codequalität selbst abzusichern.

Genau da helfen Linting und Formatting: weniger Inkonsistenzen, klarere Standards und ruhigerer Entwicklungsalltag.

Wir schauen uns das jetzt Schritt für Schritt an, erst im Editor und danach im CI-Workflow.
-->

---
title: Warum Linting?
clicks: 2
---

<div class="relative flex-1 m-5 @container-size">
  <div class="text-lg font-semibold text-blue-dark dark:text-blue-light">TypeScript</div>
  <div
    class="absolute top-0 bottom-0 rounded-50% border-2 border-blue-dark bg-blue-light/20 flex flex-col justify-evenly py-10cqh  text-align-center transition-all duration-500"
    :class="$clicks >= 2 ? 'left-0 right-30% pr-40cqw pl-5cqw' : 'left-10% right-60%'"
  >
      <p>Typen</p>
      <p>Verträge</p>
      <p>Compiler-Fehler</p>
  </div>

  <div
    v-click="1"
    class="text-lg font-semibold text-orange-dark text-align-end transition-all duration-500"
  >
    Linting
  </div>

  <div
    v-click="1"
    class="absolute top-0 bottom-0 rounded-50% border-2 border-orange-dark bg-orange-light/20 flex flex-col justify-evenly py-10cqh text-align-center transition-all duration-500"
    :class="$clicks >= 2 ? 'left-30% right-0 pl-40cqw pr-5cqw' : 'left-60% right-10%'"
  >
      <p>Lesbarkeit</p>
      <p>Konsistenz</p>
      <p>Best Practices</p>
  </div>

  <div
    class="absolute left-40% right-40% top-0 bottom-0 text-align-center flex flex-col justify-center transition-opacity duration-500"
    :class="$clicks >= 2 ? 'opacity-100' : 'opacity-0'"
  >
    Gemeinsames Ziel:<br />
    stabile Qualität
  </div>
</div>

<!--
TypeScript war Schritt 1: Typen und Verträge absichern.

[click] Der nächste Schritt ist Linting: Lesbarkeit, Konsistenz und Best Practices.

[click] Zusammen ergibt das: frühes Feedback und stabilere Qualität im Alltag.
-->

---
title: ESLint
q-placements: JD
---

<dl class="mx-auto max-w-3xl rounded-lg border border-zinc-300 bg-white p-8 shadow dark:border-zinc-600 dark:bg-zinc-800">
  <dt class="text-xl tracking-widest text-blue-dark dark:text-blue-light">ESLint</dt>
  <dd class="mt-1 text-2xl font-semibold">ECMAScript Linter</dd>

  <dt class="mt-6 text-xl tracking-widest text-blue-dark dark:text-blue-light">ECMAScript</dt>
  <dd class="mt-1">Der Sprachstandard, auf dem JavaScript basiert.</dd>

  <dt class="mt-6 text-xl tracking-widest text-blue-dark dark:text-blue-light">Linter</dt>
  <dd class="mt-1">Ein Werkzeug, das Quellcode automatisch auf bestimmte Regeln und mögliche Probleme prüft.</dd>

</dl>

<!--
ESLint steht für ECMAScript Linter. ECMAScript ist der Sprachstandard, auf dem JavaScript basiert.

Ein Linter ist allgemein ein Werkzeug, das Quellcode automatisch auf bestimmte Regeln und mögliche Probleme prüft.

Kurz gesagt: ESLint prüft typischen Code auf Probleme und hilft beim Einhalten von Stilregeln.

Jetzt schauen wir uns an, wie das direkt im Code aussieht.
-->

---
title: ESLint in Aktion (JavaScript)
---

<script setup>
import './03-linting-eslint-rules.css';
</script>

<v-switch class="eslint-rules-switch">
  <template #1>

1. Nur definierte Variablen verwenden — `no-undef`

<RuleBadGoodTable>
  <template #bad>

```js
function greet() {
  return username;
}
```

  </template>
  <template #good>

```js
function greet(username) {
  return username;
}
```

  </template>
</RuleBadGoodTable>
</template>

<template #2>

1. Nur definierte Variablen verwenden — `no-undef`
2. Unbenutzte Variablen vermeiden — `no-unused-vars`

<RuleBadGoodTable>
  <template #bad>

```js
const length = items.length;
return items.length;
```

  </template>
  <template #good>

```js
const length = items.length;
return length;
```

  </template>
</RuleBadGoodTable>
</template>

<template #3>

1. Nur definierte Variablen verwenden — `no-undef`
2. Unbenutzte Variablen vermeiden — `no-unused-vars`
3. Bedingungen immer mit Block — `curly`

<RuleBadGoodTable>
  <template #bad>

<!-- prettier-ignore-start -->
```js
if (isAdmin)
  grantAccess();
```
<!-- prettier-ignore-end -->

  </template>
  <template #good>

```js
if (isAdmin) {
  grantAccess();
}
```

  </template>
</RuleBadGoodTable>
</template>
</v-switch>

<!--
Wir starten mit drei einfachen Regeln, die fast jeder sofort nachvollziehen kann.

[click] `no-undef`: nur Variablen verwenden, die wirklich definiert sind. Das hilft gegen Tippfehler und vergessene Definitionen.

[click] `no-unused-vars`: alles entfernen, was nicht genutzt wird. Solche Variablen sind oft ein Zeichen für unvollständiges Refactoring, blähen den Code auf und verwirren beim Lesen.

[click] `curly`: Kontrollstrukturen immer mit geschweiften Klammern. Das macht den Kontrollfluss klarer und verhindert Fehler bei späteren Erweiterungen.
-->

---
title: ESLint in Aktion (TypeScript)
clicks: 3
---

<v-switch class="eslint-rules-switch">
  <template #1>

1. Kein explizites `any` — `@typescript-eslint/no-explicit-any`

<RuleBadGoodTable>
  <template #bad>

<!-- prettier-ignore-start -->
```ts
function printValue(
  value: any,
) {
  return `Wert: ${value}`;
}
```
<!-- prettier-ignore-end -->

  </template>
  <template #good>

<!-- prettier-ignore-start -->
```ts {2}
function printValue(
  value: string | number,
) {
  return `Wert: ${value}`;
}
```
<!-- prettier-ignore-end -->

  </template>
</RuleBadGoodTable>
</template>

<template #2>

1. Kein explizites `any` — `@typescript-eslint/no-explicit-any`
2. Keine schwebenden Promises — `@typescript-eslint/no-floating-promises`

<RuleBadGoodTable>
  <template #bad>

<!-- prettier-ignore-start -->
```ts
async function saveUser(
  user: User,
): Promise<void> { ... }

saveUser(user);
```
<!-- prettier-ignore-end -->

  </template>
  <template #good>

<!-- prettier-ignore-start -->
```ts {5}
async function saveUser(
  user: User,
): Promise<void> { ... }

await saveUser(user);
```
<!-- prettier-ignore-end -->

  </template>
</RuleBadGoodTable>
</template>

<template #3>

1. Kein explizites `any` — `@typescript-eslint/no-explicit-any`
2. Keine schwebenden Promises — `@typescript-eslint/no-floating-promises`
3. Sichere Template-Strings — `@typescript-eslint/restrict-template-expressions`

<RuleBadGoodTable>
  <template #bad>

<!-- prettier-ignore-start -->
```ts
const label =
  `User: ${user}`;
// => "User: [object Object]"
```
<!-- prettier-ignore-end -->

  </template>
  <template #good>

<!-- prettier-ignore-start -->
```ts {2}
const label =
  `User: ${user.name}`;
```
<!-- prettier-ignore-end -->

  </template>
</RuleBadGoodTable>
</template>
</v-switch>

<!--
Nachdem wir jetzt TypeScript haben, können wir auch Regeln nutzen, die speziell auf die typischen Fallstricke von TypeScript abzielen. Diese können auch die Typinfomationen nutzen, um noch smarter zu sein.

[click] no-explicit-any: Wir vermeiden `any`, damit die Typprüfung nicht umgangen wird. `any` bedeutet im Grunde: „TypeScript, vertraue mir einfach“. Danach sind fast alle Prüfungen an dieser Stelle weg.

Statt `any` soll man konkrete Types verwenden. Wenn das nicht möglich ist, gibt es `unknown` (Ich weiß nicht, um was für einen Daten-Typ es sich handelt, und möchte das explizit so markieren), `never` (Der Fall sollte nie eintreten), oder Generics (Ich möchte, dass der Aufrufer den Typ angibt, damit es trotzdem sicher bleibt).

[click] no-floating-promises: Asynchrone Aufrufe müssen behandelt werden, sonst gehen Fehler still verloren.

[click] restrict-template-expressions: In Template-Strings sollen nur passende Typen landen, damit keine unerwarteten Ausgaben entstehen. Wenn man ein Objekt in ein String implizit umwandelt, kommt oft „Object Object“.
-->

---


<!--
Grober Plan (8 min):

Slide 1: Warum Linting? (~1.5 min)
- Unterschied TypeScript vs Linting
- Code kann typkorrekt und trotzdem schlecht lesbar/inkonsistent sein
- Ziel: Team-Standards automatisieren

Slide 2: ESLint in Aktion (~2 min)
- 2-3 konkrete Rule-Beispiele
- Vorher/Nachher: Warnung + Quick Fix
- Effekt: weniger Diskussion im Review

Slide 3: Prettier / Formatting (~1.5 min)
- Stilfragen automatisiert entscheiden
- Einheitliches Format lokal + CI
- Kein "tabs vs spaces" im Review

Slide 4: CI-Gate & Workflow (~2 min)
- lint + format-check im CI
- Schnell lokal prüfen (pre-commit / npm scripts)
- Nur grüner Build wird gemerged

Slide 5: Fazit & Übergang (~1 min)
- Linting = Qualitätsnetz für Wartbarkeit
- Ergänzt TypeScript (Semantik + Stil)
- Übergang zu Architektur/Best Practices
-->

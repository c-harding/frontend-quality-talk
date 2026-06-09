---
layout: chapter-split
title: Accessibility
chapter-number: '05'
section:
  duration: 12m
  buffer: 3m
---

Qualität aus Nutzerperspektive

<!--
Bis jetzt ging es um die Qualität im Code. Jetzt geht es darum, wie die Anwendung für alle Menschen funktioniert — mit verschiedenen Fähigkeiten und Kontexten.
-->

---
title: Wer nutzt Accessibility-Features?
article-class: text-center flex flex-col items-center justify-around
---

<v-clicks>
  <div>Screen Reader zum Navigieren im Web</div>
  <div>Speech-to-Text</div>
  <div>Zooming auf Websites</div>
  <div>Untertitel bei Videos</div>
  <div>Dark Mode</div>
  <div>Mit einer Hand das Handy bedienen</div>
</v-clicks>

<p v-click class="italic opacity-70">Das ist Accessibility.<br>Kein Nischen-Feature – eure tägliche Realität.</p>

<!--
Ich stelle eine Frage: Wer von euch nutzt Accessibility-Features? Hebt die Hand auf, wenn das auf euch zutrifft.

[click] Erstens: Screen Reader zum Navigieren im Web.

[click] Speech-to-Text.

[click] Zooming auf Websites.

[click] Untertitel bei Videos.

[click] Dark Mode.

[click] Mit einer Hand das Handy bedienen.

[click] Und das ist der Punkt: Das ist Accessibility. Nicht ein Nischen-Feature für Menschen mit Behinderungen, sondern eure täglichen Situationen. Du hältst einen Kaffee in der Hand und scrollst mit der anderen. Du magst Dark Mode. Du siehst kleinen Text nicht gut und zoomst Websites.

Accessibility ist universell. Deshalb bauen wir es von Anfang an ein.
-->

---
title: Was ist Accessibility?
article-class: flex flex-col gap-6 justify-center
---

<div v-click class="a11y-card border-blue-dark dark:border-blue-light bg-blue-light/15">
  <span class="a11y-label text-blue-dark dark:text-blue-light">Dauerhaft</span>
  <div class="a11y-item"><mdi-eye-off-outline />Sehbehinderung</div>
  <div class="a11y-item"><mdi-hand-back-right-off-outline />Motorik</div>
  <div class="a11y-item"><mdi-ear-hearing-off />Gehörlos</div>
  <div class="a11y-item"><mdi-head-dots-horizontal-outline />Kognitiv</div>
</div>

<div v-click class="a11y-card border-orange-dark dark:border-orange-light bg-orange-light/15">
  <span class="a11y-label text-orange-dark dark:text-orange-light">Situativ</span>
  <div class="a11y-item"><mdi-weather-sunny />Grelles Licht</div>
  <div class="a11y-item"><mdi-coffee-outline />Eine Hand belegt</div>
  <div class="a11y-item"><mdi-volume-off />Ton aus</div>
  <div class="a11y-item"><mdi-wifi-strength-1 />Langsames Internet</div>
</div>

<p v-click class="text-center italic opacity-70">Dieselbe Barriere, unterschiedliche Ursachen.</p>

<style>
.a11y-card {
  --uno: rounded-xl border-2 p-5 flex flex-row justify-between items-center gap-6;
}

.a11y-label {
  --uno: text-xl uppercase tracking-widest font-mono;
}

.a11y-item {
  --uno: flex items-center gap-2 text-base;
}

.a11y-note {
  --uno: text-center italic opacity-70 text-base;
}
</style>

<!--
Wir haben gesehen, dass Accessibility uns alle betrifft. Aber was steckt dahinter?

Es gibt zwei Kategorien.

[click] Dauerhaft: Menschen, die dauerhaft mit Einschränkungen leben — Sehbehinderungen, eingeschränkte Motorik, Gehörlosigkeit, kognitive Einschränkungen.

[click] Und situativ: jeder von uns in bestimmten Momenten. Grelles Sonnenlicht, eine Hand voll Kaffee, Ton aus in der Bahn, schlechte Verbindung unterwegs.

[click] Dieselbe Barriere, unterschiedliche Ursachen. Schlechter Farbkontrast schließt jemanden mit Farbsehschwäche aus — und jemanden, der im Freien auf sein Handy schaut. Keine Untertitel? Schlecht für Gehörlose, und für jemanden, der gerade den Ton nicht aufdrehen kann.

Das ist der eigentliche Grund, warum Accessibility kein Randthema ist: Wir bauen für uns selbst.
-->

---
title: Kernprinzipien – POUR
article-class: grid grid-cols-4 gap-4 my-auto flex-0
hide-footer: true
---

<div v-click class="pour-card border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/50">
  <div class="pour-letter">P</div>
  <div class="pour-english">Perceivable</div>
  <div class="pour-title">Wahrnehmbar</div>
  <p class="pour-description">Infos sind wahrnehmbar</p>
  <ul class="pour-examples">
    <li>Alt-Text für Bilder</li>
    <li>Guter Kontrast</li>
    <li>Untertitel für Videos</li>
  </ul>
</div>

<div v-click class="pour-card border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/50">
  <div class="pour-letter">O</div>
  <div class="pour-english">Operable</div>
  <div class="pour-title">Bedienbar</div>
  <p class="pour-description">Alle können alles steuern</p>
  <ul class="pour-examples">
    <li>Keyboard- und Touchscreen-Navigation</li>
    <li>Fokus sichtbar</li>
    <li>Keine Zeitlimits</li>
  </ul>
</div>

<div v-click class="pour-card border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/50">
  <div class="pour-letter">U</div>
  <div class="pour-english">Understandable</div>
  <div class="pour-title">Verständlich</div>
  <p class="pour-description">Text und Logik sind klar</p>
  <ul class="pour-examples">
    <li>Semantisches HTML</li>
    <li>Klare Labels</li>
    <li>Aussagekräftige Fehlertexte</li>
  </ul>
</div>

<div v-click class="pour-card border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/50">
  <div class="pour-letter">R</div>
  <div class="pour-english">Robust</div>
  <div class="pour-title">Robust</div>
  <p class="pour-description">Funktioniert in allen Browsern und Tools</p>
  <ul class="pour-examples">
    <li>Valid HTML</li>
    <li>ARIA korrekt</li>
    <li>Responsive</li>
  </ul>
</div>

<style>
.pour-card {
  --uno: rounded-xl border-2 p-6 flex flex-col gap-3;
}

.pour-letter {
  --uno: text-5xl font-black opacity-20 leading-none;
}

.pour-title {
  --uno: text-xl uppercase tracking-widest font-mono font-bold;
}

.pour-english {
  --uno: text-base opacity-60 font-normal;
}

.pour-description {
  --uno: text-base opacity-80 italic my-0;
}

.pour-examples {
  --uno: text-base opacity-70 flex flex-col gap-1;
}
</style>

<!--
Accessibility basiert auf vier Prinzipien, zusammengefasst als POUR. Das ist der Standard der WCAG (Web Content Accessibility Guidelines).

[click] Erstens: Perceivable, sprich Wahrnehmbar. Informationen müssen für Menschen mit allen Sinnen zugänglich sein. Alt-Text für Bilder, damit Screen Reader sie beschreiben können. Guter Kontrast, damit man sie auch im Freien liest. Untertitel für Videos, damit Gehörlose folgen können.

[click] Zweitens: Operable, oder Bedienbar. Jeder muss die Anwendung mit den Eingabemitteln steuern können, die er hat. Keyboard-Navigation für Menschen, die die Maus nicht benutzen. Buttons müssen außerdem groß genug sein, damit man sie auf Touchscreens sicher treffen kann. Der Fokus muss sichtbar sein, damit man weiß, wo man ist. Und keine versteckten Zeitlimits — nicht alle lesen im selben Tempo.

[click] Drittens: Understandable, also Verständlich. Die Struktur und Logik müssen klar sein. Semantisches HTML, das die Bedeutung ausdrückt. Labels für Inputs, damit du weißt, was hineingehört. Aussagekräftige Fehlermeldungen statt kryptischer Codes.

[click] Viertens: Robust. Es muss funktionieren, egal welchen Browser oder welche Assistive-Technology jemand nutzt. Valides HTML, damit alles richtig geparst wird. ARIA korrekt eingesetzt, nicht nur dekorativ. Responsive, damit es auf jedem Screen funktioniert.

Alle vier Prinzipien greifen ineinander. Wer einen verbessert, erleichtert die Nutzung für viele.
-->

---
title: Mini Accessibility-Audit
short-title: Mini Accessibility-Audit (1/2)
inner-split: 35
---

<div class="rounded-xl border-2 border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/60 p-5 flex flex-col gap-4">
  <div class="uppercase tracking-widest font-mono opacity-70">Beispiel</div>

  <label class="flex gap-2 items-center">
    <input class="rounded flex-1 border border-zinc-400 dark:border-zinc-600 px-3 py-2 text-sm bg-white dark:bg-zinc-800" placeholder="Suche" />
  </label>

  <div class="flex items-center gap-3 flex-row-reverse">
    <div class="audit-btn outline-blue-dark dark:outline-blue-light"><mdi-magnify /></div>
    <div class="audit-btn">Zurücksetzen</div>
  </div>
</div>

<style>
.audit-success {
  --uno: rounded-md border border-green-dark 'dark:border-green-light' bg-green-light/10 text-green-dark 'dark:text-green-light' px-3 py-2 text-sm not-italic opacity-90;
}
</style>

::right::

<!--prettier-ignore-start-->
```html
<form id="search-form">
  <input placeholder="Suche" 
         name="search-term" />

  <div>
    <button>
      <img src="search.svg" />
    </button>
    <div>Zurücksetzen</div>
  </div>
</form>
```
<!--prettier-ignore-end-->

<style>
.audit-btn {
  --uno: text-xs rounded border border-zinc-400 'dark:border-zinc-600' px-2 py-1 cursor-pointer transition-all duration-200;
}

.slidev-code, .slidev-code-wrapper {
  --slidev-code-font-size: 1.25rem;
}
</style>

<!--
Wir machen jetzt keinen Deep-Dive, sondern einen Mini-Audit wie im echten Review.

Links ein typischer Ausschnitt: Suchfeld und Aktionen. Auf den ersten Blick „funktioniert es“.

Rechts seht ihr das zugrunde liegende HTML.

Erstens: Input ohne sichtbares Label.
-->

---
title: Mini Accessibility-Audit
short-title: Mini Accessibility-Audit (2/2)
inner-split: 35
clicks: 7
---

<script setup lang="ts">
const items = {
  1: 'Der Input hat ein Label.',
  2: 'Das Label hat genug Kontrast.',
  3: 'Die Buttons sind groß genug.',
  5: 'Das Icon hat eine Text-Beschreibung.',
  7: 'Die Tab-Reihenfolge stimmt mit der visuellen Reihenfolge überein.'
};
</script>

<div class="rounded-xl border-2 border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/60 p-5 flex flex-col gap-4">
  <div class="uppercase tracking-widest font-mono opacity-70">Beispiel</div>

  <label class="flex gap-2 items-center">
      <span v-if="$clicks >= 1" class="text-base transition-opacity duration-200" :class="{'opacity-30': $clicks === 1, 'opacity-100': $clicks >= 2}">Suche</span>
    <input class="rounded flex-1 border border-zinc-400 dark:border-zinc-600 px-3 py-2 text-sm bg-white dark:bg-zinc-800" value="Rosenheim" />
  </label>

  <div class="flex items-center gap-3 flex-row-reverse">
    <div class="audit-btn outline-blue-dark dark:outline-blue-light" :class="{ 'text-1rem! px-4! py-2!': $clicks >= 3, 'outline': $clicks === 6 }">
      <mdi-magnify v-if="$clicks < 4" />
      <mdi-image-broken v-else-if="$clicks === 4" />
      <template v-else>Search</template>
    </div>
    <div class="audit-btn" :class="{ 'text-1rem! px-4! py-2!': $clicks >= 3 }">Zurücksetzen</div>
  </div>
</div>

<RenderWhen context="print">
<ul class="text-sm"><li v-for="(item, i) in items" :key="i">{{ item }}</li></ul>
<template #fallback>

<div class="mt-auto audit-success" v-if="$clicks in items">
  {{ items[$clicks] }}
</div>

</template>
</RenderWhen>

<style>
.audit-btn {
  --uno: text-xs rounded border border-zinc-400 'dark:border-zinc-600' px-2 py-1 cursor-pointer transition-all duration-200;
}

.audit-success {
  --uno: rounded-md border border-green-dark 'dark:border-green-light' bg-green-light/10 text-green-dark 'dark:text-green-light' px-3 py-2 text-sm not-italic opacity-90;
}
</style>

::right::

<!--prettier-ignore-start-->
````md magic-move {at:1}
```html
<form id="search-form">
  <input placeholder="Suche" 
         name="search-term" />

  <div>
    <button>
      <img src="search.svg" />
    </button>
    <div>Zurücksetzen</div>
  </div>
</form>
```

```html {||7-10}
<form id="search-form">
  <label>Suche
    <input name="search-term" />
  </label>

  <div>
    <button>
      <img src="search.svg" />
    </button>
    <div>Zurücksetzen</div>
  </div>
</form>
```

```html {7-10}
<form id="search-form">
  <label>Suche
    <input name="search-term" />
  </label>

  <div>
    <button>
      <img src="search.svg" />
    </button>
    <button>Zurücksetzen</button>
  </div>
</form>
```

```html {7-9|7-10}
<form id="search-form">
  <label>Suche
    <input name="search-term" />
  </label>

  <div>
    <button aria-label="Suchen">
      <img src="search.svg" alt="Such-Icon" />
    </button>
    <button>Zurücksetzen</button>
  </div>
</form>
```

```html {7-10}
<form id="search-form">
  <label>Suche
    <input name="search-term" />
  </label>

  <div>
    <button>Zurücksetzen</button>
    <button aria-label="Suchen">
      <img src="search.svg" alt="Such-Icon" />
    </button>
  </div>
</form>
```
````
<!--prettier-ignore-end-->

<style>
.slidev-code, .slidev-code-wrapper {
  --slidev-code-font-size: 1.25rem;
}
</style>

<!--
[click] Ein Platzhalter reicht nicht, weil er verschwindet, sobald man etwas eingibt.

[click] Mit einem Label sieht es besser aus.

Allerdings ist es nicht leicht zu lesen: Der Kontrast ist zu gering.

[click] Und seht: Das Label ist jetzt deutlich sichtbar – viel besser lesbar.

Die Buttons sind auch recht klein.

[click] Viel besser: Jetzt sind die Touch-Targets groß genug und mobil zuverlässig zu treffen.

Diese interaktiven Elemente brauchen außerdem echte Semantik: also Button oder Link statt klickbarem div, damit sie für Screen-Reader und Tastaturen besser bedienbar sind.

[click] Und wenn ein Button nur ein Icon hat, wird er bei einer schlechten Internetverbindung oder beim Request-Fehler unbrauchbar.
[click] Wir brauchen einen zugänglichen Namen, bspw. per `aria-label` oder `alt`.

[click] Der Tastatur-Fokus muss sichtbar sein. Mit nativen Buttons kriegt man das automatisch, aber man muss aufpassen, es nicht wieder zu überschreiben.

Die Reihenfolge muss auch passen. Manchmal kann es in CSS einfacher sein, die Reihenfolge umzukehren, um Buttons zu positionieren, aber das verschlechtert die Bedienbarkeit für Tastatur- und Screen-Reader-Nutzer.

[click] Diese Reihenfolge sieht jetzt besser aus.
-->

---
title: Testing & Tooling
split: 50
hide-footer: true
article-class: flex flex-col gap-4
---

<div class="tooling-timeline"><v-clicks at="1">

[1] In der IDE prüfen

[2] Im Browser mit der Tastatur testen

[3] Mit Screen Reader abhören

[4] In CI mitlaufen lassen

</v-clicks></div>

::right::

<div v-click class="tooling-card">
  
## Automatisiert
  
- axe
- Lighthouse
- ESLint-Plugins

</div>
<div v-click class="tooling-card">

## Manuell

- Tastatur-Navigation
- Screen Reader
- Farb-Kontrast-Checker

</div>

<style>
.tooling-card {
  --uno: rounded-xl border-2 p-5 flex flex-col gap-3 border-zinc-400 'dark:border-zinc-600' bg-zinc-50 'dark:bg-zinc-900/60';
}

.tooling-card h2 {
  --uno: text-lg uppercase tracking-widest font-mono opacity-70 my-0;
}

.tooling-card ul {
  --uno: text-base opacity-80 my-0 pl-5;
}

.tooling-timeline {
  --uno: contents;
}

.tooling-timeline > p {
  --uno: rounded-xl border-2 border-zinc-400 'dark:border-zinc-600' bg-zinc-50 'dark:bg-zinc-900/60' p-4 flex items-center gap-3 text-base my-0;
  span {
    --uno: inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-400 'dark:border-zinc-600' font-mono text-sm;
  }
}

</style>

<!--
Nachdem wir die häufigsten Fehler gesehen haben, geht es darum, wie wir sie früh entdecken.

[click] Automatisierte Checks wie axe, Lighthouse und ESLint-Plugins sind schnell und gut für klare Regeln. Sie finden sofort, was offensichtlich kaputt ist.

[click] Dann prüfen wir manuell: Tastatur, [click] Screen Reader und Kontrast zeigen, ob sich die Bedienung wirklich gut anfühlt.

[click] Und schließlich gehört das in den normalen Workflow: in der IDE, im Browser und in CI.

So wird Accessibility ein normaler Teil der Entwicklung und nicht nur ein letzter Haken am Ende.
-->

---
title: Accessibility im Alltag
---

<v-clicks>

- **Im Review:** Bedienbarkeit wird gezielt geprüft
- **In gemeinsamen UI-Komponenten:** Barrierearme Bausteine skalieren über das ganze Produkt
- **Im Test:** Automatisierte Checks plus manuelle Screen-Reader- und Keyboard-Tests
- **Im Team:** Accessibility-Kriterien sind Teil der Fertig-Checkliste

</v-clicks>

<p v-click class="mt-8 italic opacity-70">
  Accessibility ist kein Zusatz — sie ist Teil von Produktqualität.
</p>

<!--
Zum Abschluss: Accessibility ist kein eigener Arbeitsschritt am Ende, sondern tägliche Praxis.

[click] Im Review prüfen wir nicht nur Logik und Stil, sondern auch Themen wie Labels, Fokuszustände und Tastatur-Reihenfolge.

[click] In gemeinsamen UI-Komponenten zahlt sich das doppelt aus: Wenn Basisbausteine barrierearm gebaut sind, profitieren alle Features automatisch.

[click] Im Test kombinieren wir schnelle automatisierte Checks mit gezielten manuellen Tests, z. B. mit Tastatur und Screen Reader.

[click] Und im Team gehört das in die Fertig-Checkliste: Was nicht zugänglich ist, ist noch nicht fertig. So wird Accessibility kein Zufall, sondern Standard.

[click] Genau so wird aus Accessibility verlässliche Produktqualität.

Und genau da liegt der nächste Schritt:
Wenn wir diese Qualitätsentscheidungen nicht in jedem Feature neu treffen wollen,
brauchen wir gemeinsame Bausteine und Regeln, die sie standardmäßig mitbringen.
-->

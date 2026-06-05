---
layout: chapter-split
title: Accessibility
chapter-number: '05'
section:
  duration: 15m
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

[click] Erstes: Screen Reader zum Navigieren im Web.

[click] Speech-to-Text.

[click] Zooming auf Websites.

[click] Untertitel bei Videos.

[click] Dark Mode.

[click] Mit einer Hand das Handy bedienen.

[click] Und das ist der Punkt: Das ist Accessibility. Nicht ein Nischen-Feature für Menschen mit Behinderungen, sondern eure täglichen Situationen. Du hältst einen Kaffee in der Hand und scrollst mit der anderen. Du magst Dark Mode. Du siehst kleinen Text nicht gut und zoomst Websites.

Accessibility ist universal. Deshalb bauen wir es von Anfang an ein.
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

[click] Dieselbe Barriere, unterschiedliche Ursachen. Schlechter Farbkontrast versagt für jemanden mit Farbsehschwäche — und für jeden, der im Freien auf sein Handy schaut. Kein Captions? Schlecht für Gehörlose, und für jeden, der gerade nicht laut machen kann.

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
Accessibility basiert auf vier Prinzipien, zusammengefasst als POUR. Das ist der Standard der WCAG.

[click] Erstens: Perceivable, sprich Wahrnehmbar. Informationen müssen für Menschen mit allen Sinnen zugänglich sein. Alt-Text für Bilder, damit Screen Reader sie beschreiben können. Guter Kontrast, damit man sie auch im Freien liest. Untertitel für Videos, damit Gehörlose folgen können.

[click] Zweitens: Operable, oder Bedienbar. Jeder muss die Anwendung mit den Eingabemitteln steuern können, die er hat. Keyboard-Navigation für Menschen, die die Maus nicht benutzen. Buttons müssen außerdem groß genug sein, damit man sie auf Touchscreens sicher treffen kann. Der Fokus muss sichtbar sein, damit man weiß, wo man ist. Und keine versteckten Zeitlimits — nicht alle lesen im selben Tempo.

[click] Drittens: Understandable, also Verständlich. Die Struktur und Logik müssen klar sein. Semantisches HTML, das die Bedeutung ausdrückt. Labels für Inputs, damit du weißt, was hineingehört. Aussagekräftige Fehlermeldungen statt kryptischer Codes.

[click] Viertens: Robust. Es muss funktionieren, egal welchen Browser oder welche Assistive-Technology jemand nutzt. Valid HTML, damit alles richtig geparst wird. ARIA korrekt eingesetzt, nicht nur dekorativ. Responsive, damit es auf jedem Screen funktioniert.

Alle vier Prinzipien greifen ineinander. Aktiviere einen, erleichterst du die Nutzung für viele.
-->

---
title: Mini Accessibility-Audit
inner-split: 35
left:
  class: flex flex-col
right:
  class: flex flex-col
hide-footer: true
clicks: 8
---

<div class="rounded-xl border-2 border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/60 p-5 flex flex-col gap-4">
  <div class="uppercase tracking-widest font-mono opacity-70">Beispiel</div>

  <label class="flex gap-2 items-center">
      <span v-if="$clicks >= 2" class="text-base transition-opacity duration-200" :class="{'opacity-30': $clicks === 2, 'opacity-100': $clicks >= 3}">Suche</span>
    <input class="rounded flex-1 border border-zinc-400 dark:border-zinc-600 px-3 py-2 text-sm bg-white dark:bg-zinc-800" :placeholder="$clicks < 1 ? 'Suche' : ''" :value="$clicks > 0 ? 'Rosenheim' : ''" />
  </label>

  <div class="flex items-center gap-3 flex-row-reverse">
    <div class="audit-click-bad outline-blue-dark dark:outline-blue-light" :class="{ 'text-1rem! px-4! py-2!': $clicks >= 4, 'outline': $clicks === 7 }"><mdi-image-broken v-if="$clicks === 5" /><mdi-magnify v-else /></div>
    <div class="audit-click-bad" :class="{ 'text-1rem! px-4! py-2!': $clicks >= 4 }">Speichern</div>
  </div>
</div>

<v-switch class="mt-auto audit-success">

<template #2>Der Input hat ein Label.</template>

<template #3>Das Label hat genug Kontrast.</template>

<template #4-5>Die Buttons sind groß genug.</template>

<template #6-7>Das Icon hat eine Text-Beschreibung.</template>

<template #8>Die Tab-Reihenfolge stimmt mit der visuellen Reihenfolge überein.</template>
</v-switch>

<style>
.audit-btn-bad {
  --uno: text-xs rounded border border-zinc-400 'dark:border-zinc-600' px-2 py-1 flex items-center justify-center transition-all duration-200;
}

.audit-click-bad {
  --uno: text-xs rounded border border-zinc-400 'dark:border-zinc-600' px-2 py-1 cursor-pointer transition-all duration-200;
}

.audit-hints {
  --uno: text-xs opacity-75 flex flex-col gap-1;
}

.audit-success > :deep(.slidev-vclick-current) {
  --uno: rounded-md border border-green-dark 'dark:border-green-light' bg-green-light/10 text-green-dark 'dark:text-green-light' px-3 py-2 text-sm not-italic opacity-90;
}
</style>

::right::

<!--prettier-ignore-start-->
````md magic-move {at:1}
```html {|}
<form id="search-form">
  <input placeholder="Suche" 
         name="search-term" />

  <div>
    <button>
      <img src="search.svg" />
    </button>
    <div>Speichern</div>
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
    <div>Speichern</div>
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
    <button>Speichern</button>
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
    <button>Speichern</button>
  </div>
</form>
```

```html {7-10}
<form id="search-form">
  <label>Suche
    <input name="search-term" />
  </label>

  <div>
    <button>Speichern</button>
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
Wir machen jetzt keinen Deep-Dive, sondern einen Mini-Audit wie im echten Review.

Links ein typischer Ausschnitt: Suchfeld und Aktionen. Auf den ersten Blick „funktioniert es“.

Rechts seht ihr das zugrunde liegende HTML.

Erstens: Input ohne sichtbares Label. [click] Ein Platzhalter reicht nicht, weil er verschwindet, sobald man etwas eingibt.

[click] Mit einem Label sieht es besser aus.

Allerdings ist er nicht leicht zu lesen: Der Kontrast ist zu gering.

[click] Und seht: Das Label ist jetzt deutlich sichtbar – viel besser lesbar.

Die Buttons sind auch recht klein.

[click] Viel besser: Jetzt sind die Touch-Targets groß genug und mobil zuverlässig zu treffen.

Diese interaktiven Elemente brauchen außerdem echte Semantik: also Button oder Link statt klickbarem div, damit sie für Screen-Reader und Tastaturen besser bedienbar sind.

[click] Und wenn ein Button nur ein Icon hat, wird er bei einer schlechten Internetverbindung oder beim Request-Fehler unbrauchbar.
[click] Wir brauchen einen zugänglichen Namen, bspw. per `aria-label` oder `alt`.

[click] Die Tastatur-Fokus muss sichtbar sein. Mit nativen Buttons kriegt man das automatisch, aber man muss aufpassen, es nicht wieder zu überschreiben.

Die Reihenfolge muss auch passen. Manchmal kann es in CSS einfacher sein, die Reihenfolge umzukehren, um Buttons zu positionieren, aber das verschlechtet die Bedienbarkeit für Tastatur- und Screen-Reader-Nutzer.

[click] Diese Reihenfolge sieht jetzt besser aus.
-->

---


<!--
Grober Plan (12 min):

Kapitelfolie: (~1 min)

- Übergang: Eine Anwendung ist nur dann wirklich gut, wenn sie für alle funktioniert

Slide 0: Audience Activation – „Wer nutzt Accessibility-Features?" (~1 min)
- Screen Reader zum Navigieren im Web
- Voice Control / Speech-to-Text
- Zooming auf Websites
- Untertitel bei Videos
- Dark Mode
- Mit einer Hand das Handy bedienen
- Reveal: „Das ist Accessibility. Nicht Nischen-Feature – eure tägliche Realität."

Slide 1: Was ist Accessibility? (~2 min)

- Visualisierung: verschiedene Benutzer (Blinde, Motor-Einschränkungen, Gehörlose, kognitiv)
- Nicht nur Behinderung: alt, müde, abgelenkt, schlechte Internetverbindung
- Qualität für alle bedeutet auch Nutzbarkeit für alle

Slide 2: Kernprinzipien – POUR (~2 min)

- Perceivable · Operable · Understandable · Robust
- Semantisches HTML · Keyboard-Navigation · Farben/Kontrast · Labels
- Accessibility ist in der HTML/API-Schicht verankert, nicht nur CSS

Slide 3: Häufige Probleme – und wie man sie behebt (~2.5 min)

- Konkrete Beispiele in Komponenten: fehlende Labels, schlechte Kontraste, keine Tab-Navigation
- Live-Demo oder Visualisierung: Screen Reader Feedback
- Quick Wins: aria-label, semantic HTML, color-contrast Check
- Accessibility gehört in die Komponente von Anfang an

Slide 4: Testing & Tooling (~2 min)

- Automatisiert: axe, Lighthouse, ESLint-Plugins
- Manuell: Keyboard-Navigation, Screen Reader, Farb-Kontrast-Checker
- In CI/CD integrieren – nicht erst am Ende checken
- Tools sind Helfer, kein Ersatz für manuelles Testing

Slide 5: Accessibility im Alltag (~1.5 min)

- Im Review: Werden Labels geprüft? Ist die Reihenfolge richtig?
- Im Design-System: Komponenten mit guter Accessibility skalieren Vorteile
- Im Test: Accessibility-Tests neben Unit-Tests
- Übergang: Qualität ist ein kontinuierlicher Prozess – durch alle Layer
-->

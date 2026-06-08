---
layout: chapter-split
title: Design-Systeme
chapter-number: '06'
section:
  duration: 15m
---

Konsistenz und wiederverwendbare Patterns

<!--
Bis jetzt ging es viel um Qualität im Alltag: gute Regeln im Review, im Test und im Team.

Jetzt kommt der nächste Schritt: Wie machen wir diese Qualität skalierbar, sodass nicht jede Person dieselben Probleme immer wieder neu löst?

Genau dafür sind Design-Systeme da: gemeinsame Bausteine, gemeinsame Regeln, gemeinsame Sprache.

Es geht also nicht nur um „schöne UI“, sondern um Konsistenz, Geschwindigkeit und weniger Reibung im Team.

Kurz: Von Einzellösungen zu wiederverwendbaren Patterns.
-->

---
title: Warum Design-Systeme?
article-class: flex flex-col gap-6
---

<InconsistentDialogs red-buttons />

<v-clicks>

- Ohne gemeinsame Bausteine wird die UI schnell inkonsistent
- Jede neue Variante wird zur Sonderlösung
- Änderungen müssen an vielen Stellen separat nachgezogen werden

</v-clicks>

<!--
Wir gehen nochmal zurück zu dem Beispiel von vorhin.

Am Anfang haben wir darauf geschaut und gesagt: Das sieht inkonsistent aus. Zwei Dialoge, zwei unterschiedliche Stile, zwei unterschiedliche Regeln.

Jetzt schauen wir mit einer anderen Frage darauf: Warum passiert das überhaupt?

[click] Die einfache Antwort ist: Es gibt keine gemeinsamen Bausteine. Jeder baut seinen eigenen Dialog, seinen eigenen Button, seine eigene Variante.

[click] Und damit wird jede kleine Anforderung sofort zur Sonderlösung. Noch ein anderer Dialog. Noch ein anderer Button. Noch eine Ausnahme.

[click] Das Problem ist also nicht nur optische Inkonsistenz. Änderungen müssen dann an vielen Stellen separat nachgezogen werden — und das wird oft einfach vergessen oder nicht einheitlich gemacht.

Genau an diesem Punkt werden Design-Systeme interessant: Sie schaffen gemeinsame Bausteine und gemeinsame Regeln.
-->

---
title: Was gehört in ein Design-System?
article-class: flex flex-col-reverse justify-center items-center gap-4
---

<div v-click class="design-system-layer w-160 border-zinc-500 bg-zinc-300 text-zinc-900 dark:border-zinc-500 dark:bg-zinc-700 dark:text-zinc-100">

## Tokens

Farben · Spacing · Typografie · Radius

</div>

<div v-click class="design-system-layer w-148 border-zinc-400 bg-zinc-200 text-zinc-900 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-100">

## Komponenten

Button · Input · Select · Modal

</div>

<div v-click class="design-system-layer w-136 border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-500 dark:bg-zinc-800/80 dark:text-zinc-100">

## Patterns

Formular · Navigation · Dialog-Ablauf

</div>

<div v-click class="design-system-layer w-124 border-zinc-300 bg-white text-zinc-900 dark:border-zinc-500 dark:bg-zinc-900 dark:text-zinc-100">

## Guidelines & Doku

Dos & Don’ts · Beispiele · Nutzungsregeln · Best Practices

</div>

<style>
.design-system-layer {
  --uno: rounded-xl border-2 px-6 py-4 flex items-center justify-between shadow-sm gap-2;

  h2 {
    --uno: text-lg uppercase tracking-widest font-mono;
  }

  p {
    --uno: text-base opacity-75 text-right m-0;
  }
}
</style>

<!--
Wenn man nur von Komponenten spricht, greift das bei Design-Systemen zu kurz.

[click] Ganz unten liegen die Tokens: also Farben, Abstände, Typografie oder Radius. Das sind die kleinsten wiederverwendbaren Designentscheidungen.

[click] Darauf bauen die Komponenten auf: Button, Input, Select, Modal. Das ist die Ebene, an die viele zuerst denken.

[click] Eine Ebene darüber liegen Patterns. Also wiederkehrende Kombinationen von Komponenten, zum Beispiel Formulare, Navigation oder Dialog-Abläufe.

[click] Und ganz oben braucht es Guidelines und Dokumentation: Wann benutze ich was? Welche Regeln gelten? Was sind gute und schlechte Beispiele?

Genau dadurch wird aus einer Sammlung von Bausteinen ein Design-System.
-->

---
title: Design Tokens bauen aufeinander auf
article-class: flex flex-col-reverse justify-center items-center gap-4 w-70cqw mx-auto
---

<div v-click class="token-layer w-full rounded-xl border-2 px-5 py-4 flex flex-col gap-1 border-zinc-500 bg-zinc-300 text-zinc-900 dark:border-zinc-500 dark:bg-zinc-700 dark:text-zinc-100">

## Primitive Tokens

`blue-500` <span class="token rounded-full bg-blue-500" /> · `spacing-4` <span class="token token-spacing" /> · `radius-md` <span class="token b-l-2 b-t-2 rounded-tl-3 b-[currentColor]" /> · `font-serif` <span class="token token-font-serif">Aa</span>

</div>

<div v-click class="token-layer w-full rounded-xl border-2 px-5 py-4 flex flex-col gap-1 border-zinc-400 bg-zinc-200 text-zinc-900 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-100">

## Semantische Tokens

`color-action-primary` <span class="token rounded-full bg-blue-500" /> · `space-form-gap` <span class="token token-spacing" /> · `font-legal` <span class="token token-font-serif">Aa</span>

</div>

<div v-click class="token-layer w-full rounded-xl border-2 px-5 py-4 flex flex-col gap-1 border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-500 dark:bg-zinc-900 dark:text-zinc-100">

## Komponenten-Tokens

`button-primary-bg` <span class="token rounded-full bg-blue-500" /> · `impressum-body-text` <span class="token token-font-serif">Aa</span>

</div>

<style>

.token {
  --uno: inline-block w-4 h-4 vertical-text-top;
}

.token-spacing {
  --uno: relative border-l-2 border-r-2 border-[currentColor] h-3 mt-0.5;
}

.token-spacing::before {
  --uno: content-empty absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-[currentColor];
}

.token-font-serif {
  --uno: h-auto w-auto min-w-4 px-0.5 text-16px leading-5 text-center rounded border border-[currentColor] font-serif vertical-unset;
}

.token-layer {
  --uno: w-full rounded-xl border-2 px-5 py-4 flex flex-col gap-1;

  h2 {
    --uno: text-base uppercase tracking-widest font-mono;
  }
  
  p {
    --uno: text-base opacity-80 m-0;
  }
}

</style>

<!--
Ein häufiger Fehler ist: Tokens als eine flache Liste zu sehen.

[click] Unten starten wir mit primitiven Tokens: reine Designwerte wie Farben, Abstände, Radius.

[click] Darauf bauen semantische Tokens auf. Die geben Bedeutung statt Rohwerten, z. B. Primary Action oder Formular-Abstand.

[click] Und ganz oben liegen Komponenten-Tokens: konkrete Ableitungen pro Baustein wie Button-Hintergrund oder Input-Fokus.

Dadurch baut alles aufeinander auf. Wir ändern unten einmal sinnvoll — und oben passt sich das Verhalten konsistent an.
-->

---
title: In der Praxis - von Wildwuchs zu Bausteinen
article-class: flex flex-col gap-4 -mt-8
hide-footer: true
---

<v-switch at="1">
<template #0>
<InconsistentDialogs destructive-right-action />
</template>
<template #6>
<div class="flex gap-8 justify-center items-start">
<ConsistentDialog title="Änderungen speichern" primary-button-text="Speichern">
  Sie haben ungespeicherte Änderungen. Möchten Sie diese speichern?
</ConsistentDialog>
<ConsistentDialog title="Datei löschen" primary-button-variant="destructive" primary-button-text="Löschen">
  Möchten Sie die Datei <span class="font-mono">the final report v2.pdf</span> wirklich löschen?
</ConsistentDialog>
</div>
</template>
</v-switch>

<v-switch class="mt-auto" at="1">
<template #0>

::p{.m-0.text-center.text-lg.italic.opacity-80}
Welche **gewollten** Unterschiede seht ihr?
::

</template>

<template #1>

<table class="text-base practice-diff-table">
  <thead>
    <tr>
      <th>Eigenschaft</th>
      <th>Links</th>
      <th>Rechts</th>
    </tr>
  </thead>
  <v-clicks>
    <tr>
      <th>Titeltext</th>
      <td><q>Änderungen speichern</q></td>
      <td><q>Datei löschen</q></td>
    </tr>
    <tr>
      <th>Body-Text</th>
      <td><q>Sie haben ungespeicherte Änderungen.<br/>Möchten Sie diese speichern?</q></td>
      <td><q>Möchten Sie die Datei the final<br/> report v2.pdf wirklich löschen?</q></td>
    </tr>
    <tr>
      <th>Primary-Action</th>
      <td><code>primary</code></td>
      <td><code>destructive</code></td>
    </tr>
    <tr>
      <th>Primary-Action-Label</th>
      <td>Speichern</td>
      <td>Löschen</td>
    </tr>
  </v-clicks>
</table>

</template>
<template #5-7>

<div class="flex gap-8 justify-center *:flex-1">

<!--prettier-ignore-start-->
```html
<ui-dialog
  title="Änderungen speichern"
  primary-button-text="Speichern"
>
  Sie haben ungespeicherte Änderungen.
  Möchten Sie diese speichern?
</ui-dialog>
```

```html
<ui-dialog
  title="Datei löschen"
  primary-button-variant="destructive"
  primary-button-text="Löschen"
>
  Möchten Sie die Datei
  <code>the final report v2.pdf</code>
  wirklich löschen?
</ui-dialog>
```
<!--prettier-ignore-end-->

<style>
pre { --slidev-code-font-size: 1rem }
</style>

</div>

</template>
</v-switch>

<style>
table {
  --uno: text-base;

  th,
  td {
    --uno: p-2;
  }

  th {
    --uno: font-semibold;
  }

  :deep(.slidev-vclick-hidden) {
    --uno: border-b-transparent;
  }
}
</style>

<!--
Wir nutzen nochmal dasselbe Beispiel wie am Anfang.

Diesmal ist die Aufgabe aber eine andere: Nicht einfach nur Unterschiede finden, sondern die gewünschten Unterschiede erkennen. Welche seht ihr?

[click] Die Titeltexte sollen sich natürlich unterscheiden.

[click] Auch die Body-Texte sind unterschiedlich, weil sie unterschiedliche Informationen vermitteln. Hier sind sie Strings, aber wahrscheinlich wollen wir dynamischen Inhalt unterstützen, damit beispielsweise der Dateiname oder die Anzahl der ungespeicherten Änderungen automatisch eingefügt werden kann, am besten schön formatiert.

[click] Auf der rechten Seite wird etwas gelöscht, also kennzeichen wir die destruktive Aktion auch visuell, z. B. mit roter Farbe. Diese Werte entsprechen den Tokens, die das Design-System bereitstellt.

[click] Und schließlich ist das Label der Primary Action unterschiedlich: OK vs. Löschen. Der Unterschied beim Abbrechen-Label müssen wir nicht berücksichtigen: Vorher war es eher verwirrend, dass der linke Dialog den englischen Text „Cancel" hatte.

Genau diese Inputs brauchen wir erstmal, um eine Komponente in unserem Design-System zu bauen. Aber danach können wir sie überall wiederverwenden — mit denselben Regeln, derselben Accessibility, und derselben Konsistenz.

[click] So würde das dann im Code aussehen, [click] und jetzt sind die Dialoge komplett konsistent. Jeder zukünftige Dialog wird auch genauso aussehen, ohne dass man überhaupt HTML oder CSS schreiben muss.
-->

---
title: Zusammenarbeit Design ↔ Entwicklung ↔ QA
article-class: flex flex-col gap-6 justify-center
---

<script setup>
import '../styles/column-layout.css';
</script>

<div class="grid-cols-3 column-layout-grid">

<div v-click class="column-layout-card border-blue-dark dark:border-blue-light bg-blue-light/20 dark:bg-blue-dark/25">

## Design

<mdi-palette-outline class="column-layout-icon" />

- Wählt passende Komponenten aus
- Nutzt Tokens statt Pixeln
- Beachtet die Regeln und Guidelines

</div>

<div v-click class="column-layout-card border-orange-dark dark:border-orange-light bg-orange-light/20 dark:bg-orange-dark/10">
      
## Entwicklung

<mdi-code-tags class="column-layout-icon" />
 
- Baut das konkrete Feature aus vorhandenen Bausteinen
- Accessibility by default
- Nutzt die Komponenten-APIs

</div>

<div v-click class="column-layout-card border-green-dark dark:border-green-light bg-green-light/20 dark:bg-green-dark/25">

## QA

<mdi-clipboard-check class="column-layout-icon" />

- Prüft das Feature gegen die vereinbarten Regeln
- Testet Verhalten, Varianten und States
- Die Bausteine sind stabiler als einzelne Seiten

</div>
</div>

<div v-click class="rounded-xl border border-zinc-400 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-900 px-5 py-3 text-center text-lg">

::p{.m-0.text-base.uppercase.tracking-widest.opacity-70}
Single Source of Truth
::

Tokens + Komponenten-Doku

</div>

<style>
</style>

<!--
Sobald die Bausteine des Design-Systems stehen, wird die Zusammenarbeit zwischen Design, Entwicklung und QA viel einfacher.

[click] Design wählt passende Bausteine aus, definiert das gewünschte UI-Pattern und liefert Entwürfe anhand von Tokens und Komponenten statt Pixelwerte.

[click] Entwicklung baut daraus das konkrete Feature zusammen. Weil Design schon kennt, welche Konfig-Optionen die Komponenten anbieten, sind die Entwürfe viel einfacher umzusetzen. Und Accessibility ist direkt eingebaut, weil die Bausteine das schon berücksichtigen.

[click] QA testet das fertige Feature: Stimmen Verhalten, Varianten und States im Zusammenspiel der Bausteine?

[click] Damit das funktioniert, brauchen alle dieselbe Quelle: Tokens, Komponentendoku und Design-System-Guidelines.

Das führt zu besseren Übergaben, weniger Missverständnisse und schnelleren Releases.
-->

---
title: Bestehende Systeme zuerst?
article-class: flex flex-col gap-6
---

<div class="grid grid-cols-2 gap-4">

<div v-click class="rounded-xl border-2 border-green-dark dark:border-green-light bg-green-light/20 dark:bg-green-dark/25 p-4">

## Material Design

- Von Google
- Eine UI, die sehr Android-nah wirkt
- Angular, aber auch Ports für React, Vue, etc.
- https://material.angular.dev/

</div>

<div v-click class="rounded-xl border-2 border-petrol-dark dark:border-petrol-light bg-petrol-light/20 dark:bg-petrol-dark/25 p-4">

## Primer

- Von GitHub
- Fokus auf Konsistenz und Accessibility
- Nur React, aber auch CSS-Only-Variante
- https://primer.style/

</div>

</div>

<v-clicks>

- Startet mit einem bestehenden System, wenn es gut zum Produkt passt
- Baut eigene Bausteine nur dort, wo ihr euch bewusst unterscheiden wollt

</v-clicks>

<!--
Bevor man selbst ein Design-System baut, lohnt sich oft ein Blick auf bestehende Systeme.

Es gibt natürlich recht viele, hier sind nur ein paar Beispiele:

[click] Material Design kommt von Google und ist sehr vollständig, wirkt aber je nach Produkt schnell sehr Android-nah. Es gibt eine offizielle Angular-Implementierung, aber auch Ports für React, Vue und andere Frameworks.

[click] Primer ist Githubs eigenes System, entwickelt mit Fokus auf Konsistenz und Accessibility. Es ist vor allem React-fokussiert, aber es gibt auch eine CSS-Only-Variante, falls ihr etwas anderes nutzen möchtet.

Wenn man etwas schnell bauen will, ist es oft sinnvoll, mit einem bestehenden System zu starten. Das spart Zeit und liefert direkt viele Bausteine.

[click] Wichtig ist die Strategie: Übernehmen, was passt.

[click] Und nur dort eigene Bausteine bauen, wo man sich wirklich unterscheiden möchte.
-->

---
title: Einführung im Alltag
article-class: flex flex-col gap-6
---

<v-clicks>

- Klein starten: 3-5 Kernkomponenten mit klaren Standards
- Gemeinsame Arbeitsweise festlegen: Wer pflegt was?
- Schrittweise Migration: neue Features zuerst
- Altbestand nur anfassen, wenn ihr dort sowieso arbeitet

</v-clicks>

::p{v-click .text-center}
Qualität wird skalierbar, wenn gute Bausteine zur Standardlösung werden.
::

<!--
Zum Abschluss geht es darum, wie man das im Alltag einführt.

[click] Nicht mit 30 Komponenten starten, sondern mit wenigen Kernbausteinen.

[click] Dann klären, wer die Bausteine pflegt und wie Änderungen abgestimmt werden.

[click] Bei der Migration pragmatisch sein: neue Features zuerst.

[click] Alten Code nur anfassen, wenn ihr dort ohnehin arbeitet.

[click] So wird Qualität Schritt für Schritt skalierbar, statt ein Big-Bang-Projekt zu werden.
-->

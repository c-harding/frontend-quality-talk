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

[click] Das Problem ist also nicht nur optische Inkonsistenz. Änderungen müssen dann an vielen Stellen separat nachgezogen werden — und das wird oft einfach vergessen, oder nicht einheitlich gemacht.

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

<v-switch class="mt-auto" at="1">
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

[click] Und schließlich ist das Label der Primary Action unterschiedlich: OK vs. Löschen. Der Unterscheid beim Abbrechen-Label müssen wir nicht berücksichtigen: Vorher war es eher verwirrend, dass der linke Dialog den englischen Text „Cancel“ hatte.

Genau diese Inputs brauchen wir erstmal, um eine Komponente in unserem Design-System zu bauen. Aber danach können wir sie überall wiederverwenden — mit denselben Regeln, derselben Accessibility, und derselben Konsistenz.

[click] So würde das dann im Code aussehen, [click] und jetzt sind die Dialoge komplett konsistent. Jeder zukünftige Dialog wird auch genauso aussehen, ohne dass man überhaupt HTML oder CSS schreiben muss.
-->

---


<!--
Grober Plan (12 min):

Kapitelfolie: (~1 min)
- Übergang: Accessibility skaliert nur, wenn gute Lösungen wiederverwendbar sind
- Von Einzel-Fixes zu systematischer UI-Qualität

Slide 1: Warum Design-Systeme? (~2 min)
- Probleme ohne System: Inkonsistenz, Doppelarbeit, UI-Drift
- Mit System: einheitliches Verhalten, schnellere Umsetzung, weniger Diskussionen
- Design-Systeme sind Qualitäts- und Produktivitätswerkzeug

Slide 2: Was gehört in ein Design-System? (~2 min)
- Design Tokens: Farben, Spacing, Typografie, Radius, States
- Komponenten: Button, Input, Modal inkl. Varianten und States
- Regeln & Guidelines: Wann nutze ich was? Was ist „richtig“?
- Dokumentation + Beispiele als gemeinsame Referenz

Slide 3: Design Tokens bauen aufeinander auf (~2 min)
- Primitive -> Semantische -> Komponenten-Tokens
- Bedeutung statt Rohwerten schafft konsistente Entscheidungen
- Änderungen vererben sich kontrolliert durch das System

Slide 4: In der Praxis - von Wildwuchs zu Bausteinen (~2.5 min)
- Vorher/Nachher: mehrfacher eigener Button-Code vs. zentrale Komponente
- Einheitliche API für Komponenten (Props/Variants statt Custom-CSS)
- Accessibility by default (Fokus, Kontrast, Labels) direkt eingebaut
- Weniger Bugs bei Änderungen, weil Anpassungen zentral passieren

Slide 5: Zusammenarbeit Design <-> Entwicklung <-> QA (~2.5 min)
- Gemeinsame Sprache: Tokens und Komponenten statt Pixel-Diskussionen
- Figma, Code und Doku müssen dieselbe Quelle widerspiegeln
- QA testet erwartbares Verhalten statt Sonderfälle je Screen
- Gute Übergaben reduzieren Reibung und Nacharbeit

Slide 6: Einführung im Alltag (~2 min)
- Klein starten: 3-5 Kernkomponenten mit klaren Standards
- Contribution-Regeln: Wer darf ändern, wie wird reviewed?
- Migration schrittweise: neue Features zuerst, Altbestand sukzessive
- Übergang: Design-Systeme machen Qualität skalierbar
-->

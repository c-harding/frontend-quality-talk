---
layout: chapter-split
title: Motivation
chapter-number: '01'
section:
  duration: 10m
---

Warum ist Frontend-Qualität so wichtig?

---
title: Kennt ihr das?
clicks: 3
---

<InconsistentDialogs v-click :show-right-dialog="$clicks >= 2" :red-buttons="$clicks >= 3" />

<!--
Kurze Frage an euch: Wer hat schon mal in einem Teamprojekt gearbeitet, wo das Frontend irgendwann chaotisch wurde?

[click] Hier ein Beispiel: Jemand baut einen Dialog zum Speichern.

[click] Dann baut jemand anderes einen zweiten Dialog — diesmal zum Löschen. Sieht schon anders aus.

[click] Später wird die Button-Farbe im Lösch-Dialog auf Rot geändert — aber nur dort.
-->

---
title: Häufige Probleme
---

<v-clicks>

- Jeder stylt Buttons anders — **inkonsistente UI**

- Copy-Paste-Komponenten mit kleinen Unterschieden

- CSS-Chaos: `!important` überall

- Ein Rename bricht alles — keiner merkt es bis zur Demo

</v-clicks>

<!--
[click] Jeder stylt anders — Buttons sehen auf jeder Seite anders aus.

[click] Statt Komponenten wiederzuverwenden, wird copy-pasted und leicht angepasst.

[click] CSS wird mit !important überschrieben, weil niemand mehr durchblickt.

[click] Und wenn jemand etwas umbenennt, fällt es erst in der Demo auf.
Einer dieser Buttons funktioniert nicht, weil das Event umbenannt wurde.
-->

---
title: Was passiert ohne Qualität?
articleClass: justify-center
---

<div class="flex justify-between items-start px-8">

<div class="text-center" v-click>
  <div class="text-6xl mb-4">😎</div>
  <div class="text-sm text-gray-400 mb-1">Woche 1</div>
  <q class="text-lg font-semibold">Geht doch erstmal</q>
</div>

<div class="text-4xl text-gray-500 self-center" v-click>→</div>

<div class="text-center" v-after>
  <div class="text-6xl mb-4">😕</div>
  <div class="text-sm text-gray-400 mb-1">Woche 4</div>
  <q class="text-lg font-semibold">Warum sieht das bei<br/>mir anders aus?</q>
</div>

<div class="text-4xl text-gray-500 self-center" v-click>→</div>

<div class="text-center" v-after>
  <div class="text-6xl mb-4">😱</div>
  <div class="text-sm text-gray-400 mb-1">Woche 8</div>
  <q class="text-lg font-semibold">Traut sich keiner<br/>mehr, was zu ändern</q>
</div>

</div>

<!--
Das sind die Symptome. Aber wie eskaliert das eigentlich über die Zeit?

[click] Woche 1: Alles läuft. Jeder baut sein Feature, man kommt schnell voran.
Qualität? Kommt später. Erstmal soll es funktionieren.

[click] Woche 4: Jemand merkt, dass sein Feature bei einem Teamkollegen anders aussieht.
Die Abstände sind anders, die Farben stimmen nicht überein.
Man fängt an, Dinge mit !important zu überschreiben. Es funktioniert — irgendwie.

[click] Woche 8: Jetzt traut sich keiner mehr, etwas anzufassen.
Jede Änderung hat unerwartete Nebenwirkungen.
Refactoring? Zu riskant. Neue Features? Dauern doppelt so lang.
Das Projekt ist technisch am Limit — und es ist erst Woche 8.
-->

---
title: 'Frontend-Qualität ≠ nur UI'
---

<div class="grid grid-cols-2 grid-rows-2 gap-6 h-full">
  <div class="border border-gray-600 dark:border-2 dark:border-gray-400 rounded-lg p-6 text-center" v-click>
    <mdi-check-circle class="text-4xl mb-3 text-green-400 dark:text-green-400 text-green-700" />
    <div class="text-xl font-bold mb-1">Korrektheit</div>
    <div class="text-sm op60">Tut es, was es soll?</div>
  </div>
  
  <div class="border border-gray-600 dark:border-2 dark:border-gray-400 rounded-lg p-6 text-center" v-click>
    <mdi-view-grid class="text-4xl mb-3 dark:text-blue-400 text-blue-700" />
    <div class="text-xl font-bold mb-1">Konsistenz</div>
    <div class="text-sm op60">Sieht es überall gleich aus?</div>
    <div class="text-sm op60" v-click="3"><b>Funktioniert</b> es überall gleich?</div>
  </div>
  
  <div class="border border-gray-600 dark:border-2 dark:border-gray-400 rounded-lg p-6 text-center" v-click="4">
    <mdi-wrench class="text-4xl mb-3 text-orange-400 light:text-orange-700" />
    <div class="text-xl font-bold mb-1">Wartbarkeit</div>
    <div class="text-sm op60">Kann jemand anderes es ändern?</div>
  </div>
  
  <div class="border border-gray-600 dark:border-2 dark:border-gray-400 rounded-lg p-6 text-center" v-click="5">
    <mdi-wheelchair-accessibility class="text-4xl mb-3 text-purple-400 light:text-purple-700" />
    <div class="text-xl font-bold mb-1">Nutzbarkeit</div>
    <div class="text-sm op60">Können alle es bedienen?</div>
  </div>
</div>

<!--
Frontend-Qualität ist mehr als nur hübsch aussehen. Es gibt vier Dimensionen:

[click] Korrektheit — macht das Feature, was es soll? Werden Daten richtig angezeigt?

[click] Konsistenz — sieht es überall gleich aus? Oder hat jede Seite eigene Styles?

[click] Und nicht nur optisch: funktioniert es auch überall gleich? Gleiche Interaktionen, gleiches Verhalten.
Wenn ein Button einen Bestätigungsdialog zeigt — tun das alle ähnlichen Buttons auch?

[click] Wartbarkeit — kann ein Teamkollege euren Code verstehen und ändern, ohne etwas kaputt zu machen?

[click] Und Nutzbarkeit — können alle Nutzer die Anwendung bedienen? Auch mit Tastatur, Screenreader, oder eingeschränktem Kontrast?
-->

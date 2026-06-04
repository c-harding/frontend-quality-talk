---
theme: '@qaware-internal/slidev-theme-qaware'
title: UI/UX Qualitätssicherung
shortTitle: Titel
duration: 90m
section:
  duration: 1m
endTime: '09:30'
color: purple
author: Charlie Harding · QAware GmbH
authorUrl: qaware.de
articleClass: mr-55%
comark: true
colorScheme: dark
htmlAttrs:
  lang: de-DE
addons:
  - 'slidev-addon-timing-bar'
twoslash: true
---

Frontends bauen, die halten

::footer::

Charlie Harding
<SmartLink to="charlie.harding@qaware.de"/>

<!--
Kommentar
-->

---
title: Wer bin ich?
inner-split: 70
left:
  class: text-lg
right:
  class: flex
q-placements: KL
---

**Charlie Harding**

<v-clicks depth="3">

- **2016–2020** B.Eng. + M.Eng. Computer Science, University of Bristol
  - **2018–2019** Erasmus-Student an der TU München

- **seit 2020** QAware GmbH München (Senior Software Engineer)
  - Schwerpunkt Frontend-Entwicklung

</v-clicks>

::right::

<img src="/media/cha.jpeg"  class="rounded-full w-70 mx-auto" />

<!--
Kurz zu mir: Ich bin Charlie.

Ich habe in Bristol Informatik studiert, [click] mit einem Jahr in München als Erasmus-Student.
-->

::footer::

#gernPerDu

---
shortTitle: Agenda
q-placements: JD
hide-footer: true
inner-split: 25
left:
  class: flex justify-center text-4xl font-bold leading-tight
right:
  class: flex justify-center
---

Agenda

::right::

**01** Motivation [— Warum ist Frontend-Qualität so wichtig?]

**02** TypeScript [— Typen als Sicherheitsnetz und Dokumentation]

**03** Linting & Formatting [— Automatisierte Standards und CI]

**04** Architektur [— Komponentenqualität und Struktur]

**05** Accessibility [— Qualität aus Nutzerperspektive]

**06** Design-Systeme [— Konsistenz und wiederverwendbare Patterns]

**07** Learnings / Q&A

<style>

strong {
  --uno: text-orange-light min-w-6 mr-2 inline-block;
}

span {
  --uno: text-sm italic font-light text-gray-300;
}

</style>

<!--
Kurzer Überblick: Wir starten mit der Frage, warum Frontend-Qualität überhaupt ein Thema ist.
Dann schauen wir uns TypeScript, Linting und Architektur als konkrete Werkzeuge an.
Danach geht es um Accessibility und Design-Systeme — also Qualität aus Nutzersicht.
Zum Schluss: Learnings und eure Fragen.
Aber ihr könnt gerne jederzeit Fragen stellen — nicht erst am Ende.
-->

---
src: ./pages/01-motivation.md
---

---
src: ./pages/02-typescript.md
---

---
src: ./pages/03-linting.md
---

---
src: ./pages/04-architektur.md
---

---
src: ./pages/05-accessibility.md
---

---
src: ./pages/06-design-systeme.md
---

---
src: ./pages/07-abschluss.md
---

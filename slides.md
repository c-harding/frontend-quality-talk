---
theme: '@qaware-internal/slidev-theme-qaware'
title: UI/UX Qualitätssicherung
short-title: Titel
duration: 195m
section:
  duration: 1m
endTime: '11:15'
color: purple
author: Charlie Harding · QAware GmbH
authorUrl: qaware.de
comark: true
htmlAttrs:
  lang: de-DE
addons:
  - 'slidev-addon-timing-bar'
---

Frontends bauen, die halten

::footer::

Charlie Harding
<SmartLink to="charlie.harding@qaware.de"/>

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

::footer::

#gernPerDu

<!--
Kurz zu mir: Ich bin Charlie.

[click] Ich habe in Bristol, England, Informatik studiert, [click] mit einem Jahr in München als Erasmus-Student.

[click] Seit 2020 arbeite ich bei der QAware in München als Senior Software Engineer [click] mit Fokus auf Frontend-Entwicklung.

Warum erzähle ich das? Weil ich viele der typischen Frontend-Probleme selbst in Projekten gesehen habe: inkonsistente UI, schwer wartbarer Code, und Accessibility, die zu spät mitgedacht wird.
-->

---
short-title: Agenda
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

**08** Übung

<style>

strong {
  --uno: text-orange-dark 'dark:text-orange-light' min-w-6 mr-2 inline-block;
}

span {
  --uno: text-sm italic font-light opacity-70;
}

</style>

<!--
Kurzer Überblick: Wir starten mit der Frage, warum Frontend-Qualität überhaupt ein Thema ist.

Dann schauen wir uns TypeScript, Linting und Architektur als konkrete Werkzeuge an.

Danach geht es um Accessibility und Design-Systeme — also Qualität aus Nutzersicht.

Zum Schluss: Learnings und eure Fragen.
Aber ihr könnt gerne jederzeit Fragen stellen — nicht erst am Ende.

Dann kommen wir zur Übung, wo ihr das Gelernte direkt anwenden könnt.
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

---
src: ./pages/08-uebung.md
---

---
layout: end
---

::middle::

::default::

**Charlie Harding**

<EndLink to="charlie.harding@qaware.de"></EndLink>

::right::

<SmartLink to="github.com/c-harding/frontend-quality"><mdi-github /> c-harding/frontend-quality</SmartLink><br />
<SmartLink to="github.com/c-harding/frontend-quality-talk"><mdi-github /> c-harding/frontend-quality-talk</SmartLink>

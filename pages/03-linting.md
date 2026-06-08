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

Kurz gesagt: ESLint prüft Code auf typische Probleme und hilft beim Einhalten von Stilregeln.

ESLint ist dabei im JavaScript- und TypeScript-Umfeld der am weitesten verbreitete Linter, aber nicht die einzige Option.

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

<template #3-5>

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

<v-click at="4">

✨ automatisch korrigierbar

</v-click>

<!--
Wir starten mit drei einfachen Regeln, die fast jeder sofort nachvollziehen kann.

[click] `no-undef`: nur Variablen verwenden, die wirklich definiert sind. Das hilft gegen Tippfehler und vergessene Definitionen.

[click] `no-unused-vars`: alles entfernen, was nicht genutzt wird. Solche Variablen sind oft ein Zeichen für unvollständiges Refactoring, blähen den Code auf und verwirren beim Lesen.

[click] `curly`: Kontrollstrukturen immer mit geschweiften Klammern. Das macht den Kontrollfluss klarer und verhindert Fehler bei späteren Erweiterungen.

[click] Und das Beste: Viele Regeln können automatisch korrigiert werden. In der IDE kann man es so konfigurieren, dass solche Probleme direkt beim Speichern behoben werden.
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
Nachdem wir jetzt TypeScript haben, können wir auch Regeln nutzen, die speziell auf die typischen Fallstricke von TypeScript abzielen. Diese können auch die Typinformationen nutzen, um noch smarter zu sein.

[click] no-explicit-any: Wir vermeiden `any`, damit die Typprüfung nicht umgangen wird. `any` bedeutet im Grunde: „TypeScript, vertraue mir einfach“. Danach sind fast alle Prüfungen an dieser Stelle weg.

Statt `any` soll man konkrete Types verwenden. Wenn das nicht möglich ist, gibt es `unknown` (Ich weiß nicht, um was für einen Datentyp es sich handelt, und möchte das explizit so markieren), `never` (Der Fall sollte nie eintreten), oder Generics (Ich möchte, dass der Aufrufer den Typ angibt, damit es trotzdem sicher bleibt).

[click] no-floating-promises: Asynchrone Aufrufe müssen behandelt werden, sonst gehen Fehler still verloren.

[click] restrict-template-expressions: In Template-Strings sollen nur passende Typen landen, damit keine unerwarteten Ausgaben entstehen. Wenn man ein Objekt in ein String implizit umwandelt, kommt oft „Object Object“.
-->

---
title: Prettier
---

<v-switch>
  <template #1>

<!-- prettier-ignore-start -->
```ts
function buildLabel(user
      ){if(user.isActive){
  return user. firstName+' ' +user.lastName}
return "inaktiv"}
```
<!-- prettier-ignore-end -->

  </template>

<template #2-5>

```ts
function buildLabel(user) {
  if (user.isActive) {
    return user.firstName + ' ' + user.lastName;
  }
  return 'inaktiv';
}
```

  </template>
</v-switch>

<v-clicks at="3" class="mt-4">

- Kein Streit über Formatierung
- Komplett automatisch in der IDE
- Vereinfacht Merges

</v-clicks>

<!--
Bis jetzt ging es vor allem um Linting-Regeln. Für reines Formatieren nehmen viele Teams zusätzlich Prettier.

[click] Das ist ein Beispiel ohne einheitliche Formatierung: alles funktioniert, aber es liest sich anstrengend.

[click] Und so sieht derselbe Code nach Prettier aus: konsistente Einrückung, Zeilenumbrüche und einheitlicher Stil.

[click] Der große Vorteil: Stilfragen werden automatisch entschieden, damit wir im Team mehr über Logik und weniger über Formatierung diskutieren.

[click] Man muss gar nicht darüber nachdenken, weil der Code direkt in der IDE korrigiert wird, sobald man speichert.

[click] Außerdem werden Merges einfacher, weil es keine inkompatiblen Formatierungs-Änderungen mehr gibt.
-->

---
title: CI Pipeline
clicks: 5
articleClass: mx-10 flex-0 mb-auto mt-4 rounded-lg border border-zinc-600 bg-white p-6 text-black
---

<script setup lang="ts">
import { computed } from 'vue';

const steps = ['Build', 'Test', 'Format', 'Lint'];
const states = computed(() => ({ 'Lint': $clicks.value < 5 ? 'warn' : 'pass' }));
</script>

<div class="mb-2 flex items-center gap-2">
  <mdi-source-pull />
  <span><strong>c-harding</strong> hat einen neuen PR erstellt: <strong>Add user profile page</strong></span>
</div>

<div class="mb-2 flex items-center gap-2">
  <mdi-plus-minus-box />
  <span v-if="$clicks < 5">
    1 Commit,
    2 Dateien geändert,
    <span class="text-green-800">50 Zeilen hinzugefügt</span>,
    <span class="text-red-800">10 Zeilen gelöscht</span>
  </span>
  <span v-else>
    2 Commits,
    2 Dateien geändert,
    <span class="text-green-800">52 Zeilen hinzugefügt</span>,
    <span class="text-red-800">11 Zeilen gelöscht</span>
  </span>
</div>

<div class="rounded-md border border-zinc-600">
  <div v-for="(step, i) of steps" class="flex items-center justify-between not-last:border-b border-zinc-600 px-4 py-3">
    {{ step }}
    <mdi-timer-sand v-if="$clicks < i" class="text-lg text-zinc-500" />
    <mdi-loading v-else-if="$clicks <= i" class="animate-spin text-lg" />
    <mdi-alert-circle v-else-if="states[step] === 'error'" class="text-lg text-red-600" />
    <mdi-alert v-else-if="states[step] === 'warn'" class="text-lg text-amber-500" />
    <mdi-check-circle v-else class="text-lg text-green-600" />
  </div>
</div>

<!--
Bis jetzt haben wir Linting und Formatting vor allem als Werkzeuge im Editor gesehen.

Aber viel wichtiger ist eigentlich die Pipeline, die bei einem Pull-Request läuft.
Hier ist ein Beispiel, was wir alles hier automatisieren können.

Sobald ein PR erstellt wird, startet die Pipeline.
Sie prüft zuerst, dass der Code gebaut werden kann: Im Frontend bedeutet das, dass die TypeScript-Typen geprüft werden.

[click] Dann laufen die Unit-Tests, damit wir sicher sein können, dass die Logik funktioniert.

[click] Wir prüfen die Formatierung. Wenn die IDE richtig konfiguriert ist, kann das hier nie scheitern.

[click] Und dann kommt der Linting-Check.

[click] In diesem Fall gibt es einen Verstoß gegen die Regeln, also bekommen wir eine Warnung. Bevor wir den PR mergen dürfen, muss das Problem behoben werden.

[click] Besser so: Ein Commit später ist alles grün.
-->

---
title: Fazit
---

<v-clicks>

- Linting und Formatting geben frühes, automatisches Feedback
- TypeScript, ESLint und Prettier ergänzen sich
- Lokal und CI sollten dieselben Regeln erzwingen
- Weniger Stil-Diskussionen, mehr Fokus auf Logik

</v-clicks>

<!--
Das war’s dann für automatische Checks. Zusammenfassend:

[click] Linting und Formatting sind das zweite Sicherheitsnetz nach TypeScript.

[click] Die Werkzeuge ergänzen sich: TypeScript für Typen, ESLint für Regeln, Prettier für einheitliches Format.

[click] Wichtig ist die Konsistenz zwischen lokalem Workflow und CI.

[click] Dann haben wir weniger Diskussionen über Stil und mehr Zeit für die eigentliche Fachlogik.
-->

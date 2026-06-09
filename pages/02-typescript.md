---
layout: chapter-split
title: TypeScript
chapter-number: '02'
section:
  duration: 15m
  buffer: 5m
---

Typen als Sicherheitsnetz und Dokumentation

<!--
In diesem Kapitel schauen wir uns TypeScript an — warum es existiert, was es uns bringt, und wie es konkret in der Praxis hilft.
-->

---
title: 'JavaScript-Quiz: Arrays'
q-placements: KL
---

JavaScript ist die Sprache des Webs — aber sie hat ihre Eigenheiten.

<v-click>

**Was gibt das aus?**

````md magic-move
```js
[1, 2, 3] + [4, 5, 6];
```

```js
[1, 2, 3] + [4, 5, 6]; // → "1,2,34,5,6"
```
````

</v-click>

<!--
JavaScript ist die Sprache des Webs. Jeder Browser kann es, jedes Frontend benutzt es.
Aber JavaScript hat Eigenheiten.

Die Sprache wurde initial so gebaut, damit Fehler möglichst selten auftauchen — auch wenn ein Fehler eigentlich besser als eine stille Fehlfunktion wäre.

[click] Kleines Quiz — was ergibt Array plus Array?

[click] Ein String! "1,2,34,5,6". Arrays werden zu Strings konvertiert und konkateniert.
-->

---
title: 'JavaScript-Quiz: Booleans'
q-placements: KL
---

**Was gibt das aus?**

````md magic-move
```js
true + true + true;
```

```js
true + true + true; // → 3
```
````

<!--
true + true + true?

[click] 3. Booleans werden zu Zahlen: true ist 1.
-->

---
title: 'JavaScript-Quiz: Argumente'
q-placements: KL
---

**Was gibt das aus?**

````md magic-move
```js
function add(a, b) {
  return a + b;
}
add(1, 2, 3);
```

```js
function add(a, b) {
  return a + b;
}
add(1, 2, 3); // → 3
```

```js
function add(a, b) {
  return a + b;
}
add(1, 2, 3); // → 3

add(1);
```

```js
function add(a, b) {
  return a + b;
}
add(1, 2, 3); // → 3

add(1); // → NaN
```
````

<!--
add mit drei Argumenten, obwohl die Funktion nur zwei erwartet?

[click] 3. Das dritte Argument wird einfach ignoriert. Kein Fehler.

[click] Und jetzt eine Bonusfrage: Was passiert, wenn wir nur ein Argument übergeben?

[click] `b` wird auf `undefined` gesetzt, und 1 + undefined ergibt NaN (not a number). Wieder kein Fehler, aber ein unerwartetes Ergebnis.
-->

---
title: 'JavaScript-Quiz: String-Arithmetik'
q-placements: KL
---

**Was gibt das aus?**

````md magic-move
```js
'5' + 3;
```

```js
'5' + 3; // → "53"
```

```js
'5' + 3; // → "53"
'5' - 3;
```

```js
'5' + 3; // → "53"
'5' - 3; // → 2
```
````

<!--
String plus Zahl?

[click] Konkatenation: "53".

[click] Und jetzt die Frage: Was macht derselbe String mit Minus?

[click] Plötzlich Arithmetik: 2. JavaScript entscheidet je nach Operator.
-->

---
title: 'JavaScript-Quiz: Tippfehler'
q-placements: KL
---

**Was gibt das aus?**

````md magic-move
```js
const user = {
  name: 'Alice',
  delete() {
    server.deleteUser(this.name);
  },
};
user.naem;
```

```js
const user = {
  name: 'Alice',
  delete() {
    server.deleteUser(this.name);
  },
};
user.naem; // → undefined
```

```js
const user = {
  name: 'Alice',
  delete() {
    server.deleteUser(this.name);
  },
};
user.naem; // → undefined
user.deelte();
```

```js
const user = {
  name: 'Alice',
  delete() {
    server.deleteUser(this.name);
  },
};
user.naem; // → undefined
user.deelte(); // → 💥 TypeError: user.deelte is not a function
```
````

<!--
user.naem — ein Tippfehler bei einer Property.

[click] undefined. Kein Fehler. [click] Und user.deelte() — ein Tippfehler bei einer Methode?

[click] Jetzt endlich ein Fehler — aber erst zur Laufzeit. TypeError.

All diese Bugs würde TypeScript sofort erkennen — beim Tippen, nicht erst zur Laufzeit.
-->

---
title: Warum TypeScript?
short-title: Warum TypeScript? (1/2)
---

<v-click>

JavaScript + Typen = **TypeScript**

</v-click>

<RenderWhen context="print">

```js
function calculatePrice(items, taxRate) {
  let total = 0;
  items.forEach((item) => {
    total += item.price;
  });
  return total * (1 + taxRate);
}

calculatePrice([{ name: 'Book', price: 10 }], '19%'); // → NaN
```

<template #fallback>

<v-click>

<!-- prettier-ignore-start -->
````md magic-move
```js
function calculatePrice(items, taxRate) {
  let total = 0;
  items.forEach(item => { total += item.price; });
  return total * (1 + taxRate);
}

calculatePrice([{ name: 'Book', price: 10 }], '19%');
```

```js {1,7}
function calculatePrice(items, taxRate) {
  let total = 0;
  items.forEach(item => { total += item.price; });
  return total * (1 + taxRate);
}

calculatePrice([{ name: 'Book', price: 10 }], '19%'); // → NaN
```

```ts {1-3}
interface Item { name: string; price: number }

function calculatePrice(items: Item[], taxRate: number) {
  let total = 0;
  items.forEach(item => { total += item.price; });
  return total * (1 + taxRate);
}

calculatePrice([{ name: 'Book', price: 10 }], '19%');
```

```ts {3}
interface Item { name: string; price: number }

function calculatePrice(items: Item[], taxRate: number): number {
  let total = 0;
  items.forEach(item => { total += item.price; });
  return total * (1 + taxRate);
}

calculatePrice([{ name: 'Book', price: 10 }], '19%');
```
````
<!-- prettier-ignore-end -->

</v-click>
</template>
</RenderWhen>

<style>
* { --slidev-code-font-size: 1em }
</style>

<!--
Jetzt haben wir gesehen, dass JavaScript für sich allein durchaus riskant sein kann. Genau da kommt TypeScript ins Spiel: Es ergänzt die ursprünglich ohne Compiler gebaute Sprache um einen Compiler.

[click] TypeScript ist im Kern einfach: JavaScript mit Typen.

[click] Hier ist dann ein Beispiel: Wir haben eine Funktion, die den Gesamtpreis berechnet. Sie erwartet ein Array von Items und einen Steuersatz. Wer kann mir sagen, was hier das Ergebnis ist?

[click] Der Trick ist, dass wir `taxRate` als String übergeben, obwohl die Funktion eine Zahl erwartet. Das Ergebnis ist NaN — aber das passiert erst zur Laufzeit.

[click] Mit TypeScript machen wir die Schnittstelle explizit: `items` ist ein Array von `Item`, und `taxRate` ist eine Zahl.

[click] Wir können auch angeben, dass die Funktion eine Zahl zurückgibt. Das hilft, wenn man den Rückgabewert später benutzt.
-->

---
title: Warum TypeScript?
short-title: Warum TypeScript? (2/2)
---

JavaScript + Typen = **TypeScript**

<!-- prettier-ignore-start -->
```ts {1-3,7,9} twoslash -- do not remove the curly braces: see https://github.com/slidevjs/slidev/issues/2618
interface Item { name: string; price: number }

function calculatePrice(items: Item[], taxRate: number): number {
  let total = 0;
  items.forEach(item => { total += item.price; });
  return total * (1 + taxRate);
}

calculatePrice([{ name: 'Book', price: 10 }], '19%');
```
<!-- prettier-ignore-end -->

<style>
pre { --slidev-code-font-size: 1em }
</style>

<!--
Wenn wir dann `taxRate` als String übergeben, meldet der Compiler den Fehler sofort.
-->

---
title: Typen als Dokumentation
---

<v-clicks>

- Signatur in der IDE

  ```ts
  function calculatePrice(items: Item[], taxRate: number): number;
  ```

- Parametertypen sind dokumentiert: `items: Item[]`, `taxRate: number`

- Rückgabewert ist klar: `: number`

- Falsche Aufrufe fallen sofort auf: `calculatePrice(..., '19%')`

- Kein Raten, kein Strg+F

- Fehler beim Schreiben oder Build

</v-clicks>

<!--
TypeScript macht den Code nicht nur sicherer, sondern auch lesbarer.

[click] In der IDE (bspw. VS Code oder IntelliJ) sieht man die Signatur der Methode als Tooltip.

[click] Die Typen der Parameter sind dokumentiert.

[click] Der Rückgabetyp sagt sofort, was zurückkommt.

[click] Wenn wir dann `taxRate` als String übergeben, meldet der Compiler den Fehler sofort.

[click] Das spart Zeit im Alltag: weniger Suche, weniger Missverständnisse.

[click] Das ist der Kernvorteil: Fehler werden früh abgefangen. Nicht zur Laufzeit, sondern bereits beim Schreiben oder beim Build.
-->

---
title: Bessere Komponenten-APIs
---

<v-click>

```ts
@Component({ ... })
class PriceBadgeComponent {
  readonly amount = input.required<number>();
  readonly currency = input<'EUR' | 'USD'>('EUR');
}
```

</v-click>

<RenderWhen context="print">

<!-- prettier-ignore-start -->
```html
<app-price-badge />
^^^^^^^^^^^^^^^ Missing required input `amount`
<app-price-badge [amount]="'19'" />
                           ^^^^
     Type 'string' is not assignable to type 'number'
```
<!-- prettier-ignore-end -->

</RenderWhen>

<v-click>

<!-- prettier-ignore-start -->
````md magic-move
```html
<app-price-badge />
 ^^^^^^^^^^^^^^^ Missing required input `amount`
```

```html
<app-price-badge [amount]="'19'" />
                           ^^^^
     Type 'string' is not assignable to type 'number'
```

```html
<app-price-badge [amount]="19" />
```

```html
<app-price-badge [amount]="19" currency="GBP" />
                                         ^^^
               Type '"GBP"' is not assignable to type '"EUR" | "USD"'
```
````
<!-- prettier-ignore-end -->

</v-click>

<style>
* { --slidev-code-font-size: 1.25rem }
</style>

<!--
TypeScript hilft nicht nur bei Funktionen, sondern auch bei Komponenten, bspw. in React, Vue oder Angular. Inputs bilden die öffentliche Schnittstelle.

[click] Hier haben wir eine Angular-Komponente, die einen Preis mit Währung anzeigt. Sie hat zwei Inputs: `amount` ist eine required number, und `currency` ist ein optionaler String, der nur "EUR" oder "USD" sein darf.

[click] Wenn ein Input als required markiert ist, muss er auch übergeben werden. Ansonsten gibt es einen Fehler.

[click] Wenn der Typ nicht stimmt, gibt es ebenfalls einen Fehler. Hier wird eine Zahl erwartet, aber ein String übergeben.

[click] Mit einer Zahl funktioniert es.

[click] Und wenn wir einen ungültigen Wert für `currency` übergeben, gibt es auch einen Fehler. Das ist besonders hilfreich bei Enums oder Union Types.
-->

---
title: Sichere Refactorings
clicks: 4
short-title: Sichere Refactorings (1/2)
---

<!-- prettier-ignore-start -->
<ShowUsagesRefactorDemo
  :selected-item="{ 1: 'show-usages', 3: 'rename' }[$clicks]"
  :view="{ 1: 'menu', 2: 'show-usages', 3: 'menu', 4: 'rename' }[$clicks]"
>
<!-- prettier-ignore-start -->
```ts
interface User { firstName: string; lastName: string }
```
<!-- prettier-ignore-end -->
</ShowUsagesRefactorDemo>
<!-- prettier-ignore-end -->

<!--
Mit Typannotationen können wir leicht finden, welche Objekte ein bestimmtes Interface verwenden.

[click] In IDEs geht das automatisch, zum Beispiel mit „Show Usages“.

[click] Da sieht man alle Stellen, an denen das Interface verwendet wird.

[click] Das kann dann für Refactorings genutzt werden: 

[click] Mit dem Rename-Tool der IDE aktualisieren wir alle Verwendungen, ohne Felder anderer Objekte zu verändern, die zufällig gleich heißen.
-->

---
title: Sichere Refactorings
short-title: Sichere Refactorings (2/2)
---

<!-- prettier-ignore-start -->
```ts {} twoslash -- do not remove the curly braces: see https://github.com/slidevjs/slidev/issues/2618
interface RawUser { vorname: string; nachname: string }

// ---cut---
interface User { givenName: string; lastName: string }

function mapUser(raw: RawUser): User {
  return {
    firstName: raw.vorname,
    lastName: raw.nachname,
  };
}
```
<!-- prettier-ignore-end -->

<style>
.twoslash :deep(.twoslash-error-line) {
  white-space: pre-line;
  max-width: 100%;
}
</style>

<!--
Und wenn am Ende doch etwas übersehen wurde, warnt TypeScript vor unbekannten Properties.
-->

---
title: API-Verträge
---

<v-clicks>

- Shared Types

- Generiert aus API-Verträgen (z. B. OpenAPI- oder GraphQL-Schema)

- Backend ändert Response → Frontend-Build bricht sofort

- TypeScript macht Änderungen früh sichtbar —
  bevor sie in Produktion gehen

</v-clicks>

<!--
TypeScript ist nicht nur für lokalen Code nützlich — es kann auch API-Grenzen absichern.

[click] Shared Types bedeutet: Backend und Frontend sprechen dieselbe Sprache.

[click] Viele Teams generieren diese Typen automatisch aus API-Verträgen. OpenAPI und GraphQL-Schemas sind dabei maschinenlesbare Beschreibungen einer Schnittstelle: Welche Endpunkte es gibt, welche Felder kommen und welche Typen sie haben. Diese lassen sich wiederum aus dem Backend-Code generieren.

[click] Wenn das Backend eine Property umbenennt oder entfernt, schlägt der Frontend-Build sofort an — es braucht kein manuelles Suchen.

[click] Damit schließen wir das TypeScript-Kapitel: Typen machen den Code sicherer und lesbarer und helfen, Änderungen früh sichtbar zu machen — lange bevor sie in Produktion gehen.
-->

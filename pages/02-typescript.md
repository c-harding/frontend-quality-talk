---
layout: chapter-split
title: TypeScript
chapter-number: '02'
section:
  duration: 15m
---

Typen als Sicherheitsnetz und Dokumentation

---
title: 'JavaScript-Quiz: Arrays'
---

JavaScript ist die Sprache des Webs — aber sie hat ihre Eigenheiten. **Was gibt das aus?**

````md magic-move
```js
[1, 2, 3] + [4, 5, 6];
```

```js
[1, 2, 3] + [4, 5, 6]; // → "1,2,34,5,6"
```
````

<!--
JavaScript ist die Sprache des Webs. Jeder Browser kann es, jedes Frontend benutzt es.
Aber JavaScript hat Eigenheiten. Kleines Quiz — was ergibt Array plus Array?

[click] Ein String! "1,2,34,5,6". Arrays werden zu Strings konvertiert und konkateniert.
-->

---
title: 'JavaScript-Quiz: Booleans'
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
````

<!--
add mit drei Argumenten, obwohl die Funktion nur zwei erwartet?

[click] 3. Das dritte Argument wird einfach ignoriert. Kein Fehler.
-->

---
title: 'JavaScript-Quiz: String-Arithmetik'
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

[click] Konkatenation: "53". Und String minus Zahl?

[click] Und jetzt die Frage: Was macht derselbe String mit Minus?

[click] Plötzlich Arithmetik: 2. JavaScript entscheidet je nach Operator.
-->

---
title: 'JavaScript-Quiz: Tippfehler'
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
user.deelte();
```

```js
const user = {
  name: 'Alice',
  delete() {
    server.deleteUser(this.name);
  },
};
user.deelte(); // → 💥 TypeError: user.deelte is not a function
```
````

<!--
user.naem — ein Tippfehler bei einer Property.

[click] undefined. Kein Fehler. Und user.deelte() — ein Tippfehler bei einer Methode?

[click] Jetzt endlich ein Fehler — aber erst zur Laufzeit. TypeError.

All diese Bugs würde TypeScript sofort erkennen — beim Tippen, nicht erst zur Laufzeit.
-->

---


<!--
...existing code (Grober Plan comment)...
-->

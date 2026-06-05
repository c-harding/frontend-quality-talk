---
layout: chapter-split
title: Architektur
chapter-number: '04'
section:
  duration: 15m
---

Komponentenqualität und Struktur

<!--
Bis jetzt haben wir uns um die Qualität einzelner Codezeilen gekümmert: korrekte Typen, saubere Regeln, einheitliches Format.

Aber selbst wenn jede Zeile für sich gut ist, kann das große Ganze trotzdem unübersichtlich werden. Komponenten, die zu viel wissen. Abhängigkeiten, die sich quer durch die Anwendung ziehen. Logik, die man nicht mehr findet, weil sie irgendwo tief versteckt ist.

Das Ziel dahinter ist immer dasselbe: Änderungen lokal halten und Komplexität begrenzen.

Darum geht es jetzt: Wie schneiden wir Komponenten sinnvoll? Wie halten wir Datenflüsse nachvollziehbar? Und wie legen wir eine Projektstruktur an, die auch noch in einem Jahr verständlich ist?

Kurz gesagt: Qualität auf der Ebene der Struktur.
-->

---
title: Container- und Präsentationskomponenten
article-class: flex h-full flex-col items-center justify-center gap-4
---

<div class="architecture-principle-box border-blue-dark dark:border-blue-light bg-blue-light/20 dark:bg-blue-dark/25">
  <h2 class="text-blue-dark dark:text-blue-light">Container-Komponente</h2>
  <span>Daten · State · Fachlogik</span>
</div>
<div class="flex w-80 items-start justify-between px-16 opacity-70">
  <div class="architecture-flow-side">
    <span>Props</span>
    <span class="text-xl">↓</span>
  </div>
  <div class="architecture-flow-side">
    <span class="text-xl">↑</span>
    <span>Events</span>
  </div>
</div>
<div class="architecture-principle-box border-orange-dark dark:border-orange-light bg-orange-light/20 dark:bg-orange-dark/25">
  <h2 class="text-orange-dark dark:text-orange-light">Präsentationskomponente</h2>
  <span>UI · Template · Interaktion</span>
</div>

<p v-click class="opacity-70 italic">Eine Komponente = eine klare Verantwortung</p>
<p v-click class="opacity-70 italic">Klare Verantwortung – leichter zu testen und zu überarbeiten</p>

<style>
.architecture-principle-box {
  --uno: w-100 rounded-xl border-2 p-5 text-center flex flex-col gap-1;

  h2 {
    --uno: text-lg uppercase tracking-widest font-mono;
  }

  span {
    --uno: text-base opacity-70;
  }
}

.architecture-flow-side {
  --uno: flex flex-col items-center gap-1;
}
</style>

<!--
Das Grundprinzip ist einfach: Es gibt zwei Arten von Komponenten.

Die Container-Komponente kennt die Daten. Sie lädt sie aus einem Service oder Store, hält den State und koordiniert, was passiert.

Die Präsentationskomponente weiß davon nichts. Sie bekommt ihre Daten über Props, zeigt sie an und schickt Benutzeraktionen als Events nach oben.

Der Datenfluss ist damit klar und vorhersehbar: Props runter, Events rauf. Keine versteckten Abhängigkeiten, kein direkter Zugriff auf globalen State mitten im Template.

[click] Eine Komponente, eine klare Verantwortung. Das ist die Grundregel.

[click] Dadurch entstehen klareres Verständnis, einfachere Testbarkeit und mehr Flexibilität.
-->

---
title: In der Praxis
inner-split: 40
left:
  class: flex flex-col
---

<script setup>
import '../styles/tree-diagram.css';
</script>

<ul class="tree-diagram">
  <li>
    <div class="tree-diagram-row">
      <span class="tree-diagram-badge tree-diagram-badge-container">C</span>
      <span>UserProfilePage</span>
    </div>
    <ul>
      <li>
        <div class="tree-diagram-row">
          <span class="tree-diagram-badge tree-diagram-badge-presentation">P</span>
          <span>ProfileCard</span>
        </div>
        <ul>
          <li>
            <div class="tree-diagram-row">
              <span class="tree-diagram-badge tree-diagram-badge-presentation">P</span>
              <span>ProfileId</span>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <div class="tree-diagram-row">
          <span class="tree-diagram-badge tree-diagram-badge-container">C</span>
          <span>PostList</span>
        </div>
        <ul>
          <li>
            <div class="tree-diagram-row">
              <span class="tree-diagram-badge tree-diagram-badge-presentation">P</span>
              <span>PostFilter</span>
            </div>
          </li>
          <li>
            <div class="tree-diagram-row">
              <span class="tree-diagram-badge tree-diagram-badge-presentation">P</span>
              <span>PostCard...</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<div class="tree-diagram-legend">
  <span class="flex items-center gap-1.5">
    <span class="tree-diagram-badge tree-diagram-badge-container"><mdi-folder-outline /></span>
    Container
  </span>
  <span class="flex items-center gap-1.5">
    <span class="tree-diagram-badge tree-diagram-badge-presentation"><mdi-file-outline /></span>
    Präsentation
  </span>
</div>

<style>
.tree-diagram-badge-container {
  --uno: bg-blue-light/20 'dark:bg-blue-dark/25' text-blue-dark 'dark:text-blue-light' border-blue-dark 'dark:border-blue-light';
}

.tree-diagram-badge-presentation {
  --uno: bg-orange-light/20 'dark:bg-orange-dark/25' text-orange-dark 'dark:text-orange-light' border-orange-dark 'dark:border-orange-light';
}

.tree-diagram-legend {
  --uno: mt-auto pt-4 flex gap-5 text-xs text-zinc-700 'dark:text-zinc-300';
}
</style>

::right::

<div class="arch-practice-ui">
  <div class="arch-practice-ui-shell arch-practice-component arch-practice-container">
    <span class="arch-practice-ui-label">UserProfilePage</span>
    <div class="arch-practice-component arch-practice-presentation">
      <span class="arch-practice-ui-label">ProfileCard</span>
      <div class="arch-practice-component arch-practice-presentation">
        <span class="arch-practice-ui-label">ProfileId</span>
        <div class="flex items-center gap-2">
          <img src="/media/cha.jpeg" alt="Charlie Harding" class="arch-practice-avatar" />
          <span class="arch-practice-text-strong">Charlie Harding</span>
        </div>
      </div>
      <div>
        <div class="arch-practice-text">Senior Software Engineer</div>
        <div class="arch-practice-text-subtle">QAware GmbH</div>
      </div>
    </div>
    <div class="arch-practice-component arch-practice-container">
      <span class="arch-practice-ui-label">PostList</span>
      <div class="arch-practice-component arch-practice-presentation">
        <span class="arch-practice-ui-label">PostFilter</span>
        <span class="arch-practice-text">Alle · Neueste · Beliebte</span>
      </div>
      <div class="arch-practice-component arch-practice-presentation">
        <span class="arch-practice-ui-label">PostCard</span>
        <div>
          <div class="arch-practice-text-strong">Vortrag TH Rosenheim</div>
          <div class="arch-practice-text-subtle">vor 2 Stunden</div>
        </div>
      </div>
      <div class="arch-practice-component arch-practice-presentation">
        <span class="arch-practice-ui-label">PostCard</span>
        <div>
          <div class="arch-practice-text-strong">Talk beim Engineering Camp</div>
          <div class="arch-practice-text-subtle">April 2026</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>

.arch-practice-ui {
  --uno: h-full text-xs;
}

.arch-practice-ui-shell {
  --uno: flex-1 p-2 'rounded-lg!' bg-white text-black;
}

.arch-practice-component {
  --uno: relative rounded border-2 mt-2 pt-3 flex flex-col gap-1 px-1.5 pb-1.5;
}

.arch-practice-ui-label {
  --uno: absolute -top-2.25 left-2 bg-white px-1 text-sm font-mono rounded;
}

.arch-practice-container {
  --uno: border-blue-dark;

  > .arch-practice-ui-label {
    --uno: text-blue-dark;
  }
}

.arch-practice-presentation {
  --uno: border-orange-dark 'dark:border-orange-light';

  > .arch-practice-ui-label {
    --uno: text-orange-dark 'dark:text-orange-light';
  }
}

.arch-practice-avatar {
  --uno: w-5 h-5 rounded-full object-cover shrink-0;
}

.arch-practice-text {
  --uno: text-zinc-700;
}

.arch-practice-text-strong {
  --uno: text-zinc-800;
}

.arch-practice-text-subtle {
  --uno: text-zinc-500;
}
</style>

<!--
Und so sieht das in einer echten Anwendung aus.

Die `UserProfilePage` ist ein Container — sie koordiniert die gesamte Seite, lädt Nutzerdaten und entscheidet, was gerendert wird.

`ProfileCard` und ihr Kind `ProfileId` darunter sind reine Präsentationskomponenten: Sie bekommen ihre Daten als Props und zeigen sie an.

Dann gibt es `PostList` — auch ein Container, aber nur für die Beiträge. Sie verwaltet den Filter-State, lädt die Posts und rendert dann `PostFilter` und `PostCard` darunter.

Das Muster wiederholt sich auf jeder Ebene. Die Regel ist immer dieselbe — egal ob die App 5 oder 50 Komponenten hat.
-->

---
title: Wo lebt der Zustand?
---

<div class="grid grid-cols-3 gap-4">
  <div class="rounded-lg border-2 border-blue-dark bg-blue-light/15 p-4">
    <div class="text-base font-mono uppercase">Lokaler State</div>
    <div class="mt-2 text-sm opacity-80">UI-Zustand pro Komponente</div>
    <div class="mt-2 text-xs opacity-70">z. B. Input, Modal offen, Tab aktiv</div>
  </div>

  <div v-click class="rounded-lg border-2 border-orange-dark bg-orange-light/15 p-4">
    <div class="text-base font-mono uppercase">Geteilter State</div>
    <div class="mt-2 text-sm opacity-80">Mehrere Komponenten lesen/schreiben</div>
    <div class="mt-2 text-xs opacity-70">z. B. User, Feature-Flags</div>
  </div>

  <div v-click class="rounded-lg border-2 border-green-dark bg-green-light/15 p-4">
    <div class="text-base font-mono uppercase">Server-State</div>
    <div class="mt-2 text-sm opacity-80">Daten aus Backend/API</div>
    <div class="mt-2 text-xs opacity-70">laden, cachen, invalidieren</div>
  </div>
</div>

<!--
Nach dem Komponentenschnitt kommt die nächste Frage: Wo lebt welcher Zustand?

Erstens lokaler State: Alles, was wirklich nur eine Komponente betrifft.
Dazu gehört typischerweise UI-Zustand wie Input-Werte, ob ein Modal offen ist oder welcher Tab aktiv ist.

[click] Zweitens geteilter State: Informationen, die mehrere Komponenten brauchen.
Den bewusst zentral halten, nicht duplizieren.
Dazu gehören zum Beispiel der aktuell eingeloggte User oder globale Feature-Flags.

[click] Drittens Server-State: Das sind Backend-Daten, die beispielsweise aus einer Datenbank geladen werden.
Die behandeln wir anders als UI-State: laden, cachen, aktualisieren.

Es gibt also keine Einheitslösung für Zustand. Je nach Anwendungsfall und Lebenszyklus wählen wir den passenden Ort.
-->

---
title: Projektstruktur & Wiederverwendung
split: 50
hide-footer: true
left:
  class: flex flex-col
right:
  class: flex flex-col
---

<script setup>
import '../styles/tree-diagram.css';
</script>

<div class="project-structure-title text-orange-dark dark:text-orange-light">By Type</div>
<ul class="tree-diagram">
  <li>
    <div class="tree-diagram-row"><mdi-folder-outline class="tree-diagram-badge project-structure-directory" /><span>components/</span></div>
    <ul>
      <li><div class="tree-diagram-row"><mdi-file-outline class="tree-diagram-badge project-structure-file" /><span>ProfileCard.vue</span></div></li>
      <li><div class="tree-diagram-row"><mdi-file-outline class="tree-diagram-badge project-structure-file" /><span>PostFilter.vue</span></div></li>
    </ul>
  </li>
  <li>
    <div class="tree-diagram-row"><mdi-folder-outline class="tree-diagram-badge project-structure-directory" /><span>stores/</span></div>
    <ul>
      <li><div class="tree-diagram-row"><mdi-file-outline class="tree-diagram-badge project-structure-file" /><span>user.store.ts</span></div></li>
    </ul>
  </li>
  <li>
    <div class="tree-diagram-row"><mdi-folder-outline class="tree-diagram-badge project-structure-directory" /><span>services/</span></div>
    <ul>
      <li><div class="tree-diagram-row"><mdi-file-outline class="tree-diagram-badge project-structure-file" /><span>post.service.ts</span></div></li>
    </ul>
  </li>
</ul>
<p class="project-structure-note" v-click>
  Eine fachliche Änderung berührt oft mehrere, weit entfernte Ordner.
</p>

::right::

<div v-click class="project-structure-title text-green-dark dark:text-green-light">By Feature</div>
<ul v-after class="tree-diagram">
  <li>
    <div class="tree-diagram-row"><mdi-folder-outline class="tree-diagram-badge project-structure-feature" />features/profile/</div>
    <ul>
      <li><div class="tree-diagram-row"><mdi-file-outline class="tree-diagram-badge project-structure-file" />ProfileCard.vue</div></li>
      <li><div class="tree-diagram-row"><mdi-file-outline class="tree-diagram-badge project-structure-file" />profile.store.ts</div></li>
    </ul>
  </li>
  <li>
    <div class="tree-diagram-row"><mdi-folder-outline class="tree-diagram-badge project-structure-feature" />features/posts/</div>
    <ul>
      <li><div class="tree-diagram-row"><mdi-file-outline class="tree-diagram-badge project-structure-file" />PostFilter.vue</div></li>
      <li><div class="tree-diagram-row"><mdi-file-outline class="tree-diagram-badge project-structure-file" />post.service.ts</div></li>
    </ul>
  </li>
  <li>
    <div class="tree-diagram-row"><mdi-folder-outline class="tree-diagram-badge project-structure-directory" />shared/ui/</div>
    <ul>
      <li><div class="tree-diagram-row"><mdi-file-outline class="tree-diagram-badge project-structure-file" />Button.vue</div></li>
    </ul>
  </li>
</ul>
<p v-click class="project-structure-note">
  Feature-Code bleibt lokal, Shared bleibt bewusst klein und generisch.
</p>

<style>
.project-structure-title {
  --uno: mb-2 text-base uppercase tracking-widest font-mono;
}

.project-structure-directory {
  --uno: bg-orange-light/20 'dark:bg-orange-dark/25' text-orange-dark 'dark:text-orange-light' border-orange-dark 'dark:border-orange-light';
}

.project-structure-feature {
  --uno: bg-green-light/20 'dark:bg-green-dark/25' text-green-dark 'dark:text-green-light' border-green-dark 'dark:border-green-light';
}

.project-structure-shared {
  --uno: bg-green-light/20 'dark:bg-green-dark/25' text-green-dark 'dark:text-green-light' border-green-dark 'dark:border-green-light';
}

.project-structure-file {
  --uno: bg-zinc-200/60 text-zinc-800 border-zinc-400 'dark:bg-zinc-700/40' 'dark:text-zinc-200' 'dark:border-zinc-500';
}

.project-structure-note {
  --uno: mt-auto pt-3 text-sm italic text-zinc-700 'dark:text-zinc-300';
}
</style>

<!--
Hier sehen wir denselben Code in zwei unterschiedlichen Strukturen.

Links nach Dateitypen: Komponenten, Stores, Services in getrennten Ordnern.
Das wirkt erstmal ordentlich, aber fachlich zusammengehöriger Code liegt weit auseinander.

[click] Eine fachliche Änderung berührt hier oft mehrere, weit entfernte Ordner.

[click] Rechts nach Features: Alles, was zu Profile oder Posts gehört, liegt zusammen.
Das reduziert Kontextwechsel und hält Änderungen lokaler.

[click] Feature-Code bleibt lokal, Shared bleibt bewusst klein und generisch.

Shared ist bewusst klein: nur wirklich generische, wiederverwendbare Bausteine.
So bleiben die Grenzen zwischen feature-spezifischem Code und Shared Components klar.
-->

---
title: Architektur im Alltag
---

<v-clicks>

- **Im Review:** Verantwortungen und Abhängigkeiten sind schneller erkennbar
- **Beim Refactoring:** Änderungen bleiben lokaler und risikoärmer
- **Beim Einstieg:** Neue Leute finden sich im Projekt schneller zurecht
- **Als Grundlage:** Gute Struktur macht Tests, Accessibility und Design-Systeme leichter

</v-clicks>

<p v-click class="mt-8 italic opacity-70">
  Architektur ist kein Selbstzweck — sie reduziert Reibung im Alltag.
</p>

<!--
Bis jetzt haben wir auf konkrete Architekturentscheidungen geschaut: Komponentenschnitte, State und Projektstruktur.

Und genau daran merkt man im Alltag sehr schnell, ob eine Architektur trägt oder nicht.

[click] Das sieht man zuerst im Review. Wenn Verantwortungen klar geschnitten sind, erkennt man schneller, was eine Komponente eigentlich tut und wo mögliche Seiteneffekte liegen.

[click] Dann im Refactoring: Gute Struktur hält Änderungen lokaler. Man muss weniger Stellen gleichzeitig anfassen und hat damit weniger Risiko.

[click] Und schließlich beim Einstieg ins Projekt: Neue Leute finden sich schneller zurecht, wenn die Struktur die Fachlichkeit widerspiegelt.

[click] Deshalb ist Architektur auch die Grundlage für vieles, was danach kommt — Tests, Accessibility und Design-Systeme profitieren alle davon.

[click] Architektur ist also kein Selbstzweck. Gute Struktur reduziert Reibung im Entwicklungsalltag.
-->

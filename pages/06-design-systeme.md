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

<InconsistentDialogs :show-right-dialog="true" :red-buttons="true" />

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

Slide 3: In der Praxis - von Wildwuchs zu Bausteinen (~2.5 min)
- Vorher/Nachher: mehrfacher eigener Button-Code vs. zentrale Komponente
- Einheitliche API für Komponenten (Props/Variants statt Custom-CSS)
- Accessibility by default (Fokus, Kontrast, Labels) direkt eingebaut
- Weniger Bugs bei Änderungen, weil Anpassungen zentral passieren

Slide 4: Zusammenarbeit Design <-> Entwicklung <-> QA (~2.5 min)
- Gemeinsame Sprache: Tokens und Komponenten statt Pixel-Diskussionen
- Figma, Code und Doku müssen dieselbe Quelle widerspiegeln
- QA testet erwartbares Verhalten statt Sonderfälle je Screen
- Gute Übergaben reduzieren Reibung und Nacharbeit

Slide 5: Einführung im Alltag (~2 min)
- Klein starten: 3-5 Kernkomponenten mit klaren Standards
- Contribution-Regeln: Wer darf ändern, wie wird reviewed?
- Migration schrittweise: neue Features zuerst, Altbestand sukzessive
- Übergang: Design-Systeme machen Qualität skalierbar
-->

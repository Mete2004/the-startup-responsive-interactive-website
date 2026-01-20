Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

### Ademruimte en inspringen

In mijn HTML heb ik bewust gelet op ademruimte en inspringen om de code leesbaar en overzichtelijk te houden.

Ik gebruik 2 spaties voor inspringen en blijf daar overal consequent in. Elk block-level element (zoals section, div, article) staat op een nieuwe regel en wordt netjes ingesprongen ten opzichte van het parent-element. Hierdoor is de structuur van de pagina snel te herkennen.

Tussen grotere onderdelen, zoals verschillende section-elementen, laat ik extra witruimte zodat de code rustiger leest. Inline-level elementen (zoals span en img) plaats ik alleen op nieuwe regels als dat de leesbaarheid verbetert.

Door deze aanpak blijft de HTML logisch opgebouwd en makkelijk aan te passen, zonder dat de functionaliteit is veranderd.

*Voorbeeld van inspringing binnen een article-element:*

```html
<section class="upcoming_weather-section">
  <div class="upcoming_weather-wrapper">
    <h2>Upcoming 5 days</h2>

    <article class="weather-card">
      <div class="date">Tuesday 25th Feb</div>
    </article>
  </div>
</section>
```

### Volgorde en nesten van CSS selectors

In mijn CSS werk ik met een duidelijke structuur om chaos te voorkomen en de code onderhoudbaar te houden.  
Selectors zijn gegroepeerd per onderdeel van de pagina en volgen grotendeels dezelfde volgorde als de HTML-structuur.

Ik gebruik **geneste selectors** alleen wanneer er een duidelijke parent-child relatie is, zoals bij `.intro-wrapper h1` en `.activity-card p`. Voor inspringing gebruik ik overal **2 spaties**, zodat geneste selectors direct herkenbaar zijn.

De **properties** binnen een selector zijn logisch gegroepeerd: eerst layout (zoals `display`, `flex`, `grid`), daarna spacing (`margin`, `padding`), en daarna styling (`color`, `background`, `font-size`). Media queries staan bij de selector zelf, zodat context en gedrag bij elkaar blijven.

Ik maak bewust gebruik van **inheritance en cascade** door algemene stijlen niet te herhalen en alleen te overschrijven waar nodig. Hierdoor voorkom ik dubbele CSS en blijf ik zo veel mogelijk werken volgens het **DRY-principe (Don’t Repeat Yourself)**.

*Voorbeeld van geneste selectors en consistente inspringing:*

```css
.intro-wrapper {
  padding: 1rem;

  h1 {
    color: var(--rose);
  }

  p {
    color: var(--rose);
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem 0 5rem;
  }
}
```

### Nesten van media queries

Voor responsive design werk ik **mobile first** en nest ik mijn media queries direct binnen de selector waarop ze van toepassing zijn. Hierdoor staat alle styling van een component, inclusief responsive aanpassingen, bij elkaar in het stylesheet.

Deze manier van werken maakt de code beter **leesbaar en onderhoudbaar**, omdat ik niet hoef te zoeken naar losse media queries verspreid door het bestand. De basisstijl geldt voor mobiel, en met geneste media queries breid ik dit uit voor grotere schermen (tablet en desktop).

Door gebruik te maken van de **cascade** kan ik dubbele properties vermijden. Alleen de waarden die veranderen per breakpoint worden overschreven, terwijl de rest automatisch wordt overgenomen. Dit helpt om volgens het **DRY-principe** te werken.

*Voorbeeld van geneste media queries binnen één component:*

```css
.intro-wrapper {
  padding: 1rem;

  h1 {
    color: var(--rose);
  }

  p {
    color: var(--rose);
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem 0 5rem;
  }

  @media (min-width: 968px) {
    padding: 1rem 3rem 3rem 9rem;
  }
}
```

### Naamgeving

Bij het kiezen van namen in mijn HTML, CSS en JavaScript heb ik bewust gelet op duidelijkheid, consistentie en leesbaarheid. De namen beschrijven wat een element of functie doet, en niet hoe het eruitziet. Hierdoor blijft de code begrijpelijk en beter onderhoudbaar.

Voor HTML en CSS gebruik ik Engelse namen in **kebab-case**, wat de standaard is voor class- en id-namen. Classes zijn benoemd op basis van hun rol binnen de interface, zoals `.weather-card`, `.activity-card` en `.popover-trigger`. Ik vermijd namen die alleen visuele eigenschappen beschrijven, zodat de naam ook logisch blijft wanneer het ontwerp verandert.

In JavaScript gebruik ik **camelCase**, wat aansluit bij de conventies van de taal. Variabelen en functies hebben beschrijvende namen zoals `sendBtn`, `closeBtn` en `closePopover()`, zodat direct duidelijk is waar ze voor dienen en welke interactie ze afhandelen.

Door deze naamgevingsconventies consequent toe te passen over alle bestanden heen, blijft de samenhang tussen HTML, CSS en JavaScript duidelijk en kan de code eenvoudig worden gelezen en aangepast, zonder dat de functionaliteit is veranderd.

*Voorbeeld uit de code:*

```html
<article class="weather-card popover-trigger">
  <div class="date">Tuesday 25th Feb</div>
</article>
```

```css
.weather-card {
  display: flex;
  flex-direction: column;
}
```

```js
function closePopover() {
  popover.classList.remove("active");
  overlay.classList.remove("active");
}
```


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



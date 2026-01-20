Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->
## DEPT Weather Planner

Voor dit project is een nieuwe website ontwikkeld voor **DEPT** met als doel gebruikers te helpen bij het plannen van activiteiten op basis van het weer. De uitdaging was om een moderne, overzichtelijke en gebruiksvriendelijke website te bouwen die aansluit bij de huisstijl van DEPT en goed werkt op alle apparaten.

De oplossing is een responsive weather planner waarin actuele (gesimuleerde) weersinformatie wordt gecombineerd met advies over welke activiteiten op dat moment wel of beter niet geschikt zijn. Het ontwerp is uitgewerkt in Figma en vervolgens omgezet naar een werkend prototype met HTML, CSS en JavaScript, met aandacht voor toegankelijkheid, structuur en onderhoudbare code.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
De **DEPT Weather Planner** is een interactieve en responsive website die gebruikers helpt bij het plannen van activiteiten op basis van het weer. De website combineert weersinformatie met visueel advies en interactie, en is ontworpen volgens de huisstijl van DEPT.

### Responsive

De website is **mobile first** opgebouwd en schaalt soepel mee van kleine schermen (320px) tot grote desktops (1440px).  
De basislayout is geoptimaliseerd voor mobiel, waarna de indeling bij grotere schermen wordt uitgebreid met behulp van geneste media queries.

- Op mobiel staan onderdelen onder elkaar voor maximale leesbaarheid (one column layout).
- Op tablet en desktop worden secties naast elkaar geplaatst voor een overzichtelijker layout.
- Content blijft altijd goed leesbaar en bruikbaar, ongeacht schermgrootte.

### Screens:


***Mobile layout:***

<img width="112" height="861" alt="design-mobile" src="https://github.com/user-attachments/assets/900769f3-4d45-4573-a5fd-5233fa8c0254" />

***Tablet layout:***

<img width="412" height="707" alt="design-tablet" src="https://github.com/user-attachments/assets/0a8c9e08-f520-4d24-84e5-13892e07150d" />

***Desktop layout:***

<img width="448" height="588" alt="design-desktop" src="https://github.com/user-attachments/assets/3156b161-4db3-480a-a23d-67d4c4caf97d" />



### Toegankelijkheid

Tijdens het ontwikkelen is rekening gehouden met **toegankelijkheid**. Zo is er gebruikgemaakt van semantische HTML-elementen zoals `header`, `main`, `section` en `article`, zodat schermlezers de structuur goed kunnen interpreteren.

Daarnaast is aandacht besteed aan:
- Voldoende **kleurcontrast** tussen tekst en achtergrond
- Duidelijke **focus en klikbare elementen**
- Beschrijvende `alt`-teksten bij afbeeldingen
- Logische volgorde in de HTML, wat helpt bij toetsenbordnavigatie

Hoewel niet alles direct zichtbaar is voor de gebruiker, dragen deze keuzes bij aan een toegankelijkere ervaring volgens de **WCAG-richtlijnen**.

### Huisstijl

De visuele stijl van de website sluit aan bij de **huisstijl van DEPT**. Dit is terug te zien in:
- Het gebruik van vaste kleuren via CSS custom properties
- Typografie en witruimte die rust en overzicht creëren
- Consistente componenten zoals cards, buttons en informatieblokken

Bij het uitwerken van het ontwerp is het aangeleverde Figma-prototype als leidraad gebruikt, waarbij details zorgvuldig zijn vertaald naar HTML en CSS.

### Interactief
De website bevat meerdere interactieve elementen die de gebruiker duidelijke **feedback en feedforward** geven. Zo laat de submit button bij interactie direct zien wat er gebeurt door middel van een animatie, waardoor de gebruiker bevestiging krijgt dat de actie is uitgevoerd (feedback).

Daarnaast is er gebruikgemaakt van **feedforward** door herkenbare labels en visuele cues, zoals klikbare activity cards en een duidelijke sluitknop bij de popover. Hierdoor weet de gebruiker vooraf wat er gaat gebeuren bij een interactie.

- Een **submit button** met animatie die visuele feedback geeft bij interactie
- **Popover-interacties** bij activiteiten, waarmee extra informatie wordt getoond zonder de pagina te verlaten
- Overlay en sluitknoppen om interacties duidelijk en voorspelbaar te maken

Bij deze interacties is rekening gehouden met principes uit **Interaction Design**, zoals duidelijke feedback, herkenbare labels en soepele animaties. Animaties zijn functioneel ingezet en ondersteunen de actie van de gebruiker, geïnspireerd op basisprincipes uit de Disney-animatieprincipes.

Deze interacties maken de website niet alleen functioneel, maar ook prettiger en duidelijker in gebruik.

***Screens button-interacrie:***

*Screen 1:*

<img width="756" height="350" alt="button-interactie-screen-1" src="https://github.com/user-attachments/assets/496b04a6-5471-4dfc-8027-b9be83421d02" />

*Screen 2:*

<img width="735" height="347" alt="button-interactie-screen2" src="https://github.com/user-attachments/assets/399a10e6-51e4-4b24-9096-aed074789bb8" />

*Screen 3:*

<img width="753" height="332" alt="button-interactie-screen3" src="https://github.com/user-attachments/assets/8321e4d6-db43-4b50-9e05-04e0d6e91211" />

<br>
<br>

***Screens popover-interacrie:***

*Screen 1:* 

<img width="532" height="803" alt="popover-interactie-screen1" src="https://github.com/user-attachments/assets/194e0e17-20bd-4d56-a5b2-9836ae892fb9" />

*Screen 2:*

<img width="532" height="806" alt="popover-interactie-screen2" src="https://github.com/user-attachments/assets/70c27be7-48d2-4f73-9f91-d32c09714eba" />


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
In dit project is gebruikgemaakt van **HTML, CSS en JavaScript** om een interactieve en responsive website te bouwen. De code is opgezet met focus op leesbaarheid, onderhoudbaarheid en consistente code conventies.

### HTML

De HTML-structuur is **semantisch en overzichtelijk** opgebouwd. Elementen zoals `header`, `main`, `section`, `article` en `footer` worden gebruikt om de inhoud logisch te structureren. Componenten zoals weather cards, activity cards en popovers zijn herhaalbaar opgezet, wat de leesbaarheid en uitbreidbaarheid vergroot.

De HTML volgt een duidelijke hiërarchie, waardoor de structuur goed aansluit op de styling in CSS en de interacties in JavaScript.

### CSS

De styling is **mobile first** opgezet en maakt gebruik van **geneste media queries**. Alle styling voor een component, inclusief responsive gedrag, staat bij elkaar in het stylesheet. Hierdoor is de CSS beter onderhoudbaar en overzichtelijk.

Belangrijke kenmerken in de CSS:
- Gebruik van **kebab-case** voor class-namen
- Logische volgorde van selectors die grotendeels de HTML-structuur volgen
- Groepering van properties (layout, spacing, styling)
- Slim gebruik van **cascade en inheritance** om herhaling te voorkomen (DRY-principe)

### JavaScript

JavaScript wordt gebruikt voor het toevoegen van **interactie** aan de website. Zo zijn er event listeners toegevoegd voor:
- Het animeren en resetten van de submit button
- Het openen en sluiten van popovers met behulp van classes
- Het activeren van een overlay bij interactieve elementen

De JavaScript-code is bewust eenvoudig gehouden en werkt door CSS-classes toe te voegen of te verwijderen. Hierdoor blijven HTML, CSS en JS duidelijk van elkaar gescheiden.

### Code conventies

Tijdens het project zijn vaste **code conventies** aangehouden:
- **kebab-case** voor HTML en CSS
- **camelCase** voor JavaScript
- Consistent gebruik van inspringing (2 spaties)
- Duidelijke en beschrijvende namen voor classes, variabelen en functies

Deze conventies zorgen ervoor dat de code leesbaar blijft en eenvoudig te begrijpen is voor anderen. Op meerdere plekken in de repository zijn deze afspraken terug te zien, bijvoorbeeld bij de opbouw van componenten en de interactielogica in JavaScript.

## Bronnen
https://medium.com/@ruthiran_b/disneys-motion-principles-in-designing-interface-animations-9ac7707a2b43
https://valhead.com/2016/12/08/sketching-interface-animations-an-interview-with-eva-lotta-lamm/
https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
https://www.interaction-design.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design
https://www.frankwatching.com/archive/2020/09/10/ultieme-debriefing-checklist-11-stappen/
https://uxdesign.cc/how-to-create-a-ux-sitemap-a-simple-guideline-8786c16f85c1
https://www.nngroup.com/articles/wireflows
https://developer.mozilla.org/en-US/docs/Web/HTML/Element
https://validator.w3.org/
https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_mode
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



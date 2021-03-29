# Browser Tochnologies

## Installation
1. Clone repo
```
git clone git@github.com:sreen020/browser-technologies-2021.git
```

2. Install packages
```
npm install
```

3. Start server
```
npm run watch
```

## live demo
https://make-your-own-shirt.herokuapp.com/

## Case
Na alle cases bekijken kwam ik snel tot een besluit. Ik ga een website maken waarop je jouw eigen t-shirt kan ontwerpen. Natuurlijk zitten hier een aantal beoordelingscriterea aan vast.

- Gegevens maker (naam, telefoon of email)
- Kleur t-shirt
- Tekst t-shirt
- Maat t-shirt
- M/V
- Verder gaan waar je gebleven bent/ontwerp herzien
- Validatie: alles moet zijn ingevuld. Geef duidelijke foutmeldingen
- Gebruiker moet meerdere t-shirts kunnen maken en herzien, en moet dus een overzichtspagina hebben.

## Core-functionaliteiten
- Ik als gebruiker wil op deze website een t-shirt kunnen te bestellen
- Ik als gebruiker wil de keuze kunnen maken om dit t-shirt te verkrijgen in meerdere kleuren, maten en voor meerdere geslachten
- Ik als gebruiker wil een tekst kunnen bedrukken op het t-shirt
- Ik als gebruiker wil een overzicht hebben van alle door mij gemaakte t-shirts
- Ik als gebruiker wil een eerder gemaakt t-shirt kunnen aanpassen

## Schetsen
<img src="https://github.com/sreen020/browser-technologies-2021/blob/master/public/img/IMG_0119%201.png" width="100%">
<img src="https://github.com/sreen020/browser-technologies-2021/blob/master/public/img/IMG_0120%201.png" width="100%">

**Shop page**
- functional/reliable layer <br>
Het zou niet moeten uitmaken in welk scenario de gebruiker zich bevindt, je moet hier een shirt kunnen toevoegen aan jouw winkelmandje.

- The usable layer <br>
In plaats van een display flex wordt er hier gebruik gemaakt van een grid layout. Grid is iets preciezer met de positionering van elementen en kan "two dimensional" positioneren.

- Pleasurable layer <br>
Wanneer de user Javascript aan heeft staan zal de kleur van het shirt meekleuren met de input van de gebruiker. Dit geldt ook voor de custom tekst die gelijk wordt geprint op het voorbeeld-shirt.


**Overview page**
- functional/reliable layer <br>
Het zou niet moeten uitmaken in welk scenario de gebruiker zich bevindt, je moet hier een eerder toegevoegd shirt kunnen bekijken.

- The usable layer <br>
Door styling toe te voegen wordt deze pagina voor de gebruiker een stuk gebruiksvriendelijker. Zowel voor desktop als voor mobiel is deze pagina mooi en overzichtelijk.

- Pleasurable layer <br>
Om het de gebruiker makkelijker en fijner te maken kan je vanuit deze pagina het eerder gemaakte shirt bewerken.


**Op welke browsers ga ik testen?**
- Google Chrome Desktop en android telefoon
- Firefox desktop
- Safari desktop en iphone
- Opera op android telefoon


## Testing

**W3 validation** <br>
Tijdens het valideren van de html op de homepagina kreeg ik geen errors. Wel één warning. In mijn webshop maak ik gebruik van client-side form validatie. Wanneer er iets mis is wordt dit in een tekst element “gepushed” Dit betekend dat het element normaal leeg is. Dit is semantisch niet correct maar ik ga dit in dit project niet meer aanpassen. 
Dit kan verholpen worden door het element met javascript aan te maken.

Op de detail-pagina krijg ik dezelfde warning wanneer een gebruiker geen tekst heeft geselecteerd. Dit is de keuze van de gebruiker dus ik kan hier geen validatie op zetten. Wat wel een oplossing kan zijn is het pas genereren van de tekst elementen wanneer gebruiker iets invult.

**Powermapper** <br>
Ik ben erg geschrokken wanneer ik deze accessibility checker deed… Na een bijna foutloze html validatie kwam ik hier op een pagina met alleen maar rood. “51% have issues, worse than average”.

**Ik heb een aantal gefixed:**
- Meerdere h1 elementen
- Sommige browsers ondersteunen geen modules
- aria-label gebruiken op tekst binnen een a element
- Elk article of section moet een header hebben

**Nog te fixen in de toekomst:**
- Elke fieldset moet een legend element krijgen 
- Er moet  altijd 1 radio button gecheckt zijn
- Select moet een label krijgen
- EERDER BEGINNEN MET DIT TESTEN

**W3 validation** <br>
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/lighthouse.png" width="500">

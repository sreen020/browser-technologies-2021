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
- functional/reliable layer
Het zou niet moeten uitmaken in welk scenario de gebruiker zich bevindt, je moet hier een shirt kunnen toevoegen aan jouw winkelmandje.

- The usable layer
In plaats van een display flex wordt er hier gebruik gemaakt van een grid layout. Grid is iets preciezer met de positionering van elementen en kan "two dimensional" positioneren.

- Pleasurable layer
Wanneer de user Javascript aan heeft staan zal de kleur van het shirt meekleuren met de input van de gebruiker. Dit geldt ook voor de custom tekst die gelijk wordt geprint op het voorbeeld-shirt.


**Overview page**
- functional/reliable layer
Het zou niet moeten uitmaken in welk scenario de gebruiker zich bevindt, je moet hier een eerder toegevoegd shirt kunnen bekijken.

- The usable layer
Door styling toe te voegen wordt deze pagina voor de gebruiker een stuk gebruiksvriendelijker. Zowel voor desktop als voor mobiel is deze pagina mooi en overzichtelijk.

- Pleasurable layer
Om het de gebruiker makkelijker en fijner te maken kan je vanuit deze pagina het eerder gemaakte shirt bewerken.


**Op welke browsers ga ik testen?**
- Google Chrome Desktop en android telefoon
- Firefox desktop
- Safari desktop en iphone
- Opera op android telefoon

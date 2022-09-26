# Carousell!

1. Skapa en komponent som heter `Carousel`
2. Komponenten ska visa en bild i taget och användaren ska kunna byta bild genom att klicka på cirklarna under bilden
3. En av cirklarna ska vara ifylld så det går att se vilken som visas
4. När bilden ändras ska en ny bild visas genom att bilderna animeras till vänster eller höger
5. Komponenten ska inte ha något eget state utan ska kontrolleras utifrån med hjälp av props
6. (Bonus): Gör så man kan byta bild genom att swipea vänster eller höger på en **mobiltelefon**

### Mobiltelefon? Hur då?

Det finns två relativt enkla alternativ! 

1. Använd webbläsarens responsiva läge, där du kan simulera en telefon-storlek och funktionalitet såsom swipe, tap m.m.
2. Om du använder `Vite` kan du använda din fysiska telefon, lägg till `--host` efter ditt `dev`-script i package.json. Se till att din telefon är på samma nätverk som datorn och gå in på adressen som visas i terminalen när du startar appen med `npm run dev`.

Ser du "Network" har du gjort rätt :)
```
VITE vX.X.X ready in XXX ms

=> Local: http://url
=> Network: http://XXX.XXX.XXX.XXX:XXXX/ 
```
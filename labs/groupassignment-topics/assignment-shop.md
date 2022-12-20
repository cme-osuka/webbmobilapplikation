# Sälj dina kunskapskontroller!

Du vet alla de där kunskapskontrollerna vi byggt? De sitter säkert och dammar på ditt Github-konto, eller hur?

**Men inte längre!**

Ni har möjligheten att bygga en webbshop tillsammans där ni gör det möjligt att köpa era kunskapskontroller! Där ni i er grupp lägger upp dessa som produkter med screenshots, produktbeskrivningar, pris osv. så ni kan tjäna bra stålar på ert arbete! *disclaimer: sälj inte dessa på riktigt, utan håll er till test-nycklarna från Stripe.*

## Stripe
Stripe är ett trevligt och utvecklar-vänligt sätt att ta emot betalningar i applikationer. Och i vårt fall tillhandahåller de även något som heter "Stripe Checkout" som vi kan skicka användarna till, där de sköter betalningen och skickar sedan tillbaka användaren till vår app med hjälp av en `successUrl` eller en `cancelUrl` (som pekar till vår applikation).

En artikel på hur man implementerar detta hittar ni här: `https://www.freecodecamp.org/news/react-stripe-payments/`

## Backend / Produkter
Om ni vill, får ni gärna använda er av en backend eller ett CMS som Strapi. Där ni kan hämta era produkter från, spara ordrar och all annan info man kan tänka sig!

## Dela upp det i delar innan ni börjar jobba, och dela upp ansvaret
Det är en del olika delar, och ni kan absolut sätta er ner och bygga varje del tillsammans. Jag skulle rekommendera att ni tittar på på de olika delarna och delar upp det mellan er i gruppen.

- Landing page
- Lista på produkter (era kunskapskontroller)
- Kundvagn
- Checkout
- "Tack för ditt köp!"-sida

### Bonus:
- Gör så användare kan "lika" eller hjärtmarkera en produkt
- Lägg till en kund-chatt knapp på sidan (t.ex. som https://www.tidio.com/)
- Lägg till så den hämtar info från en produkts github-länk (t.ex. stars, readme-filen, etc)
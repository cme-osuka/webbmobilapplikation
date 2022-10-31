# 1 Vem gör vad, samla styrkor, dela upp ansvar (+ standups?)

# Gruppprojekt: Kodnamn FEUFLIX
Ni kommer att bygga en app ungefär som [DEN HÄR](https://react-movie-database-18.netlify.app/), med hjälp av [The Movie Db API](https://developers.themoviedb.org/3/getting-started/introduction). Där man skulle kunna t.ex. se en lista på populära filmer, söka efter filmer och få upp information om dessa. De stödjer även TV-shows  Men det är naturligtvis inte begränsat till just detta - och ni kommer få ett par förslag på hur ni kan bygga en liknande applikation *fast bättre!*.

En överblick på vad man kan göra hittar ni lite längre ner på deras dokumentation (under "Finding Data"). [Dokumentationen hittar du här!](https://www.themoviedb.org/documentation/api)

*Detta är inte en betygsgrundande uppgift, men är en bra övning inför framtida uppgifter.* 

Grupper hittar ni i groups.md i repot.

## Förslag på funktionalitet
- Kunna söka efter filmer
- En förstasida som visar t.ex. populära/"top rated"/kommande/latest (eller alla!)
- Kunna gå in på en film och visa lite info om filmen, en lista på skådespelare, etc
- Kunna gå in på en skådespelare och visa mer info om denne
- Visa en lista på filmer i en specifik genre
- Implementera en enklare backend för att kunna betygsätta en film & hålla reda på dessa (finns även i API't, men testa implementera det själva!)
- I en enklare backend, kunna spara favoriter (med enklare autentisering?)
- (Backend, svår) Kanske kunna "boka en biljett" till en film?
- Samma som för filmer, fast för TV-shows

## Tekniker, verktyg, paket
Ni är fria att använda vilka tekniker ni önskar, men dessa är något ni behöver komma överens om inom gruppen. Men jag skulle rekommendera att *använda en linter och sätta upp regler för det, det första ni gör* och bestämma er för en kod-standard eftersom ni kommer jobba med flera andra.

Experimentera gärna med ramverk, t.ex. Next.js, animations-bibliotek, state-hanterare, typescript etc.

Dessa vill jag att ni har med när vi presenterar nästa måndag (7 nov) :)

## Presentation
Det kommer vara en enklare presentation, med en kortare demo inför klassen där gruppen visar vad de byggt. Hur och vad de byggt den med, och vad som var svårast med att jobba med gruppuppgiften.

## Ansvar, styrkor, vem gör vad?
Eftersom de flesta av er kommer jobba i grupp, så har jag i formuläret även frågat om det är någon som kan tänka sig leda sin grupp. Ledaren kommer vara ansvarig för att se över så beslut tas på rättvist sätt, att dagliga standups/avstämningar sker och så projektet går framåt. *Det är gruppledaren ni bör vända er till, och gruppledaren till mig om ni har några frågor.*

Ni behöver även innan ni sätter igång, inventera era styrkor. Är det någon som har känsla för animeringar och transitions? Någon som kan design? Är det någon som hellre bygger någon form av Backend-funktionalitet? *Ta reda på detta innan ni bestämmer vem som gör vad.*

Och vem gör vad? Efter ni planerat och bestämt er för **vad** som ska göras, vill jag ni fördelar dessa tasks mellan er så jämnt det går. Det går även bra att sätta upp till två personer på en och samma task, och ha dessa två jobba tillsammans på kanske en lite svårare task.

## Innan ni börjar skriva någon rad kod,
Gå gärna igenom och se till att ni har allt på plats: en API-key till TMDb, ett gemensamt github-repo uppsatt, kod-regler, linter och sånt på plats. Även hur applikationen ska stylas, m.m.

Det kommer underlätta när ni väl sätter igång :)

## Planera arbetet
Ni är nästan redo att börja bygga, men först behöver vi planera arbetet, dela upp det i tasks och vilken ordning saker kommer byggas.

Det man kan göra är att skriva enklare s.k. **user stories** för att beskriva hur en användare ska kunna interagera med applikationen, och sedan dela upp det i mindre tasks. Till exempel:

> Som användare vill jag kunna gå in på en sida och se en lista på alla populära filmer.

> Som användare vill jag kunna gilla en film och se hur många som har gillat samma film.

Dessa kan ni sedan bryta upp i mindre, mer hanterbara **tasks**. T.ex:

> Skapa en sida X för populära filmer

> Hämta och visa populära filmer på sida X

> Filtrera populära filmer på genre

> Sortera populära filmer i bokstavsordning

*Ta gärna tiden och gissa hur lång tid varje task kommer göra, tillsammans. Har ni två helt skilda tidsestimeringar - gör det till ett spann, t.ex. "2-4 timmar"*

Dessa tasks rekommenderar jag att ni håller reda på med hjälp av förslagsvis ett Kanban-bräde, t.ex. på Trello eller liknande. 

## Daglig uppföljning, planering
I början på varje arbetsdag rekommenderar jag att ni håller korta standup-möten om max 5min, och laget runt kort berättar vad ni tänkt göra idag, tar upp om något är lite svårt och flagga för att ni behöver hjälp. 

I slutet på varje arbetsdag bör ni även välja en tid, och lika kort berätta hur det gått under dagen. Även här flagga för att ni behöver hjälp och ifall något tar längre tid.

**Eftersom detta är en heltids-utbildning, så räknar jag med att ni jobbar på detta tillsammans mån-fre, och inte bara på föreläsningsdagar.**

## Grov design / Wireframes
För att alla ska vara med på hur applikationen ska se ut, rekommenderar jag att ni tar tiden att göra grova wireframes på papper eller med hjälp av t.ex. Figma. Det vill säga att ni utelämnar färger, bilder och bara håller er till enklare rutor och beskrivningar av sidorna.

Fokusera gärna på att bygga den för mobiler först och göra en så bra mobil-upplevelse som möjligt :)

## Äntligen dags att koda!
Det vi alla väntat på, dags att sätta igång och koda! 

Här föreslår jag även att ni bestämmer er för hur kod ska committas in i ert repo. Jag rekommenderar att ni kommer överens om någon form av `Git Flow` [Medium: Simplified Git Flow](https://medium.com/goodtogoat/simplified-git-flow-5dc37ba76ea8). 

Där man jobbar på varje feature/task separat från Master/Main-branchen och när man är klar, gör en pull request som granskas av någon annan innan den pushas in i kodbasen. Följer man ett sådant flöde kommer ni dels fånga merge-konflikter innan de händer och dels har ni ett steg där man kan *reviewa koden* innan den åker in i main-branchen.

## Publicering
Ni får gärna publicera appen, men då behöver ni enligt TMDb's regler för API'et även ge credit till dessa någonstans på sidan. 

Här får ni använda er av vilken tjänst ni vill. Skulle ni ha en egen backend för ytterligare funktionalitet, kan jag hjälpa er med att hitta hosting för denna :)

## Frågor och funderingar
Samtliga frågor och funderingar om uppgiften tas i Issues på Github.

Och skulle ni mot förmodan ha problem med er grupp, kontakta gruppledaren i första hand och sedan mig på Teams. Men jag är säker på att ni kommer komma bra överens :)

## Inspiration, länkar

- https://react-movie-database-18.netlify.app/
- https://dribbble.com/search/shots/popular/mobile?q=movie%20app
- https://www.themoviedb.org/documentation/api
- https://developers.themoviedb.org/3/getting-started/introduction
- https://www.justinmind.com/blog/user-story-examples/
- https://medium.com/goodtogoat/simplified-git-flow-5dc37ba76ea8

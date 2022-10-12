# Del 2 - "Sätta upp en Store"

Ni har säkert märkt att det snabbt blir jobbigt när vi ska passa data mellan många olika komponenter och i många olika nivåer. För det kan vi använda någon form av Store, där vi tidigare använt Recoil - men vi kommer bygga en egen med hjälp av React Context. 

*Osäker på hur man gör det? Läs om det på [beta.reactjs.org/learn](https://beta.reactjs.org/learn/passing-data-deeply-with-context)* 

Vi har i måndags (10 okt) satt upp en lite mer komplex (men strukturerad!) version som använder `useReducer` för att hantera statet i vår Store. Det finns även i veckan innan ett exempel med `useState`. **Jag rekommenderar att du testar bygga det med hjälp av en Reducer!**

## Du behöver göra följande:
1. Utgå från applikationen vi skapade i del 1
2. Skapa en Store med hjälp av React Context, som kommer användas för att lagra vår Token och användar-information.
3. Gör så att den Token vi får inloggning, läggs till i vår Store när de loggar in.
4. Gör även så att den sparas i localStorage, och läses från localStorage när vi laddar om/in sidan. (Den ska alltså läsas in i vår Store när vi laddar om sidan, *om där finns någon sparad*)


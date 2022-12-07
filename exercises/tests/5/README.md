# 5. Enkla React tester med CRA

Detta exemplet använder `create-react-app` eftersom CRA kommer paketerat med Jest och Testing Library från början.

Du ska skriva tester för komponenterna `List` och för `Counter` i isolering, för att säkerställa att de fungerar.

Undrar du hur det fungerar, så har vi exemplet från JS-ramverk i mars (https://github.com/cme-osuka/javascript-ramverk/tree/main/week-9/30-mar/testing) eller på jests och RTLs dokumentation.

### Counter
- Testa om den renderar som den ska
- Testa om den skriver ut en text och att den börjar räkna från 0
- Klicka på den, därefter testa om den har ökats.

### List
- Testa om den renderar som den ska
- Testa om den har klassnamnet "List"
- Rendera den med tre `<li>` och testa så den innehåller dessa
- Rendera den utan `<li>` och testa så den inte innehåller någon utan att du ger det till den

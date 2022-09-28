# Notes: Mapp/Fil-struktur

Vi har märkt att det lätt blir Vilda västern i React, eftersom vi är fria att följa rekommendationer och standarder i hur vi strukturerar mappar och filer i ett projekt.

Det finns ett Github-repo som jag kan rekommendera att ta en titt på om du behöver ha något som *referens*, [Bulletproof React](https://github.com/alan2207/bulletproof-react). Något de också understryker - Bulletproof React är **inte en mall** och att man själv bör välja vad som passar för oss och vårt team och hålla oss till den stilen.

Utöver repot finns det även ett gäng förklaringar och länkar till nyttiga repon, under **Table Of Contents**. Där de under `Style Guide` exempelvis länkar till två andra repos: "Clean Code Javascript" och "Naming Cheatsheet", två nyttiga repon som kan hjälpa dig skriva bättre kod.

**Så ta gärna en titt på länkarna under Table Of Contents!**

Exempel:
```
React applikation
  src/
    components/ (återanvändbara)
    pages/ (home, about-me, projects, etc)
    utils/ eller helpers/ (återanvändbara hjälp-funktioner)
    context/ eller store/ (recoil, redux, zustand, etc)
    hooks/ 
    assets/ (bilder, fonts)
    types/ (endast typescript)

(https://github.com/alan2207/bulletproof-react)
```
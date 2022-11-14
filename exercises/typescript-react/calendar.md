# Kalender-app

Skapa en kalender-app med hjälp av dryg.net's dagar-API. 

Denna kalendern ska skapas genom att skapa ett rutnät med exempelvis månader (jan, feb, ..., dec) eller dagar (1, 2, 3, ..., 31). Man ska kunna klicka på en månad för att se en ny vy med rutnät på dagarna.

Dagarna ska visa namnsdagar, indikera om det är en röd/arbetsfri dag och visa vilken veckodag det är.

Innan du börjar koda, ta en titt på responsen från APIet och skriv typer för det du kommer använda.

```
|---|---|---|---|---|
|jan|feb|mar|apr|maj|
|---|---|---|---|---|
|jun|jul|aug|sep|okt|
|---|---|---|---|---|
| x | x | x | x | x |
|---|---|---|---|---|

|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| 6 | 7 | 8 | 9 | 10|
|---|---|---|---|---|
| 11| x | x | x | x |
|---|---|---|---|---|

```

### API
APIet hittar du på https://api.dryg.net/dagar/
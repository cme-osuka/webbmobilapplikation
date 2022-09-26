# Pangram

Ett pangram är en text som inkluderar varje bokstav i alfabetet (I detta fallet kollar vi bara enbart engelska bokstäver, alltså inte Å Ä Ö)

Skriv en funktion `pangram` som tar en sträng `value` som argument och returnerar true eller false beroende på om strängen är ett pangram eller inte.

**Exempel**
```
pangram("abc") // => false
pangram("The quick brown fox jumps over the lazy dog") // => true
pangram("abcdefghijklmnopqrstuvwxyz") // => true
```
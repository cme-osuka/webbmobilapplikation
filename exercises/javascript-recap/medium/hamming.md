# Hamming distance

"Hamming distance" är avståndet mellan två strängar av samma längd där antalet platser mellan de två skiljer sig. Den mäter det minsta antalet tecken-byten som behövs för att ändra en sträng till en annan, eller antalet fel som skulle gjort att den ena strängen blir som den andra.

Skriv en funktion `hamming`som tar två separata strängar som argument. Returnera sedan hamming-avståndet mellan dessa två strängar.

**Exempel**
```
hamming("ZZZ", "ZZX") // => 1
hamming("Måsen", "Moset") // => 2
```
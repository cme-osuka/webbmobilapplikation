# camelCase

Skriv en funktion `toCamelCase` som tar en sträng som argument. Funktionen bör returnera argumentet formatterad till en camelCase-sträng.

**Exempel**
```
toCamelCase("Good day") // => "goodDay"
```

# snake_case

Skriv en funktion `toSnakeCase` som tar en sträng som argument. Funktionen bör returnera argumentet formatterad till en snake_case-sträng.

**Exempel**
```
toSnakeCase("Danger noodle") // => "danger_noodle"
```

# Konvertering

Skriv två funktioner `fromSnakeToCamel` och en `fromCamelToSnake` som tar antingen en camelCase-formatterad sträng eller en snake_case-formatterad sträng. Funktionen ska returnera den andra typens casing.

**Exempel**
```
fromSnakeToCamel("danger_noodle") // => "dangerNoodle"
fromCamelToSnake("goodDay") // => "good_day"
```
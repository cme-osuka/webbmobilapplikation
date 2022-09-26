# Sa någon.. Props?

## Del 1
Du behöver skapa tre komponenter. A, B och C. De ska vara nästade på följande vis, och som bilden föreslår.

`A` ska hålla i ett state `x`, som ska passas hela vägen ner till `C` med hjälp av props och visa värdet av `x`. 

*(Bara i C eller i samtliga komponenter - det väljer du)*

```
Struktur:
<A>
  <B>
    <C />
  </B>
</A>
```

## Del 2
Skapa sedan en knapp som bilden föreslår inuti `C`. När du trycker på knappen ska värdet i vårt state `x` ökas och ändringen reflekteras där du valt att visa värdet av `x`.


![Bild](https://github.com/cme-osuka/webbmobilapplikation/blob/main/exercises/react-recap/images/passingprops.png?raw=true)
# 6. Enklare integrationstester

För denna övningen har en tidigare uppgift gjort återbesök, "my-github-profile"-labben. Det är en applikation som utefter en config-fil hämtar och visar information om en användares Github-konto. 

För denna övningen använder den ett par olika delar som ska fungera tillsammans, och är ett bra exempel på där vi skulle kunna skriva integrationstester.

Eftersom detta är ett Vite-projekt, rekommenderar jag att du sätter upp `vitest` och `react-testing-library`. `vitest` har så gott som samma syntax som `Jest` och kommer kännas väldigt bekant om du bekantat dig med `jest` redan!


Du ska med hjälp av `vite` och `react-testing-library` skriva tester för:
- Home.jsx och se till så det finns länkar till rätt /profile och /repos
- Repositories.jsx och se till så du skriver ut en lista på repositories
- Profile.jsx och se så den visar en bild, namn och beskrivning 


## Bonus:
Testa att sätta upp Mocks som "mockar" dina requests till Github, med hjälp av valfritt Mock-bibliotek (https://github.com/mswjs/msw är rätt trevligt)

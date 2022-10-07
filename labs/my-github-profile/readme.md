# My Github profile!

Det är dags för en liten fredagslabb! Denna gången ska ni få jobba lite med Githubs REST API och bygga en personlig liten app, främst för att öva på att bygga något mot ett riktigt API och att läsa API-dokumentation!

Så idag ska vi bygga en liten personlig Github-app! 

Sidor:
- Hem: Visa ens 3 (eller fler) senast uppdaterade repon
- Repo-lista: Visa alla ens repon, med information om hur många stars, forks de har. Klickar man på en sån länk bör den ta en till ens Github-repository på Github.
- Profil: Visa ens profil-information, hur många repon man har, ens profilbild, bio m.m.

Fokus: 
- Styla gärna! Välj ett sätt du inte är så bekant med, t.ex. Styled components och testa jobba med det!
- Försök att separera logik och rendering enligt Container / Presentational-patternet. (Eller skapa en hook för logik/hämta data)
- Testa hämta informationen och lagra den i React Context!

Bonus:
- Finns det något sätt att animera in element? Kan man animera sido-transitions med React Router? Testa!


Exempel:
![Bild](https://github.com/cme-osuka/webbmobilapplikation/blob/main/labs/my-github-profile/images/github.png?raw=true)

## Hur använder jag Githubs API?

1. Skapa en personlig access token (För lista på saker du behöver checka i, kolla nedan) [Github: PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. Spara din Token (Viktigt: Använd en ENV-variabel för detta och pusha **inte den till Github**
3. Börja göra requests med Fetch, eller Axios t.ex. (se exemplet nedan)

```
# Saker du behöver checka i för din Personal access token
repo
  [] repo:status
  [] repo_deployment
  [x] public_repo
user
  [x] read:user
  [x] user:email
  [] user:follow
```

Exempel på hur du använder Githubs API med Fetch
```js
const githubToken = "ghp_LPmxGqCCyHLhs1wQxM7yqIGgoXdUHJ05f2u8";
fetch("https://api.github.com/users/<USERNAME>/repos", {
  headers: {
    Authorization: `Bearer ${githubToken}`,
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => console.log(data));
```
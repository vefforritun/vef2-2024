# Vika 4, 29. janúar–4. febrúar 2024

## Fyrirlestrar

Fyrirlestrar koma inn eftir fyrirlestur 31. janúar.

## Námsefni

- [Form](../namsefni/08.form)
- [Cookies & sessions](../namsefni/09.cookies-session/)
- [Notendaumsjón](../namsefni/10.users/)

## Aukaefni

Í dæmum fyrir notendaumsjón er byrjað að nota `.env` skrá til að geyma gildi sem þurfa að koma úr _umhverfinu_ (environment). Til að geta notað þetta þarf að setja upp [dotenv](https://www.npmjs.com/package/dotenv) pakkann.

```bash
npm install dotenv
```

og síðan notað í kóða:

```javascript
import dotenv from 'dotenv';

dotenv.config();
```

Frá og með útgáfu 20 af node.js er kominn [„experimental support“ fyrir `.env` skrár](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs):

```bash
node --env-file=.env app.js
```

## Verkefni

- [ ] Fara yfir köku og session dæmi og skoða m.t.t. HTTP.
- [ ] Fara yfir passport dæmi
- [ ] Halda áfram með [verkefni 1](https://github.com/vefforritun/vef2-2024-v1)
  - [ ] Skila í seinasta lagi 2. febrúar
- [ ] Skoða sýnilausn á [verkefni 2 frá 2023](https://github.com/vefforritun/vef2-2023-v2-synilausn), höldum áfram að fara yfir í viku 5 og tengist verkefni 2 sem verður sett fyrir þá
- [ ] Fara yfir form námsefni, sérstaklega
  - [ ] HTML og form
  - [ ] Staðfesting á gögnum

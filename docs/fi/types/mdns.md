# Avoin mDNS-palvelu

## Ongelman kuvaus

Tökkiikö netti? Joskus vika ei olekaan palveluntarjoajassa. Pahikset saattavat käyttää tässä osoitteessa olevaa avointa mDNS-palvelua hyväkseen palvelunestohyökkäyksissä. Tällöin nettisi voi toimia todella hitaasti ja varsinainen hyökkäyksen kohde ei ollenkaan.

Jos haluat ymmärtää paremmin kuinka tämän tyyppiset, ns. amplifikaatiohyökkäykset toimivat, lue lisää [täältä](../categories.md#amplifikaatiohyokkaykset).

## Korjausehdotuksia

Ensiksi sinun tulisi tunnistaa laite, jossa palvelu on avoinna. [Lue ohjeet laitteen paikallistamiseksi.](../locate.md)

Kun olet paikallistanut laitteen, suosittelemme poistamaan palvelun käytöstä. Jos kyseessä on kotitietokoneesi ja haluat pitää palvelun päällä, siirrä ainakin laitteet palomuurin taakse tai ota tietokoneesi oma palomuuri käyttöön.

Mikäli kyseessä oli laite, jota et voi piilottaa palomuurin taakse, poista palvelu kokonaan käytöstä. Etsi laitteeseesi sopivat ohjeet kirjoittamalla hakukoneeseen `disable mdns` ja laitteeseen liittyvä tarkenne, esimerkiksi kotireitittimen malli: `disable mdns google wifi`

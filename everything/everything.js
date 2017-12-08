        klantnaam = (prompt("Wat is uw naam?"))
        aantal = Number(prompt("Hoeveel boeken wou u bestellen?"))
        betaling = prompt("Wat is uw gewenste manier van betalen?")
        titel = "JavaScript"
        prijs = 29.90;
        bedrag = aantal * prijs
        btw = (bedrag * 6) / 100;
        totaal = (bedrag + btw);
    document.write("<br> Bedankt voor je bestelling: " + klantnaam + "<br> Boektitel is: " + titel + "<br> Aantal te bestellen: " + aantal)
    document.write("<br> Prijs per boek is: " + prijs.toFixed(2))
    document.write("<br> Bedrag: " + bedrag.toFixed(2))
    document.write("<br> Btw: " + btw.toFixed(2))
    document.write("<br> Totaal inclusief BTW is: " + totaal.toFixed(2))
    document.write("<br> Gewenste betaling: " + betaling)
//opgave 8 vanaf hier
        voornaam  = "Carl"
        achternaam = "Petersen"
        schoolgeld = 1000;
        boekengeld = 100;
        bedrag = schoolgeld + boekengeld
        studiefinanciering = 600;
        totaal = bedrag - studiefinanciering;
        volledigenaam = voornaam + "<br>" + achternaam;
    document.write(
        "<p> Opgave 8 </p>" + volledigenaam + "<br> Totaal te betalen: " + totaal
    )
    console.log("man's not hot")
//opgave 9 vanaf hier
        Voornaam = "Zakaria"
        Achternaam = "Bolt"
        Nederlands = 9;
        Engels = 8;
        Rekenen = 7;
        gemiddeld = (Nederlands + Engels + Rekenen) / 3;
    document.write("<p> Opgave 9 </p>"+Voornaam+" "+Achternaam+"<br>Nederlands: "+Nederlands+"<br> Engels: "+Engels+"<br> Rekenen:"+Rekenen+"<br> Gemiddelde: "+gemiddeld)
        naam = "Carl"
        adres = "Kruislaan 111"
        leerplichtig = true;
        volwassen = false;
        temparatuur = -10;
        btw = 0.21 * 100;
        string = "33445"
        resultaat = (parseFloat(string))
        float = 3.3445; //meerdere var met float?
        resultaat2 = float.toString()
        resultaat3 = float.toFixed(2)
        twee //variabele twee ongedefineerd
        een = 1;
        drie = // een + twee kan niet twee bestaat al en deze som wordt niet weergegeven omdat het niet kan
    document.write("<br> Opgave 10: Datatype van naam is: " + typeof (naam))
    document.write("<br> Opgave 11: Datatype van leerplichtig is: " + typeof (leerplichtig))
    document.write("<br> Opgave 12: Datatype van temperatuur is: " + typeof (temparatuur))
    document.write("<br> Opgave 13: Waarde van btw is: " + btw)
    document.write("<br> Opgave 15: parseFloat (string) Resultaat is: " + typeof (resultaat))
    document.write("<br> Opgave 16: parseInt(float) Resultaat is: " + typeof (resultaat2)) //2x resultaat?
    document.write("<br> Opgave 17: float.toString() Rusltaat is: " + typeof (resultaat2))
    document.write("<br> Opgave 18: float.toFixed(2) Resultaat is: " + typeof(resultaat3)) //3x resultaat?
    document.write("<br> Opgave 19: Datatype var twee is: " + typeof (twee))
    document.write("<br> Opgave 20: De waarde van drie is: " + drie)
//Opgave 24
        studenten = ['Zakaria', 'Albert', 'Hamsa', 'Mike', 'Pieter']
    document.write("<br> Opgave 24: Studenten: "+ studenten)
//Opgave 25
        team = studenten
    document.write("<br> Opgave 25: Team: " + team)
//Opgave 26
        team[0] = 'Umut';
    document.write("<br> Opgave 26: Element[0] is gewijzigd: " + studenten)
//Opgave 27
        studenten.shift()
    document.write("<br> Opgave 27: Resultaat van shift: " + studenten)
//Opgave 28
        studenten.unshift('Jozef','Umut')
    document.write("<br> Opgave 28: Resultaat van unshift: " + studenten)
//Opgave 29
        studenten.pop()
    document.write("<br> Opgave 29: Resultaat van pop: " + studenten)
//Opgave 30
        studenten.push('Pieter','David')
    document.write("<br> Opgave 30: Resultaat van push: " + studenten)
//Opgave 31
        klas = studenten.splice(2,4);
    document.write("<br> Opgave 31: Resultaat <br>  studenten: " + studenten +"<br> klas: "+ klas)
//Opgave 32
        studenten.sort()
    document.write("<br> Opgave 32: Resultaat van sort: " + studenten)
//Opgave 33
        studenten.reverse()
    document.write("<br> Opgave 33: Resultaat van reverse: " + klas)
//Opgave 34
        index = studenten.indexOf('Jozef')
    document.write("<br> Opgave 34: Resultaat van indexOf: " + index)
//Opgave 35
        delete klas[2]
    document.write("<br> Opgave 35: Resultaat van delete: " + klas)
//Opgave 36
    document.write("<br> Opgave 36; Datatype van gedelete element is: " + typeof klas[2])
//Opgave 37
        klas.splice(2,1)
    document.write("<br> Opgave 37: Element voledig verwijderd: " + klas)
//Opgave 38
        index = studenten.indexOf('Jozef')
        studenten.splice(index,1)
    document.write("<br> Opgave 38: Specifieke student verwijderd: " + studenten)
//Opgave 39
        klas = klas.slice()
    document.write("<br> Opgave 39: Resultaat van kopieren: " + klas)
//Opgave 40
        myString = klas.join('|')
    document.write("<br> Opgave 40: Resultaat van join: " + myString)
//Opgave 41
        myArray = myString.split('|')
    document.write("<br> Opgave 41: Resultaat van split: " + myArray)
//Opgave 21
      var weekdag = []
          weekdag.push('maandag')
          weekdag.push('dinsdag')
          weekdag.push('woensdag')
          weekdag.push('donderdag')
          weekdag.push('vrijdag')
    console.log(weekdag)
//Opgave 23
      var team = []
        team.push({
            teamnaam: 'team1',
            wedstrijden: [1,2,3]
})
        team.push({
            teamnaam: 'team2',
            wedstrijden: [4,5,6]
})
        team.push({
            teamnaam: 'team3',
            wedstrijden: [7,8,9]
})
    console.log(team)
//Opgave 21
    document.write("<br> Opgave 21: Array aangemaakt")
//Opgave 22
    document.write("<br> Opgave 22: Elementen aangemaakt")
//Opgave 23
    document.write("<br> Opgave 23: weekdag array: " + weekdag)
    document.write("<br> Eerste element in array is: " + weekdag[0])
        for (let index = 0; index < team.length; index++) {
    document.write("<br> Doelpunten van " + team[index].teamnaam + ' : ' + team[index].wedstrijden[0] + ' ' + team[index].wedstrijden[1] + ' ' + team[index].wedstrijden[2])
}
//Opgave 42
    laptops = []
        laptops ['macbook'] = {
        'model' : 'air' , 'vooraad' : 2000, 'prijs' : 1090,
}
    document.write("<br> Opgave 42: laptops array aangemaakt: " + laptops)
//Opgave 43
        laptops['asusbook'] =
          {'model' : 'wind' , 'vooraad' : 1000, 'prijs' : 990,}
        laptops['dellbook'] =
          {'model' : 'fire' , 'vooraad' : 987, 'prijs' : 890,}
    document.write("<br> Opgave 43: laptops aray uitgebreid")
//Opgave 44
    document.write("<br> Opgave 44: De laptops array heeft " + laptops.length + 'elementen')
//Opgave 45
        mac = 'macbook' in laptops
        asus = 'asusbook' in laptops
        dell = 'dellbook' in laptops
    document.write("<br> Opgave 45: De variabele mac is: " + mac)
    document.write("<br> Mac specificaties -------" + "<br> Model: " + laptops['macbook']['model'] + "<br> Vooraad: " + laptops['macbook']['vooraad'] + "<br> Prijs: " + laptops['macbook']['prijs'])
//Opgave 46
        let vandaag = new Date()
    document.write('<br> Opgave 46: ' + vandaag)
//Opgave 47
        let nu = Date.now()
        let eenDag = 86400000;
        let morgen = new Date(nu + eenDag)
    document.write(`<br> Opgave 47: De datum van morgen is: ${morgen.getDate()}`)
//Opgave 48
//datum met string
        let schooljaar = new Date('2015-09-04')
//datum met datum en tijd string
        let wintertijd = new Date('2015-10-28T03:00:00')
    document.write(`<br> Opgave 48: Begin wintertijd is: ${wintertijd}`)
//Opgave 49
        let beginschooldag = new Date(2015,8,9,8,30)
    document.write(`<br> Opgave 49: Begin schooldag: ${beginschooldag}`)
//Opgave 50
    document.write(`<br> Opgave 50: Nu: ${nu}`)
        let dagen = ((nu - beginschooldag) / eenDag)
    document.write(`<br> Aantal dagen sinds begin schooldag: ${dagen.toFixed(0)}`)
        einddatum=prompt("Wat is de einddatum JJJJ-MM-DD?")
        dealine=einddatum
    document.write("<br> Dit is de einddatum: "+dealine)
        vandaag =new Date(Date.now())
        datum= new Date(dealine)
        eenDag=86400000;
        resterd =((vandaag - dealine) / eenDag)
    document.write("<br> Er zijn nog "+((vandaag-datum)/eenDag).toFixed(2)+" dagen te gaan tot de deadline")
        let maanden =  ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december']
        let weekdag = ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag']
        let vandaag = new Date()
    document.write(`<br>Vandaag is Dag: <b>${ weekdag[vandaag.getDay()] }</b>, maand: <b>${ maanden[vandaag.getMonth()] }</b>, Jaar: <b>${ vandaag.getFullYear() }</b>`);
//Lab06
        let klantnaam = prompt(`Wat is uw naam?`)
        let aantal = Number(prompt(`Hoeveel boeken wilt u bestellen?`))
        let vandaag = new Date()
        let titel = (`JavaSctipt`)
        let prijs = 29.90
        let bedrag = aantal * prijs
        let btw = (bedrag * 6) / 100
        let totaal = bedrag+btw
    Date.prototype.addDays = function(days) {
        dat = new Date(this.valueOf())
        dat.setDate(dat.getDate() + days)
        return dat;
}
        dat = new Date()
    document.write(`<br>Lab06`)
    document.write(`<br>Factuur`)
    document.write(`<br>Factuurdatum: ${vandaag}`)
    document.write(`<br>Betaaldatum: ${dat.addDays(5)}`)
    document.write(`<br> Bedankt voor je bestelling: ${klantnaam}<br> Boektitel is: ${titel}<br> Aantal te bestellen: ${aantal}`)
    document.write(`<br> Prijs per boek is: ${prijs.toFixed(2)}`)
    document.write(`<br> Bedrag: ${bedrag.toFixed(2)}`)
    document.write(`<br> Btw: ${btw.toFixed(2)}`)
    document.write(`<br> Totaal inclusief BTW is: ${totaal.toFixed(2)}`)

    let wl = (d) => {document.write(d);document.write('<br>')}

    let doorgaan = confirm(`Opgave 52: Doorgaan?`)
//opgave 52
    if (doorgaan) {
      wl(`Welkom bij de if-opdracht`)
    }
//Opgave 53
    else {
      wl(`tot ziens`)
    }
//Opgave 54
    if (doorgaan) {
      leeftijd = parseInt(prompt(`Wat is je leeftijd?`))
      if (leeftijd < 17) {
        leerplichtig = true
      }
    }
    else {
      leerplichtig = false
    }
    gediplomeerd = confirm(`Heb je je diploma behaald?`)
    if (leerplichtig && !gediplomeerd) {
      alert(`Doorstuderen!`)
    }
    if (gediplomeerd || !leerplichtig) {
      alert(`Je bent gediplomeerd Of niet leerplichtig Of allebei`)
    }

    let wl = (d) => {document.write(d);document.write('<br>')}
    let doorgaan = confirm(`Opgave 55: Doorgaan?`)
//opgave 55
    if (doorgaan) {
      wl(`Welkom bij de if-else-if-opdracht`)
    } else {
      wl(`Tot ziens`)
    }

    if (doorgaan) {
      creditcard = confirm(`Heb je een creditcard?`)
      if (creditcard) {
        creditcard = true
      }
      else {
        creditcard = false
      }
    }

    if (doorgaan) {
      leeftijd = parseInt(prompt(`Wat is je leeftijd?`))
      if (leeftijd > 18) {
        leeftijd = true
      }
      else {
        leeftijd = false
      }
    }

    if (creditcard && leeftijd){
      alert(`Je mag tot en met €1000 lenen.`)
    } else if (creditcard || leeftijd) {
      alert(`Je mag tot en met €500 lenen.`)
    } else {
      alert(`JE MAG GEEN GELD LENEN JONGE KUT VEREKTE MONGOL!`)
    }

    let wl = (d) => {document.write(d);document.write('<br>')}
//Opgave 56
    let doorgaan = confirm(`Opgave 56: Doorgaan?`)

    if (doorgaan == true) {
      postcode = prompt(`Wat is je postcode`)
      if (postcode == `1010ST`) {
        postcode = !""
      }
      else {
        postcode = !!""
      }
    }
    if (postcode){
      alert(`Kans op de Postcode Loterij is 90%`)
    }
    if (!postcode)[
      alert(`Kans op de Postcode Loterij is 0.069%.`)
    }

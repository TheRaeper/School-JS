klantnaam = "Rae"
aantal = Number(prompt("Aantal boeken te bestellen?"))
titel = "JavaScript"
prijs = 29.90;
bedrag = aantal * prijs 
btw = (bedrag * 6) / 100;
totaal = (bedrag + btw);

document.write("<br> Bedankt voor je bestelling: " 
    + klantnaam + "<br> Boektitel is: " 
    + titel + "<br> Aantal te bestellen: " 
    + aantal + "<br> Prijs per boek is: " 
    + prijs.toFixed(2) + "<br> Bedrag: "
    + bedrag.toFixed(2) + "<br> Btw: "
    + btw.toFixed(2) + "<br> Totaal inclusief BTW is: "
    + totaal.toFixed(2))
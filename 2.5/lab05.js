einddatum=prompt("Wat is de einddatum JJJJ-MM-DD?")
dealine=einddatum
document.write("<br> Dit is de einddatum: "+dealine)
vandaag =new Date(Date.now())
datum= new Date(dealine)
eenDag=86400000;
resterd =((vandaag - dealine) / eenDag)
document.write("<br> Er zijn nog "+((vandaag-datum)/eenDag).toFixed(2)+" dagen te gaan tot de deadline")
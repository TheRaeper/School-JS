//Lab08
let wl=a=>{document.write(a),document.write("<br>")};Date.prototype.addDays=function(a){return dat=new Date(this.valueOf()),dat.setDate(dat.getDate()+a),dat};let today=new Date,factuurdatum=today.addDays(-16),betaaldatum=factuurdatum.addDays(30);wl(`Vandaag is: ${today.toDateString()}`),wl(`Factuurdatum is: ${factuurdatum.toDateString()}`),wl(`Betaaldatum is: ${betaaldatum.toDateString()}`);let vandaag=new Date,dagenover=(betaaldatum-vandaag)/864e5;vandaag.getDate()==betaaldatum.getDate()?alert("Meld incassobureau!"):wl(`u heeft nog ${dagenover.toFixed(0)} dagen om te betalen.`);

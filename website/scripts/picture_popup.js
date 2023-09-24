var start = 1;
utføreBytteBilde(start);

function bytteBilde(nr, antallBilder) {
  utføreBytteBilde(start += nr, antallBilder);
}

function gjeldende(nr) {
  utføreBytteBilde(start = nr, antallBilder);
} 
// Denne funksjonen tilhører den manuelle bildekarusellen
function utføreBytteBilde(nr, antallBilder) {
  var bilde = document.getElementsByClassName("bilde");
  var prikk = document.getElementsByClassName("prikk");

  if (nr > antallBilder) {
    start = 1
  }

  else if (nr < 1) {
    start = antallBilder
  }

  for (i = 0; i < antallBilder; i++) {
    bilde[i].style.display = "none";
  }

  for (i = 0; i < antallBilder; i++) {
    prikk[i].className = prikk[i].className.replace(" velg", "");
  }

  bilde[start-1].style.display = "block";
  prikk[start-1].className = prikk[start-1].className + " velg";
} 



let startAutomatisk = 0;
viseBilderAutomatisk();

// Denne funksjonen tilhører den automatiske bildekarusellen

function viseBilderAutomatisk() {
  let slides = document.getElementsByClassName("bildeAutomatisk");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  startAutomatisk++;

  if (startAutomatisk > slides.length) {
    startAutomatisk = 1
  }    

  slides[startAutomatisk-1].style.display = "block";
  setTimeout(viseBilderAutomatisk, 5120)  
}
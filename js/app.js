// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// -JAVASCRIPT

// -mi recupero l'elemento griglia tramite query selector 
const gridElement = document.querySelector('.grid');
console.log(gridElement);


// -eventlistener play button 
//   -variabile playbuttin = getelementbyid ()
const playBtnElement = document.getElementById('play-btn');
console.log(playBtnElement);


//-addeventlistener //- inserire ciclo for all'interno
playBtnElement.addEventListener('click', function () {

  //per svuotare la griglia dalle celle create in precedenza 
  gridElement.innerHTML = ''

  //dichiaro variabile e assegno numero bombe 
  const bombe = getArrayBombeNumbers(1, 100, 16)
	console.log(bombe)

  //difficoltà
  //recupero il select dal DOM
  const selectedDifficulty = document.getElementById('difficulty').value;
  let cols, maxNumber;

  //se la difficoltà è uguale a 1 allora 10 colonne e 100 numeri
  if (selectedDifficulty === '1') {
    cols = 10;
    maxNumber = 100;
  } else if (selectedDifficulty === '2') {  //se è 2 9 colonne e 81 numeri
    cols = 9;
    maxNumber = 81;
  } else if (selectedDifficulty === '3') { //se è 3  7 colonne  e 49 numeri
    cols = 7;
    maxNumber = 49;
  }
  // -creo un ciclo for per creare 100 cell 
  for (let i = 1; i <= maxNumber; i++) {
    console.log(i);

    // -dentro il mio ciclo for creo template literal
    const htmlCell = `<div class="cell">${i}</div>`
    // console.log (htmlCell);

    // -aggiungere le mie Cell dentro la griglia
    gridElement.innerHTML += htmlCell;
  }
  // -recuperare elemento cell queryselector all 
  const cellDomElements = document.querySelectorAll('.cell');
  // -creare un ciclo for per la lunghezza delle cell 
  for (let i = 0; i < cellDomElements.length; i++) {
    // -dichiarare la cell corrente [i]
    const currentCellElement = cellDomElements[i];
    currentCellElement.addEventListener('click', function () {
      console.log('la casella cliccata è la numero: ' + currentCellElement.innerHTML);

      currentCellElement.classList.add('bg-green');

    })
  }
//creo funzione per la formula del numero random arrotando 
function getRandomNumbers(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max - min + 1) + min);
}

//creo funzione per la creazione delle bombe con numero minimo (1) e numero max (100) e il numero delle mie bombe (16)
function getArrayBombeNumbers(minRange, maxRange, number){
  const bombsArray = [];
//ciclo while continua finché l'array delle bombe non ha raggiunto il numero desiderato
while (bombsArray.length < number){
  //regola per generare numeri bombe
  const n = getRandomNumbers(minRange, maxRange);
console.log(n)
  //se n non è già presente nel array allora pushare il numero nel array
  if (bombsArray.includes(n) === false) {
    bombsArray.push(n);
  }
} 
 //array generato
  return bombsArray
}
})










// -aggiungere eventlistner
// -console.log  


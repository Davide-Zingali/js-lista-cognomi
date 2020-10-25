// Lista Cognomi
// Chiedere all’utente il cognome
var cognomeInput = prompt('Inserisci il tuo cognome ed entra nella lista:');

if (cognomeInput == '') {
  alert('Non puoi proseguire senza aver inserire il tuo cognome');
  window.location.reload();
} else {

  // forzatura prima lettera in maiuscolo
  cognomeInput = cognomeInput.charAt().toUpperCase() + cognomeInput.substr(1);

  // array cognomi
  var cognomiArray = [' Verdi', ' Bianchi', ' Rossi', ' Romoaldo', ' Sofia', ' Longhitano', ' Abate'];

  // aggiunta cognomeInput
  cognomiArray.push(' ' + cognomeInput);

  // ciclo while + lista stampata non ordinata
  var i = 0;
  while ( i < cognomiArray.length) {
    document.getElementById('output-lista').innerHTML = 'Lista cognomi non ordinata: ' + cognomiArray;
    console.log(cognomiArray[i]);
    i++
  }
}

// stampa ordine alfabetico
cognomiArray.sort();
document.getElementById('output-lista-ordinata').innerHTML = 'Lista cognomi ordinata: ' + cognomiArray;



// Consigli del giorno:
// 1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili;
// 2. anche perchè appunto parte dell’ex sarà cercare qualcosa.
// PS:: OCIO!!!! :octagonal_sign:
// solo su questo EX usiamo while e non for (poi dal prox in poi farete come volete )
// BONUS
// stampa anche array non ordinato;
// ordinamento fatto a mano (se proprio vi volete del male :wink: )


// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione “umana” :nerd_face: della lista in cui il nuovo utente si trova

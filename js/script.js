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

// output posizione push
var posizionePush = cognomiArray.indexOf(' ' + cognomeInput) + 1;

document.getElementById('posizione-lista').innerHTML = 'Secondo la lista ordinata ti trovi nella medesima posizione: ' + posizionePush;

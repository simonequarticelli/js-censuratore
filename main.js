// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate
//  su il numero di parole totali

//creo input utente
var testo = prompt('inserisci un testo');

//creo array di parole vietate
var censura = ['blu', 'rosso', 'giallo', 'verde', 'arancione'];

//creo funzione che censurare parole
function censored_words(prompt_testo, array_parole_vietate){
  //uso funzione per convertire in "array"
  prompt_testo = prompt_testo.split(' ');

  //creo array popolato dalle parole censurate inserite dall'utente
  var word_user = [];

  //creo contatore di parole censurate inserite
  var contatore = 0;

  //creo log per visualizzare il testo non censurato
  console.log(prompt_testo.join(' '));

  var find = false;
  var i = 0;
  while (i <= prompt_testo.length) {
    if (array_parole_vietate.includes(prompt_testo[i])) {
      find = true;
      word_user.push(prompt_testo[i]);
      prompt_testo[i] = 'xxx';
      contatore = contatore + 1;
    }
    i++;
  }
  document.getElementById('testo').innerHTML=(prompt_testo.join(' ') + "<br>");
  console.log('hai inserito ' + contatore + ' parole vietate su ' + prompt_testo.length);
  console.log(word_user);
}

//richiamo la funzione appena creata
censored_words(testo, censura);

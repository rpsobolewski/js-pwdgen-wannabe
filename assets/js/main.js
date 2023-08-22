/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23  */


/* 
strumenti

-prompt
-document.getElementById

*/

//chiedi nome utente

const userName= prompt('typer your Name');

//chiedi cognome utente

const userSurname= prompt('typer your Surname');

//chiedi colore preferito utente

const userColor= prompt('typer your favourite color');

//chiedi chiave utente

const userKey= prompt('typer your key');
//seleziona tag tramite id in cui inserire nome

const password= document.getElementById('password');


//lo inserisco in pagina

password.innerHTML= 'Your password is:  '+ userName +userSurname + userColor + userKey
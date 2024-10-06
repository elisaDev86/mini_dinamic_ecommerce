// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)


// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
const nuovoTitolo =document.getElementById('titolo');
function cambiaContenuto(){
   nuovoTitolo.textContent = 'My ShopSmart';
}
nuovoTitolo.addEventListener('mouseover', cambiaContenuto);

nuovoTitolo.addEventListener('mouseout', function() {
    nuovoTitolo.textContent = 'My SmartShop';
});

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function cambiaColorePagina(){
    const colori =["#433878", "#FF5733", "#33FF57"];
    const coloriRandom = Math.floor(Math.random() * colori.length);
    document.querySelector("body").style.backgroundColor = colori[coloriRandom] ;
}

window.onload = function(){
    
    setInterval(cambiaColorePagina, 3000); 
};

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function cambiaIndirizzo(){
   const nuovoIndirizzo = document.getElementById('address');
   const multiAddress = ["2024 My SmartShop, via Roma n.0", "2024 My SmartShop, Via dei Fiori, 35 - Bologna ", "2024 My SmartShop, Via dei Gatti, 91, Napoli"]
   const randomAddress = Math.floor(Math.random() * multiAddress.length);
   nuovoIndirizzo.innerHTML = "&copy; " + multiAddress[randomAddress];
}
window.onload = function() {
    
    setInterval(cambiaIndirizzo, 5000);
};

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function aggiungiClasseLinkAmazon() {
    const linkAmazon = document.querySelectorAll('table a');
    linkAmazon.forEach(link => {
        link.classList.add('amazon-link');
    });
}

aggiungiClasseLinkAmazon();

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function imgVisibile() {
    const immagini = document.querySelectorAll('img');
    immagini.forEach(img => {
        img.classList.add('visibile');  
    });
}

function imgInvisibile() {
    const immagini = document.querySelectorAll('img');
    immagini.forEach(img => {
        img.classList.remove('visibile'); 
    });
}

const tabella = document.querySelector('table');
tabella.addEventListener('mouseover', imgVisibile);  
tabella.addEventListener('mouseout', imgInvisibile); 

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function cambiaColorePrezzo(){
    const coloriPrezzo = ["#FF5733", "#33FF57", "#3357FF", "#FF33F1", "#F3FF33"];
    const prezzi = document.querySelectorAll('.prezzi');
    for(let i = 0; i < prezzi.length; i++)
    prezzi[i].style.color = coloriPrezzo[i];
    
}


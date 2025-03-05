document.addEventListener('DOMContentLoaded', function() {
    const tagButtons = document.querySelectorAll('.set-tag-btn'); // Seleziona tutti i pulsanti dei tag

    // Funzione per gestire il click su un pulsante dei tag
    function handleTagButtonClick() {
        const tagText = this.innerText; // Ottieni il testo del pulsante cliccato
        const inputField = this.parentElement.querySelector('.tag-input'); // Trova il campo di input associato al pulsante
        inputField.value += tagText + ', '; // Aggiungi il nuovo tag al campo di input, separato da una virgola e uno spazio
    }

    // Aggiungi un gestore di eventi a tutti i pulsanti dei tag
    tagButtons.forEach(function(button) {
        button.addEventListener('click', handleTagButtonClick);
    });
});

function calcolaPunteggio() {
    // Recupera tutti gli elementi di input con la classe 'tag-input'
    const tagInputs = document.querySelectorAll('.tag-input');

    // Inizializza l'oggetto dei punteggi per i giocatori
    const punteggiGiocatori = {};

    // Itera su tutti gli input di tag
    tagInputs.forEach(input => {
        const playerName = input.id; // Recupera il nome del giocatore
        const tags = input.value.split(',').map(tag => tag.trim()); // Recupera i tag e rimuove gli spazi
    
        // Inizializza il punteggio del giocatore se non esiste
        punteggiGiocatori[playerName] = punteggiGiocatori[playerName] || 0;
    
        // Debug: controlla i punteggi intermedi
        console.log('Tags:', tags);
        console.log('Punteggio iniziale:', punteggiGiocatori[playerName]);
    
        // Somma i punteggi per ciascun tag
        tags.forEach(tag => {
            const punteggioTag = getPunteggioTag(tag);
            punteggiGiocatori[playerName] += punteggioTag;
    
            // Debug: controlla il punteggio di ciascun tag
            console.log('Tag:', tag);
            console.log('Punteggio:', punteggioTag);
            console.log('Punteggio parziale:', punteggiGiocatori[playerName]);
        });
    });

    // Visualizza i risultati
    const resultContainer = document.querySelector('.result-container');
    resultContainer.innerHTML = '<h4>Risultato Calcolo Punteggio</h4>';

    // Mostra i punteggi per ogni giocatore
    Object.entries(punteggiGiocatori).forEach(([player, score]) => {
        resultContainer.innerHTML += `<p>${player}: ${score}</p>`;
    });
}

function getPunteggioTag(tag) {
    console.log('Tag:', tag); // Aggiunta del log per controllare il valore del tag
    // Mappa dei tag con i relativi punteggi
    const punteggiTag = {
        'IA': 4,
        'ID': 2.5,
        'KILL': 0.5,
        'CD': 1,
        'CA': 1.5,
        'RC': 2,
        'RCS': 3,
        'GA': 1.5,
        'RCNT': 0.5,
        'PENALITY': -3,
        'CAMPER': -2,
    };

    // Restituisci il punteggio corrispondente al tag o 0 se il tag non è valido
    return punteggiTag[tag.toUpperCase()] || 0; // Converto il tag in maiuscolo per essere sicuro che il confronto sia case-insensitive
}


// Funzione per gestire il click sui bottoni dei tag
function handleTagButtonClick() {
    var tag = this.getAttribute('data-tag'); // Ottieni il tag associato al pulsante
    var tagsField = document.getElementById('tags'); // Ottieni il campo dei tag

    // if (currentTags !== '') {
    //     currentTags += ', '; // Aggiungi una virgola solo se il campo non è vuoto
    // }
    // currentTags += tag; // Aggiungi il nuovo tag
    // tagsField.value = currentTags; // Imposta i nuovi tag nel campo del modulo
}

// Aggiungi un gestore di eventi a tutti i bottoni dei tag
var tagButtons = document.querySelectorAll('.set-tag-btn');
tagButtons.forEach(function(button) {
    button.addEventListener('click', handleTagButtonClick);
});

// Funzione per gestire altre azioni
function handleOtherAction() {
    // Codice per gestire altre azioni
}

// Esegui altre azioni quando si verifica un altro evento
var otherElement = document.getElementById('other-element');
otherElement.addEventListener('click', handleOtherAction);

// Altra logica JavaScript...

function setBordoColore(formId, colore, padding) {
    const form = document.getElementById(formId);
    form.style.border = `5px solid ${colore}`;
    form.style.borderRadius = '10px';
    form.style.padding = padding ? `${padding}px` : '0';
}

function setImpostore(formId) {
    // Funzionalità originale di setImpostore
    setBordoColore(formId, 'red', 10);

    // Mostra i bottoni con classe 'setImpostorsHidden' relativi al giocatore specificato
    const setImpostorsHiddenButtons = document.querySelectorAll(`#${formId} .setImpostorsHidden`);
    setImpostorsHiddenButtons.forEach(button => {
        button.style.display = 'inline-block';
    });

    // Nascondi i bottoni con classe 'setCrewmateHidden' e 'setDeadHidden' relativi al giocatore specificato
    const setCrewmateHiddenButtons = document.querySelectorAll(`#${formId} .setCrewmateHidden`);
    setCrewmateHiddenButtons.forEach(button => {
        button.style.display = 'none';
    });

    const setDeadHiddenButtons = document.querySelectorAll(`#${formId} .setDeadHidden`);
    setDeadHiddenButtons.forEach(button => {
        button.style.display = 'none';
    });
}

function setCrewmate(formId) {
    // Funzionalità originale di setCrewmate
    const crewmateButton = document.querySelector('.set-crewmate-btn');
    const coloreBottone = getComputedStyle(crewmateButton).backgroundColor;
    setBordoColore(formId, "#00b8f0", 10);

    // Mostra i bottoni con classe 'setCrewmateHidden' relativi al giocatore specificato
    const setCrewmateHiddenButtons = document.querySelectorAll(`#${formId} .setCrewmateHidden`);
    setCrewmateHiddenButtons.forEach(button => {
        button.style.display = 'inline-block';
    });

    // Nascondi i bottoni con classe 'setImpostorsHidden' e 'setDeadHidden' relativi al giocatore specificato
    const setImpostorsHiddenButtons = document.querySelectorAll(`#${formId} .setImpostorsHidden`);
    setImpostorsHiddenButtons.forEach(button => {
        button.style.display = 'none';
    });

    const setDeadHiddenButtons = document.querySelectorAll(`#${formId} .setDeadHidden`);
    setDeadHiddenButtons.forEach(button => {
        button.style.display = 'none';
    });
}

function setDead(formId) {
    // Funzionalità originale di setDead
    setBordoColore(formId, 'gray', 10);

    // Mostra i bottoni con classe 'setDeadHidden' relativi al giocatore specificato
    const setDeadHiddenButtons = document.querySelectorAll(`#${formId} .setDeadHidden`);
    setDeadHiddenButtons.forEach(button => {
        button.style.display = 'inline-block';
    });

    // Nascondi i bottoni con classe 'setImpostorsHidden' e 'setCrewmateHidden' relativi al giocatore specificato
    const setImpostorsHiddenButtons = document.querySelectorAll(`#${formId} .setImpostorsHidden`);
    setImpostorsHiddenButtons.forEach(button => {
        button.style.display = 'none';
    });

    const setCrewmateHiddenButtons = document.querySelectorAll(`#${formId} .setCrewmateHidden`);
    setCrewmateHiddenButtons.forEach(button => {
        button.style.display = 'none';
    });
}
function pulisciCampi() {
    // Esegui il refresh della pagina
    location.reload();
}

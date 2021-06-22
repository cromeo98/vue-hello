// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// istanzo vue
const application = new Vue(
    {
        el: '#root',
        data: {
            message: 'Benvenuto su Vue! Ti divertirai (se funzionerà)',
            img: 'https://picsum.photos/id/237/200/300',
            alt: "doggo"
        }
    }
);

document.getElementById('getDeckBtn').addEventListener('click', getDeckApi());




function getDeckApi() {

    var deckofcardsapi = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

    fetch(deckofcardsapi)
    .then(res => res.json())
    .then(data => {
        var deckData = data.cards[0];
        var code = deckData.code;
        var image = deckData.images.png;
        
        console.log(image);

        document.getElementById('card').innerHTML = '<img src="' + image + '">';
    })
    .catch(error => console.error(error));

    
}


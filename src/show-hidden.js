var btn = document.querySelector('#show-hide');
var cards = document.getElementsByClassName('cards-visible');

btn.addEventListener('click', function() {
  
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];

    if (card.style.display === 'flex') {
      card.style.display = 'none';
    } else {
      card.style.display = 'flex';
    }
  }

if (btn.innerText === 'Mostrar Mais \u2193') {
    btn.innerText = 'Mostrar Menos \u2191';
  } else if (btn.innerText === 'Mostrar Menos \u2191') {
    btn.innerText = 'Mostrar Mais \u2193';
  }
});  
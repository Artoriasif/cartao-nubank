const card = document.querySelector(".container");

card.addEventListener("mousemove", cardEffect);
card.addEventListener("mouseleave", cardBack);
card.addEventListener("mouseenter", cardEnter);

function cardEffect(event) {
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;
  const centerX = card.offsetLeft + cardWidth / 2; //para marcação do cursor do mouse no card
  const centerY = card.offsetTop + cardHeight / 2;
  const positionX = event.clientX - centerX;
  const positionY = event.clientY - centerY;

  const rotateX = ((+1 * 25 * positionY) / (cardHeight / 2)).toFixed(2); //tofixed para limitar a casas decimais
  const rotateY = ((-1 * 25 * positionX) / (cardWidth / 2)).toFixed(2);

  console.log(rotateX, rotateY);

  card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; //para melhorar o efeito 3D
}

function cardBack(event) {
  card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
  cardTransition();
}

function cardTransition() {
  clearInterval(card.transitionId);
  card.style.transition = "transform 400ms"; //Para a rotação nao ficar muito brusca
  card.transitionId = setTimeout(() => {
    card.style.transition = "";
  }, 400);
}

function cardEnter(event) {
  cardTransition();
}

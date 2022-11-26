const game = new Game('canvas');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
	game.start();
});



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

document.addEventListener('keydown', (event) => {
	game.car.onKeyEvent(event);
});

document.addEventListener('keyup', () => {
	game.car.onKeyEvent(event)
})
// player One & Two objects
const plOne = {
  plName: "playerOne",
  plStatus: 1,
  hp: 200,
  attDmg: 2000,
  dgC: 10,
};

const plTwo = {
  plName: "playerTwo",
  plStatus: 0,
  hp: 100,
  attDmg: 10,
  dgC: 50,
};

function displayPlayers(player) {
  const pl = document.getElementById(player.plName);

  pl.querySelector(`.name span`).innerHTML = player.plName;
  pl.querySelector(`.status span`).innerHTML = player.plStatus;
  pl.querySelector(`.hp span`).innerHTML = player.hp;
  pl.querySelector(`.attDmg span`).innerHTML = player.attDmg;
  pl.querySelector(`.dgC span`).innerHTML = player.dgC;
}

function startGame() {
  displayPlayers(plOne);
  displayPlayers(plTwo);
}

startGame();

// player One & Two objects
const plOne = {
  plName: "playerOne",
  plStatus: 1,
  hp: 200,
  attDmg: 30,
  dgC: 0.05,
};

const plTwo = {
  plName: "playerTwo",
  plStatus: 0,
  hp: 100,
  attDmg: 10,
  dgC: 0.5,
};

let attackPlayer = plOne;
let defendingPlayer = plTwo;

// game mechanics
// switch players
function switchPlayers() {
  if (plOne.hp > 0 && plTwo.hp > 0) {
    console.error(`attack`);

    if (attackPlayer.plName === plOne.plName) {
      defendingPlayer = plTwo;
      defendingPlayer = plOne;
    } else {
      attackPlayer = plOne;
      defendingPlayer = plTwo;
    }

    setTimeout(attack(attackPlayer, defendingPlayer), 10000);
  } else {
    console.error(`game over`);
  }
}

// generate dmg
const generateDmg = (dmg) => Math.round(Math.random() * dmg);

// see if the defender dodged the attack
const askIfHit = (dodge) => (Math.random() < dodge ? true : false);

// attack function
function attack(attacker, defender) {
  const dmg = generateDmg(attacker.attDmg);
  const doesDodge = askIfHit(defender.dgC);
  console.warn(`${attacker.plName} is active and his dmg is ${dmg} `);
  if (!doesDodge) {
    console.error(`${defender.plName} does NOT dodge the attack`);
    defender.hp -= dmg;
    console.warn(
      `player ${attacker.plName} does ${dmg} to ${defender.plName} (${defender.hp} left)`
    );
  } else {
    console.error(`${defender.plName} does DOES dodge the attack`);
  }

  switchPlayers();
}

// create ui
function displayPlayers(player) {
  console.log(player);
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
  attack(attackPlayer, defendingPlayer);
}

startGame();

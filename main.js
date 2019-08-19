const fightButton = document.querySelector('#fight')
fightButton.onclick = attackRound;

// This code creates a monsters array and populates it with the return value of a call to the `newMonster` function you wrote, with an incrementing "level" so that the monsters get harder.
const monsters = [];

while (monsters.length < 5) {
  monsters.push(newMonster(monsters.length));
}

// This will keep track of what monster we're currently on, though we could alternately shift out of our array if you find the global index variable too awkward.
let i = 0;

// Let's write a function called `getAttackDamage` that takes in a minimum and a maximum and returns a random value between those values.


// This will run whenever they click "Fight" and be where everything will happen.
function attackRound() {
  // Grab our current monster.
  const monster = monsters[i];


  // Make a player damage done variable and set it to the return value of calling `getAttackDamage` with our player's minimum attack and maximum attack.
  // Remember that the player is a global variable defined in `player.js`.
  
  

  // Call the pre-written `updatePlayerDamageText` function with that player damage done.



  // Decrease that monster's hit points by the player damage done variable.


  // Now that we've hurt our monster, here's where the real "game logic" will go.

  // If the monster's hit points are at or below zero now, switch to the next monster, and call our pre-written `updateResult` function with a message that that monster is dead.

  // If we're all out of monsters, call `updateResult` with a message that the player won, and call our pre-written `reset` function to start the game over.

  // Now, if the monster's NOT dead, he gets to attack. (We're letting the player strike first every round, though there are various other ways to do it!) Get a random monster attack damage by calling `getAttackDamage` based on the monster's minimum and maximum attack. THen call `updateMonsterDamageText` with that damage, deduct the damage from the player's hitPoints property, and check if the player's `hitPoints` are now at or below 0.

  // If they are, call `updateResult` with some kind of game over message. Otherwise, `updateResult` to be some kind of generic "You're fighting!" message.

  // No matter what, happens, call `updateHealthIndicators`, which will take care of updating the dom with the result of all of this!


}


function updateHealthIndicators() {
  const monster = monsters[i];
  const playerHealth = document.querySelector('#player-health');
  const monsterHealth = document.querySelector('#monster-health');
  const playerPicture = document.querySelector('#player');

  playerPicture.style.transform = `rotate(${player.hitPoints * 9 / 10 - 90}deg)`

  playerHealth.innerText = `${player.hitPoints}`
  playerHealth.style.width = `${player.hitPoints * 2}px`;

  monsterHealth.innerText = `${monster.hitPoints}`
  monsterHealth.style.width = `${monster.hitPoints * 2}px`;
}

function updateMonsterDamageText(damage) {
  let monsterDamageText = '';
  if (damage < 1) {
    monsterDamageText += `The monster barely scratched you with ${damage}.`;
  } else if (damage < 4) {
    monsterDamageText += `The monster hit you for ${damage}`;
  } else {
    monsterDamageText += `The monster clobbered you with ${damage}.`;
  }
  
  document.querySelector('#monster-damage-taken').innerText = monsterDamageText;
}

function updatePlayerDamageText(damage) {
  let playerDamageText = '';
  if (damage < 1) {
    playerDamageText += `The monster barely scratched you with ${damage}.`;
  } else if (damage < 4) {
    playerDamageText += `The monster hit you for ${damage}`;
  } else {
    playerDamageText += `The monster clobbered you with ${damage}.`;
  }
  
  document.querySelector('#player-damage-taken').innerText = playerDamageText;
}
    
function updateResult(result) {
  document.querySelector('#results').innerText = result;
}

function reset() {
  fightButton.innerText = 'Start Over';
  fightButton.onclick = startOver;

  player.hitPoints = 100;
  i = 0;
  monsters.splice(0);

  while (monsters.length < 5) {
    monsters.push(newMonster(monsters.length));
  }

  updateHealthIndicators();
}

function startOver() {
  fightButton.onclick = attackRound;
  fightButton.innerText = 'Fight'
}
// Player vs comp 
// MVP 
// On game load the game board appears with an instructions modal and the character selector screen
// Player chooses his character by clicking on the character on the screen.
// this will be a image inside of a div
// when he clicks on the character the character image moves to the player stage. Player always chooses first
// the character that has been selected is removed from the options.
// Next it is the computers turn to select.  The computer picks randomly from the remaining options. 
// The computer selection is removed from the character list and is placed on the computers stage.
// Once both teams are done being selected all the character selection images are removed from the screen.
// the game moves into the battle stage
// Each character only attacks once per turn
// The player chooses its attack first.  The player clicks on the computers character image to attack. 
// The player does this for each character he has on his stage.
// the computer chooses randomly who it attacks for each character on the computer stage and the the fight scene plays out(for MVP just dialogue)
// The damage dealt/health lost, is equal to the attack power of the character(will convert this to an attack power range if time allows)
// when a characters health reaches 0 it is eliminated and cannot attack anymore
// eliminated character images are removed from the stages when they are eliminated
// Once an entire team is eliminated it loses.  Screen reads who won.
// button to reset the board

// DOM VARIABLES
const resultsDisplay = document.querySelector('.results')

const attackBtn = document.querySelector('.attack')

// GLOBAL VARIABLE

// helper function
const resetGame = () => {
    window.location.href = window.location.href
}
const winState = () => {
    if (superman.health < 0) {
        document.body.innerHTML = `<h1>Game Over!${goku.name} Wins!</h1>
        <button class="reset">Reset</button>`
        const resetBtn = document.querySelector('.reset')
        resetBtn.addEventListener('click', resetGame)
    } else if (goku.health < 0) {
        document.body.innerHTML = `<h1>Game Over!${superman.name} Wins!</h1>
        <button class="reset">Reset</button>`
        const resetBtn = document.querySelector('.reset')
        resetBtn.addEventListener('click', resetGame)
    }
}

// event listener
attackBtn.addEventListener('click', () => {
    if (goku.health > 0) {
        goku.attack(superman);
    if (superman.health > 0) {
        superman.attack(goku)
    }else { 
        winState();
    }
    winState()
}
});


class Character {
    constructor(name, health, attackPower, accuracy) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.accuracy = accuracy;
    }
    attack(target) {
    if (Math.random() < this.accuracy) {
        target.health -= this.attackPower;
        resultsDisplay.innerHTML += `<h3> ${target.name} was hit! Health is down to ${target.health}!</h3>`;
    }else {
        resultsDisplay.innerHTML += `<h3> ${this.name} Missed!</h3>`
        
        }
    }
}
    


const superman = new Character ("Superman", 100, 15, .7)



const goku = new Character('Goku', 100, 15, .7)




// DOM VARIABLES
const resultsDisplay = document.querySelector('.results')

const attackBtn = document.querySelector('.attack')


// helper function
const resetGame = () => {
    window.location.href = window.location.href
}
const winState = () => {
    if (superman.health < 0) {
        document.body.innerHTML = `<h1>Game Over! ${goku.name} Wins! Congrats you beat the Computer</h1>
        <button class="reset">Play Again!</button>`
        const resetBtn = document.querySelector('.reset')
        resetBtn.addEventListener('click', resetGame)
    } else if (goku.health < 0) {
        document.body.innerHTML = `<h1>Game Over! ${superman.name} Wins! Sorry you have lost</h1>
        <button class="reset">Play Again!</button>`
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

// Character Class
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
    

// Character Instances
const superman = new Character ("Superman", 100, 15, .7)



const goku = new Character('Goku', 100, 15, .7)


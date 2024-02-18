"use strict";

const DIMENSION_DAMIER = 5;

// Créer le pion JS.
let pionJS = document.createElement('img');
pionJS.src = 'img/pion.png';

// Créer le pion Bonus.
let pionBonus = document.createElement('img');
pionBonus.src = 'img/bonus.png';

// Créer le pion Bravo.
let pionBravo = document.createElement('img');
pionBravo.src = 'img/bravo.png';

// Créer la cage avec un élément TABLE.
let cage = document.createElement('table');
cage.style.cssText = "border: 2px solid; border-collapse: collapse";
for (let x = 0; x < DIMENSION_DAMIER; x++) {
    let tr = cage.insertRow();
    for (let y = 0; y < DIMENSION_DAMIER; y++) {
        let td = tr.insertCell();
        td.style.cssText = "border: 1px solid; width: 100px; height: 100px; font-size: 0";
    }
}

// Positionner le pion JS initialement au centre.
let initialX = 2;
let initialY = 2;
cage.rows[initialX].cells[initialY].appendChild(pionJS);

// Positionner le pion Bonus aléatoirement.
let bonusX, bonusY;
function positionnerPionBonus() {
    bonusX = Math.floor(Math.random() * DIMENSION_DAMIER);
    bonusY = Math.floor(Math.random() * DIMENSION_DAMIER);
    cage.rows[bonusX].cells[bonusY].appendChild(pionBonus);
	out.appendChild(cage);
}
// Appeler la fonction pour positionner le pion Bonus initialement.
positionnerPionBonus();
// Mettre à jour la position du pion Bonus toutes les 2 secondes.
setInterval(() => {
    cage.rows[bonusX].cells[bonusY].removeChild(pionBonus);
    positionnerPionBonus();
}, 2000);
function verifierCollision() {
    if (initialX === bonusX && initialY === bonusY) {
		cage.rows[bonusX].cells[bonusY].removeChild(pionBonus);
        cage.rows[initialX].cells[initialY].removeChild(pionJS);

        cage.rows[initialX].cells[initialY].appendChild(pionBravo);
        clearInterval(intervalID);
    }
}
document.addEventListener('keydown', (event) => {
    verifierCollision();
});

let intervalID = setInterval(() => {
    verifierCollision();
}, 2000);

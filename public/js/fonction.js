// FONCTIONS

// EXO 1

// let rand = () => {
//     let rando = Math.floor(Math.random()*20)+ 1;
//     console.log(rando);
//     let essai = parseInt(prompt('devinez le chiffre entre 1 et 20'));
//     let comt = 0;
//     do {
//         if (Math.abs(essai - rando) == 0) {
//             console.log('bien uej');
//             break;
//         } else if (Math.abs(essai - rando) == 5) {
//             if (comt == 4) {
//                 break;
//             } else {
//             console.log('froid');
//             comt++
//             essai = parseInt(prompt(`essais: ${comt}`));
//             }
//         } else if (Math.abs(essai - rando) == 2) {
//             if (comt == 4) {
//                 break;
//             } else {
//             console.log('chaud');
//             comt++
//             essai = parseInt(prompt(`essais: ${comt}`));
//             }
//         } else if (Math.abs(essai - rando) == 1) {
//             if (comt == 4) {
//                 break;
//             } else {
//             console.log('brulant');
//             comt++
//             essai = parseInt(prompt(`essais: ${comt}`));
//             }
//         } else {
//             if (comt == 4) {
//                 break;
//             } else {
//             comt++
//             essai = parseInt(prompt(`essais: ${comt}`));
//             }
//         }
//     } while (comt !== 5)
// }
// rand();

// EXO 2

// let tab = [true, "alex", 3]

// let maFonction = () => {
//     tab.forEach(element => {
//         if (typeof element =='string') {
//             console.log(element.charAt(0).toUpperCase()+element.slice(1));
//         } else if (typeof element == 'number') {
//             console.log(element * element);
//         } else if (typeof element == 'boolean') {
//             console.log(!element);
//         }
//     });
// }

// maFonction()

// EXO 3

let moinsMoyenne = []
let moyenne = []
let plusMoyenne = []

let user = (prenom, salaire) => {

}
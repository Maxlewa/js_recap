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

// LOUISE

let fonctionSaMere = () => {

    let rand = Math.abs(Math.round(Math.random()*20))
    console.log(rand);
    let quest; 
    let count = 0

    do {
        quest = prompt("Devinez un nombre entre 0 et 20")
        if (Math.abs(quest-rand) == 5) {
            alert("froid");
        } else if (Math.abs(quest-rand) == 2) {
            alert("chaud");
        } else if (Math.abs(quest-rand) == 1) {
            alert("brulant");
        } else if (count == 5) {
            alert("La partie est terminée")
        } else if (quest == rand) {
            alert('Tu as gagné')
            break;
        }
        count++
    } while (count <= 5 && quest!=rand);

}

fonctionSaMere()

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

// let moinsMoyenne = []
// let moyenne = []
// let plusMoyenne = []

// let user = (prenom, salaire) => {
//     if (salaire < 1600) {
//         moinsMoyenne.push(prenom)
//     } else if (1600 < salaire && salaire < 1800) {
//         moyenne.push(prenom)
//     } else if (salaire > 1800) {
//         plusMoyenne.push(prenom)
//     }
// }

// user("ayoub", 1400)

// console.log(moinsMoyenne);
// console.log(moyenne);
// console.log(plusMoyenne);

// EXO 4

// let concert = []
// let dehors = []

// let fonction = (prenom, age) => {
//     if (age >= 18) {
//         concert.push(prenom.charAt(0).toUpperCase()+prenom.slice(1))
//     } else {
//         dehors.push(prenom.charAt(0).toUpperCase()+prenom.slice(1))
//     }
// }

// fonction("alex", 23)
// fonction("ludivine", 14)
// fonction("jamila", 25)
// fonction("abdellah", 27)
// fonction("momo", 44)
// fonction("dawid", 35)
// fonction("tristan", 20)
// fonction("tom", 18)
// fonction("tim", 17)

// console.log(concert);
// console.log(dehors);
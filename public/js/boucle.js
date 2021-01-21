// BOUCLES

// EXO 1

// 1.1

// let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol"];

// leTableau.forEach((element) => {
//     console.log(`L'élement ${element} est de type ${typeof(element)}`);
// });

// 1.2

// let lesIntegers = []
// let lesStrings = []
// let lesAutres = []

// leTableau.forEach((element) => {
//     if (typeof(element) === 'number') {
//         lesIntegers.push(element)
//     } else if (typeof(element) === 'string') {
//         lesStrings.push(element)
//     } else {
//         lesAutres.push(element)
//     }
// })

// console.log(lesIntegers);
// console.log(lesStrings);
// console.log(lesAutres);

// 1.3

// let lesGrandsIntegers = []
// let lesPetitsIntegers = []
// let lesPetitsStrings = []
// let lesGrandsStrings = []

// leTableau.forEach((element) => {
//     if (typeof(element) === 'number' && element < 100) {
//         lesPetitsIntegers.push(element)
//     } else if (typeof(element) === 'number' && element > 100) {
//         lesGrandsIntegers.push(element)    
//     } else if (typeof(element) === 'string' && element.length < 6) {
//         lesPetitsStrings.push(element)
//     } else if (typeof(element) === 'string' && element.length > 6) {
//         lesGrandsStrings.push(element)
//     }
// })

// console.log(lesPetitsIntegers);
// console.log(lesGrandsIntegers);
// console.log(lesPetitsStrings);
// console.log(lesGrandsStrings);

// 1.4

// let nb = parseInt(Math.round(prompt("Nombre ?")))

// let potPetit = []
// let potGrand = []

// if (nb < 0) {
//     console.log("Chiffre, trop petit");
//     nb = parseInt(Math.round(prompt("Nombre ?")))
// } else if (nb > 100) {
//     potGrand.push(nb)
// } else if (nb <= 100) {
//     potPetit.push(nb)
// }

// console.log(potPetit);
// console.log(potGrand);

// EXO 2

// let def = prompt("Que signifie HTML ?").toLowerCase()
// let count = 0

// while (def !== "hyper text markup language" && count < 2) {
//     console.log("Réessayez");
//     def = prompt("Que signifie HTML ?").toLowerCase()
//     count++
// }
// if (def == "hyper text markup language") {
//     console.log("Bravo !");
// }

// EXO 3

// let tab = ["maxence", "louise", "jamila", "natchez"]

// tab.forEach(el => {
//     if (tab.indexOf(el) % 2 == 0 && el.length > 4) {
//         console.log(el.charAt(0).toUpperCase()+el.slice(1));
//     }
// });



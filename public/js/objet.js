// OBJET

// EXO 1

console.log("_____1_____");

let voiture = {
    marque : "Audi",
    modele : "A6",
    type : "SUV",
    color : "black",
    prix : 20000,
    phrase() {
        console.log(`Ma ${this.marque} ${this.modele} est de type ${this.type}. Elle est ${this.color} et vaut ${this.prix} euros.`);
    }
}

voiture.phrase();

// EXO 2

console.log("_____2_____");

let personnage = {
    nom : "Beyens",
    prenom : "Tristan",
    argent : 400,
    sac : [],
    acheter(x) {
        if (this.argent >= x.prix) {
            this.sac.push(article.nomProduit)
            this.argent -= x.prix
            x.stock--
        } else {
            console.log("Vous êtes trop pauvre ...");
        }
    }
}

let article = {
    nomProduit : "montre",
    prix : 200,
    stock : 4,
}

personnage.acheter(article);
console.log(personnage);
console.log(article);

// EXO 3



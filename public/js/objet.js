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

let molengeek = {
    nEmployes: 0,
    patron: {
        nom: "Jefe",
        prenom: "El",
    },
    employe: [],
    addEmploye(x) {
        if (this.employe.indexOf(x) > -1) {
            console.log(`l'employé existe déjà`);
        } else {
            this.employe.push(x)
            this.nEmployes++
        }
    },
    delEmploye(x) {
        if (this.employe.indexOf(x) > -1) {
            this.employe.splice(x, 1);
            this.nEmployes--
        } else {
            console.log("cet employé n'existe pas");
        }
    },
    felicitations() {
        let rando = Math.floor(Math.random()*this.employe.length);
        console.log(rando);
        console.log(`${this.employe[rando]} est l'employé du mois`);
    }
}
molengeek.addEmploye("jeff");
molengeek.addEmploye("louise");
molengeek.addEmploye("alex");
molengeek.addEmploye("maxence");
molengeek.felicitations();

console.log(molengeek);

// EXO 4

let perso = {
    identite : {
        nom : "Musk",
        prenom : "Elon",
    },
    argent : 0,
    lieu : "Bruxelles",
    humeur : "good",
    humeurChange() {
        let rando = Math.floor(Math.random() * 2)
        switch (rando) {
            case 0:
                this.humeur = "not good";
                break;
            case 1:
                this.humeur = "très good";
                break;
        
            default:
                break;
        }
    }
}

let lieuChange = () => {
    switch (x.lieu) {
        case "Bruxelles":
            x.lieu = "le travail"
            break;
        case "le travail":
            x.lieu = "Bruxelles"
            break;
        default:
            break;
    }
}

let argentPlus = () => {

}
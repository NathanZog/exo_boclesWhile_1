// 1
// let chiffre = prompt("Donnez moi un chiffre :)");

// let i = 0;

// while(i <= chiffre){
//     console.log(i);
//     i++;
// }

// 2

// let classe = [];
// let nbrmax = parseInt(prompt("Quel est le nombre d'étudiant maximal de la classe ?"));
// let i = classe.length;

// while( i < nbrmax){
//     console.log(classe);
//     classe = prompt("Entrez un nom d'élève");
//     i++;
// }
// alert("Le nombre d'élèves est suffisant !")

// 3

// let tab = ["Yusuke", "Naruto", "Eren", "Ichigo", "Luffy", "Yugi", "Goku", "Inuyasha", "Kuroko"];
// let i = 0;
// while(i < 9){
//     console.log(`Bonjour ${tab[i]}`)
//     i++;
// };

// 4

// let fruits =["Banane", "Pomme", "Abricot", "Mangue","Lichie", "Mandarine"];

// let panier = [];

// let i = fruits.length-1;


// while(i >= 0){
//     panier.unshift(fruits[i])
//     i--;
// }

// fruits.splice(0, fruits.length)
// console.log(fruits);
// console.log(panier);

// 5

// let legumes = ["Concombre", "Aubergine", "Champignons", "Cornichon"];

// let longueur = legumes.length-1;

// let caisseLegumes = [];


// while(longueur >= 0){
//     caisseLegumes.push(legumes[longueur]);
//     longueur--;
// }

// legumes.splice(0, legumes.length);

// console.log(legumes);
// console.log(caisseLegumes);

//6

let reponse = prompt("Quel animal a 4 pattes le matin, 2 pattes à midi, et 3 pattes le soir ?");

while(reponse !== "l'homme"){
    reponse = prompt("Réponse incorrecte : Veuillez réessayez !")
}
alert("Vous avez la bonne réponse !");
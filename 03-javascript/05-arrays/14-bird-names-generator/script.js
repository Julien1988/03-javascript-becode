/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code 
    let birdsLenght = birds.length;
    let adjectivesLength = adjectives.size;
    let randomBird;
    let randomAdj;

    function randomBirds(max) {
        
        randomBird = Math.floor(Math.random() * Math.floor(max));
        return randomBird;
    }

    function randomAdjs(max) {
        randomAdj = Math.floor(Math.random() * Math.floor(max));
        return randomAdj;
    }

    function textWriter(fem) {
        if ( fem === true ) {
            
            return 
        } else {
            return
        }
    }

    document.getElementById("run").addEventListener("click",() => {
        
        randomBirds(birdsLenght);
        randomAdjs(adjectivesLength);
        textWriter(birds[randomBird].fem);
        console.log(birds[randomBird].name);
        console.log(Map.adjectives);

        
        
        
        
    });
    

    
})();

// Au clic sur le bouton, affiche dans la balise prévue un nom d'oiseau généré aléatoirement à partir des données du script.
// Chaque nom est associé à une propriété qui vous permet de savoir si vous devez accorder l'adjectif (ajoutez un "e" en fin de mot).
// Examples de résultat : La mouette chantante ou Le corbeau huppé. 

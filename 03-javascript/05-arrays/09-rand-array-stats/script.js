/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let numberArray;
    let addition = 0;
    let moyenneNumber = 0;
    let min = 100;
    let max = 0;
    let i = 1;
    
    // Fonction de création d'un nombre random

    function randomizeArray() {
        numberArray = Array.from(new Array(10).keys(), () => Math.floor(Math.random() * (100 - 1) + 1))
        return numberArray;
    }

    // Fonction de sélection du nombre le plus grand

    function bigestNumber(arrayOfNumbers){
        
        for (i=0; i<arrayOfNumbers.length; i++) {
            if(arrayOfNumbers[i]>max) max=arrayOfNumbers[i];
        }
        return max;
    }

    // Fonction de sélection du nombre le plus petit

    function lowestNumber(arrayOfNumbers){
        
        for (i=0; i<arrayOfNumbers.length; i++) {
            if(arrayOfNumbers[i]<min) min=arrayOfNumbers[i];
        }
        return  min;
    }

    // Fonction de la somme des nombres

    function sommeOfNumbers(arrayOfNumbers) {
        for (i=0; i<arrayOfNumbers.length; i++) {
            addition += arrayOfNumbers[i];
        }
        return addition;
    }

    // Fonction de calcule de la moyenne des nombres

    function middleOfNumbers(arrayOfNumbers) {
        let sumOfNumbers = 0;
        for (i=0; i<arrayOfNumbers.length; i++) {

            sumOfNumbers += arrayOfNumbers[i];
            moyenneNumber = sumOfNumbers / i;
        }
        return moyenneNumber;
    }

    function displayNumbers() {
        for (i = 1; i < 11; i++) {

            document.getElementById("n-" + i).innerHTML = numberArray[i-1]
        }

    }



    document.getElementById("run").addEventListener("click", () => {
        randomizeArray();
        bigestNumber(numberArray);
        lowestNumber(numberArray);
        sommeOfNumbers(numberArray);
        middleOfNumbers(numberArray);
        displayNumbers()
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = addition;
        document.getElementById("average").innerHTML = moyenneNumber;
        
        
    });
    
    

    


    

})();

// Au clic sur le bouton, affiche dans les balises prévues les dix éléments d'un tableau de 10 nombres (entre 1 et 100), ainsi que les statistiques suivantes : le plus petit nombre, le plus grand, la somme des nombres et la moyenne de ceux-ci.
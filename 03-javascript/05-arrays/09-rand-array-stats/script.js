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
    let = moyenneNumber = 0;
    

    function randomizeArray() {
        numberArray = Array.from(new Array(10).keys(), () => Math.floor(Math.random() * (100 - 1) + 1))
        console.log(numberArray);
        return numberArray;
    }

    function bigestNumber(arrayOfNumbers){
        let max=0;
        for (i=0; i<arrayOfNumbers.length; i++) {
            if(arrayOfNumbers[i]>max) max=arrayOfNumbers[i];
        }
        return console.log(max);
    }

    function lowestNumber(arrayOfNumbers){
        let min=100;
        for (i=0; i<arrayOfNumbers.length; i++) {
            if(arrayOfNumbers[i]<min) min=arrayOfNumbers[i];
        }
        return console.log(min);
    }

    function sommeOfNumbers(arrayOfNumbers) {
        for (i=0; i<arrayOfNumbers.length; i++) {
            addition += arrayOfNumbers[i];
        }
        return console.log(addition);
    }

    function middleOfNumbers(arrayOfNumbers) {
        for (i=0; i<arrayOfNumbers.length; i++) {
            moyenneNumber += arrayOfNumbers[i];
        }
        return console.log(moyenneNumber / i);
    }



    document.getElementById("run").addEventListener("click", () => {
        randomizeArray();
        bigestNumber(numberArray);
        lowestNumber(numberArray);
        sommeOfNumbers(numberArray);
        middleOfNumbers(numberArray);

        document.getElementById("n-1").innerHTML = numberArray[0];
        
        
    });
    
    

    


    

})();

// Au clic sur le bouton, affiche dans les balises prévues les dix éléments d'un tableau de 10 nombres (entre 1 et 100), ainsi que les statistiques suivantes : le plus petit nombre, le plus grand, la somme des nombres et la moyenne de ceux-ci.
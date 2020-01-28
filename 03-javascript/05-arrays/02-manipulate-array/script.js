/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



// Au clic sur le bouton, opère les transformations suivantes sur le tableau fruits : enlève le premier et le dernier élement, ajoute un élément "banane" au début du tableau et ajoute un élément "kiwi" à la fin du tableau.

// Pour terminer, affiche le tableau résultant dans la console.


(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    

    document.getElementById("run").addEventListener("click", () => {
        fruits.pop();
        fruits.shift();
        fruits.unshift('banane');
        fruits.push('kiwi');

        console.log(fruits);
    });
})();

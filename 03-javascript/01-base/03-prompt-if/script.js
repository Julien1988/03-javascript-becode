/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: prompt & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let wannaCoockies = prompt("Tu veux un gâteau ?");
    if (wannaCoockies.toLocaleLowerCase() === "oui" || wannaCoockies.toLocaleLowerCase() === "yes") {
        alert("Bravo !");
    } else if (wannaCoockies.toLocaleLowerCase() === "non" || wannaCoockies.toLocaleLowerCase() === "no") {
        alert("Du gâteau ça ne se refuse pas !");
    } else {
        alert("Il y a un bug dans la matrice");
    }

})();

// let wannaCoockies = prompt('Tu veux un gateau ?');
// if (wannaCoockies.toLowerCase() === "oui" || wannaCoockies.toLowerCase() === "yes") {
//     alert('Bravo !');
// } else {
//     alert('Du gâteau ça ne se refuse pas !');
// }
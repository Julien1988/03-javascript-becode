/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let getElement = document.getElementById("target");
    console.log(getElement);
    // getElement.innerHTML = "<table><tr><td>1er rangée</td></tr><tr><td>2eme rangée</td></tr><tr><td>3eme rangée</td></tr><tr><td>4eme rangée</td></tr><tr><td>5eme rangée</td></tr><tr><td>6eme rangée</td></tr><tr><td>7eme rangée</td></tr><tr><td>8eme rangée</td></tr><tr><td>9eme rangée</td></tr><tr><td>10eme rangée</td></tr></table>";

    let table = getElement.appendChild(document.createElement("table"));
    for (let i = 0; i < 10; i++) {
        let tr = table.appendChild(document.createElement("tr"));
        tr.appendChild(document.createElement("td"));
    }
})();




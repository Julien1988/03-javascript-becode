/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let getElement = document.getElementById("target");
    let table = getElement.appendChild(document.createElement("table"));
    for (let i = 1; i < 11; i++) {
        let tr = table.appendChild(document.createElement("tr"));
        for (let i2 = 1; i2 < 11; i2++) {
        let td = tr.appendChild(document.createElement("td"));
            td.innerHTML = i * i2;
        }
    }
})();

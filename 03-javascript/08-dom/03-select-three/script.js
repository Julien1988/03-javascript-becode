/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var array = Array.from(document.getElementsByClassName("target"));
    //console.log(array);
    array.forEach((item, index) => {
        
        document.getElementsByClassName("target")[index].innerHTML = "Owned";
    });
})();

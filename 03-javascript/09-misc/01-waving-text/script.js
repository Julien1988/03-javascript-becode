/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let textContent = document.getElementById("target").firstChild.data;
    let textReplace = document.getElementById("target");
    let sensitive = 0;
    let increment = 0;
    //console.log ([...textContent]);
    function fontSize(element) {
        if (senstive === 0) {
            increment++;
        } else {
            increment--;
        }
        return element%10;

    }
    textReplace.innerHTML = [...textContent].map((letter, i) => {
        return letter.fontsize(fontSize(i));
     
    }).join("");
    
    
 
})();

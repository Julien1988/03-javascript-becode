/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    function getPassword() {
        let reg = /([0-9].*[0-9])+/g;
        if (reg.test(document.getElementById("pass-one").value)) {
            return document.getElementById("pass-one").value;

        } else {
            return 0;
        }
    }

    function keyCounter(count) {
        
        if (count.length >= 8) {
            return document.getElementById("validity").innerHTML = "OK";
        } else {
            return document.getElementById("validity").innerHTML = "Pas ok";
        }
    }
    
    document.getElementById("pass-one").addEventListener("input", () => {
        keyCounter(getPassword());
        
    });
})();



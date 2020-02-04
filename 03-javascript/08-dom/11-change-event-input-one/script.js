/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    function getPassword() {
        let index = document.getElementById("pass-one").value.length;
        document.getElementById("counter").innerHTML = index+1 + " /10";
        
        return document.getElementById("pass-one").value;
    }

    function lettersCount(count) {
        if (count.length >= 10) {
            document.getElementById("pass-one").disabled = true;
            //console.log(false);
        } else {
            document.getElementById("pass-one").disabled = false;
        }
    }

    document.getElementById("pass-one").addEventListener("keydown", () => {
        lettersCount(getPassword());
        //console.log(getPassword());
        
    });
})();

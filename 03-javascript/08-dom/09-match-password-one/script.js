/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    function getPasswordOn() {
        return document.getElementById("pass-one").value;
     
    }

    function getPasswordTwo() {
        return document.getElementById("pass-two").value;
        
    }

    function testPassword(passOne, passTwo) {
        if ( passOne === passTwo) {
            document.getElementById("pass-one").style.border ="1px solid #00FF00";
            document.getElementById("pass-two").style.border ="1px solid #00FF00";
            console.log(true);
        } else {
            document.getElementById("pass-one").style.border ="1px solid #ff0000";
            document.getElementById("pass-two").style.border ="1px solid #ff0000";
            console.log(false);
        }
    }

    document.getElementById("run").addEventListener("click", () => {
            testPassword(getPasswordOn(), getPasswordTwo());
    });

    
})();

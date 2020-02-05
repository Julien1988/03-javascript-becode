/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let theContent = document.getElementById("target");
    console.log(theContent);
    let newArray = [...theContent.innerHTML];
    theContent.innerHTML = " ";
    console.log(newArray);
    let count = 0;
    function launcher () {
        theContent.innerHTML += newArray[count];
            count++;
        if ( count < newArray.length ) {
            setTimeout(launcher, 100);
        }
    }
    launcher();
   

})();

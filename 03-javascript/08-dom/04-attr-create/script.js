/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let getElement = document.getElementById("source")
    let getSource = getElement.getAttribute("data-image");
    let creatImg = document.createElement("img");
    creatImg.id = "newTarget";
    document.getElementById("target").appendChild(creatImg);
    document.getElementById("newTarget").setAttribute("src", getSource);
    document.getElementsByClassName("material")[0].removeChild(getElement);
    

})();

/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let getClass = document.getElementsByClassName("material")[0];
    //console.log(getClass);
    let getImg = getClass.getElementsByTagName('img')[0];
    //console.log(getImg);
    let getSource = getImg.getAttribute("data-hover");
    //console.log(getSource);
    getImg.addEventListener("mouseenter",() => {

        getImg.setAttribute("src", getSource);
    });
    // getImg.addEventListener("mouseleave",() => {

    //     getImg.setAttribute("src", "kiss.svg");
    // });
    
    
})();

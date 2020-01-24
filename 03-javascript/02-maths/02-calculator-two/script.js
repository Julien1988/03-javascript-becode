/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        //perform the operation
        
        let numberOn = document.getElementById("op-one").value;
        let numberTwo = document.getElementById("op-two").value;

        switch (operation) {
            case "addition":
                alert( parseInt(numberOn) + parseInt(numberTwo) );
                break;
            case "substraction":
                alert( parseInt(numberOn) - parseInt(numberTwo) );
                break;
            case "multiplication":
                alert( parseInt(numberOn) * parseInt(numberTwo) );
                break;
            case "division":
                alert( parseInt(numberOn) / parseInt(numberTwo) );
                break;
            default:
                alert("Il y a un problème !");
        }

    };


    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();

console.log(document.querySelectorAll("button.operator#multiplication"));



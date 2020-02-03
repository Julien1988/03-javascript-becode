/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class Person {
        constructor(firstName, lastName,) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        sayHello() {
            return "Hello " + this.firstName + " " + this.lastName + " !"
        }
    }

    let myPerson = new Person(
        "Jean",
        "Numberokordi "
    );

    document.getElementById("run").addEventListener("click", () => {
        console.log(myPerson.sayHello());

    });

})();



// Crée une classe Person. Elle aura deux propriétés, firstname et lastname, ainsi qu'une méthode sayHello, qui retournera "Hello, [firstname] [lastname]!".

// Au clic sur le bouton, crée une instance de la classe Person et affiche dans la console la valeur de retour de la méthode sayHello.


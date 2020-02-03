/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class Person {
        constructor(firstName, lastName){
            this.firstName = firstName,
            this.lastName = lastName
            
        };
        get name() {
            return this.firstName + " " + this.lastName;
        }

        set name(name) {
            this.firstName = name.split(" ")[0];
            this.lastName = name.split(" ")[1];
        }
    }

    document.getElementById("run").addEventListener("click", () => {

        let p = new Person("julien", "Broens" );
        console.log(p.name)
        p.name = "Jean Baprtise";
        console.log(p.name)
    } );
})();



// Crée une classe Person. Elle aura deux propriétés, firstname et lastname, ainsi qu'un getter name, qui retournera "[firstname] [lastname]", et un setter name, qui divisera le nom complet sur base d'un espace : le premier élément sera le firstname, le second le lastname.

// Au clic sur le bouton, crée une instance de la classe Person et affiche dans la console la valeur de name, puis affecte-lui une nouvelle valeur et affiche dans la console l'état de l'instance en fin de process.


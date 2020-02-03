/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    let myCat = new Animal(
        this.name = "BB chat"
    );

    let myDog = new Animal (
        this.name = "Chewie"
    );

    
    console.log(myCat.sayHello());


})();



// Dans le script, il y a la définition de la classe Animal.
// À partir de cette classe, crée deux classes, Cat et Dog. Elles auront chacune deux propriétés, name et greeting (la seconde propriété doit être statique).

// Au clic sur le bouton, crée une instance de la classe Dog et une instance de la classe Cat et affiche dans la console la valeur de retour de la méthode sayHello.


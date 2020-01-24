/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let userName = prompt('Quel est votre nom ?');
    let userAge = prompt('Quel âge avez-vous ?');
    let userCity = prompt('Dans quel ville vivez-vous ?');

    let userInfo = confirm('Votre nom: ' + userName +  ' Votre âge : ' + userAge + ' ans' + ' Votre ville : ' + userCity);
    if (userInfo === false) {
        let userName = prompt('Quel est votre nom ?');
        let userAge = prompt('Quel âge avez-vous ?');
        let userCity = prompt('Dans quel ville vivez-vous ?');
    } else {
        alert('Merci !');
    }
})();

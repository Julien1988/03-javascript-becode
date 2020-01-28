/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        var day = document.getElementById("dob-day").value;
        var month = document.getElementById("dob-month").value;
        var year = document.getElementById("dob-year").value;

        var d = new Date();
        var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        var fullDate = date+' '+hours;
        

        var userDay = d.getDate() - day;
        var userMonth = d.getMonth()+1 - month;
        var userAge = d.getFullYear() - year;

        if (userMonth <= 0 && userDay <= 0 ) {
            userAge += 1;
            alert("Vous avez exactement" + userAge + " ans");
        } else
            
            alert("Vous avez exactement " + userAge + " ans");
        
    
    })
})();

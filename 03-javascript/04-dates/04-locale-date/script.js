/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    var d = new Date();
    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var fullDate = date+' '+hours;
    //console.log(fullDate);
    
    
    function getDate()
{
    var day = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");

    var month = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");

    var year = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");

    var date = new Date();

    var minutesMessage = "minutes";
    if (date.getMinutes() < 2 ) {
        minutesMessage = "minute";
    } else {
        minutesMessage = "minutes";
    }

    var hoursMessage = "hours";
    if (date.getHours() < 2 ) {
        hoursMessage = "heure";
    } else {
        hoursMessage = "heures";
    }



    var message = day[date.getDay()] + " ";

    message += date.getDate() + " ";
    message += month[date.getMonth()] + " ";
    message += date.getFullYear() + ", ";
    message += date.getHours() + " " + hoursMessage + " ";
    message += date.getMinutes() + " " + minutesMessage;

    

    console.log(minutesMessage);


    return message;

    
    
}

document.getElementById("target").innerHTML = getDate();

})();

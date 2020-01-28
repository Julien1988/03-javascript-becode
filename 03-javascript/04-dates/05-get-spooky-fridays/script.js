/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
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

  
    var message = day[date.getDay()] + " ";

    message += date.getDate() + " ";
    message += month[date.getMonth()] + " ";
    message += date.getFullYear() + ", ";
    message += date.getHours() + " heures ";
    message += date.getMinutes() + " minutes ";

    console.log(message);


    return message;

}


console.log(getDate());


})();

// function getDate()
// {
//     var day = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");

//     var month = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");

//     var year = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");

//     var date = new Date();

  
//     var message = day[date.getDay()] + " ";

//     message += date.getDate() + " ";
//     message += month[date.getMonth()] + " ";
//     message += date.getFullYear() + ", ";
//     message += date.getHours() + " heures ";
//     message += date.getMinutes() + " minutes ";

//     console.log(message);


//     return message;

// }

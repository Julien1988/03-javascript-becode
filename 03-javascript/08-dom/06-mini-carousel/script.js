/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "https://www.wanimo.com/veterinaire/wp-content/uploads/2017/04/images_articles_chat_chat-pubert@2x.jpg",
        "https://static.wamiz.fr/images/articles/facebook/article/eduquer-un-chat-fb-59ad52663bd71.jpg",
        "https://static.mmzstatic.com/wp-content/uploads/2018/05/manquer-a-son-chat.jpg",
        "https://static.mmzstatic.com/wp-content/uploads/2018/05/manquer-a-son-chat.jpg",
        "http://www.leparisien.fr/resizer/74wMQIeXKLDUKuKvSzJQME_0ULg=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/KNVYKZBDTTOXNO37FEVDTD5DJU.jpg",
    ];

    // your code here
    let index = -1;
    let getClass = document.getElementsByClassName("material")[0]
    let getImg = getClass.getElementsByTagName("img")[0];

    document.getElementById("next").addEventListener("click",() => {
        
        index ++;
        if (index == gallery.length) {
            index = -1;
        } else {

            let setImgSource = getImg.setAttribute("src", gallery[index]);
        }    
        

    });
})();

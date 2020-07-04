import './images/banner.svg'

import './images/feature1.png'
import './images/feature2.png'
import './images/feature3.png'
import './images/feature4.png'
import './images/admin.png'
import './images/24-hours-access.png'
import './images/banner.png'
import './images/banner.svg'
import './images/chat.svg'
import './images/data-logo.png'
import './images/data-logo.svg'
import './images/help.png'
import './images/print-out.png'
import './images/request-arrow.png'
import './images/review-1.svg'
import './images/review-2.svg'
import './images/search-data.png'
import './images/security-control.png'

import './css/warehouse.css'
import './css/warehouse-header.css'
import './css/warehouse-description.css'
import './css/warehouse-help.css'
import './css/warehouse-features.css'
import './css/warehouse-testimonials.css'
import './css/warehouse-signup.css'
import './css/warehouse-footer.css'

import '@fortawesome/fontawesome-free/js/all'
import "@fortawesome/fontawesome-free/css/all.min.css"


function createMessageBlock(direction, text) {
    var message = document.createElement("div");
    message.className = "message " + direction;

    var avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = 'images/admin.png';

    var data = document.createElement("div");
    data.className = "data";

    var body = document.createElement("div");
    body.className = "body";
    body.append(text);
    data.appendChild(body);
    
    message.appendChild(avatar);
    message.appendChild(data);

    return message;
}

document.getElementById('chat').onclick = function() {
    if (document.getElementById("openchat").hidden) {
        document.getElementById("openchat").hidden = false;
    }
    else document.getElementById("openchat").hidden = true;
    // document.getElementById("chatcontent").text += "press";
}

document.getElementById('chatbutton').onclick = function() {
    var text = document.getElementById('chatwrite').value;
    document.getElementById('chatcontent').appendChild(createMessageBlock("left", text));

    setTimeout(function() {
        var txt = "Ваш звонок очень важен для нас!" +
        " Ближайший оператор освободится через inf секунд.";
        document.getElementById('chatcontent').appendChild(createMessageBlock("right", txt));
    }, 1000);
}
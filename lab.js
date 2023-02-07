let patient  = document.getElementById ('patient');
let Doctor  = document.getElementById ('Doctor');
let phone  = document.getElementById ('phone');
let price = document.getElementById('price');
let discount = document.getElementById ('discount');
let total = document.getElementById ('total');
let submit = document.getElementById ('submit');

function getTotal()
{
if( price.value != ''){
    let result =(+price.value - +discount.value);
    total.innerHTML=result;
    total.style.background='#040';
}

}
let data = [ ];

submit.onclick = function() {
let new = 

}

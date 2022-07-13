let container = document.querySelector('.container');
container.style.display = 'none';

let isim = prompt('Lütfen isminizi giriniz');

if(isim){
    container.style.display = 'block';
    document.querySelector('#myName').textContent = isim;
}


let d = new Date();

var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
console.log();


let tarih = document.querySelector('#myClock');


function tarihSaat(){
    let d = new Date();
    tarih.innerHTML = d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'  '+ gunler[d.getDay()] ;
}

setInterval(tarihSaat, 1);
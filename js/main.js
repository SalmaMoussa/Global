// The End of year Date to countdown to
//1000 millsecond = 1 seconde
 
let countDownDate = new Date("Dec 21, 2021 , 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() =>{
//Get Date now
let dateNow = new Date().getTime();

//find differance between date now and countdowen date
let dataDiff = countDownDate - dateNow;

//Get Time Unit
let days =Math.floor (dataDiff/(1000 * 60 * 60 * 24));
let hours =Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 )); 
let mintes =Math.floor((dataDiff % (1000 * 60 * 60)) / (1000 * 60));
let seconds =Math.floor((dataDiff % (1000 * 60))/1000);





document.querySelector(".days").innerHTML = days; 
document.querySelector(".hours").innerHTML = hours; 
document.querySelector(".mintes").innerHTML = mintes; 
document.querySelector(".seconds").innerHTML = seconds; 

},1000);
let lightOn = document.querySelector("#lighton");
let body = document.querySelector("body");
let bulbOnOff = document.querySelector("#bulbOnOff");
let bulb = document.querySelector("#bulb");
let lightCtn = document.querySelector(".light-content");
let navBarBg = document.querySelector(".navbar")
function turnOn() {
  bulb.src = "images/bulb-trun-on-2.webp";

  if (lightOn <= turnOn) {
    body.style = "background-color: #fff71b47";
    lightCtn.style = "visibility:visible";
  } else {
    body.style = "background-color: #22232396";

  }
}

lighton.addEventListener("click", turnOn);

let lightOff = document.querySelector("#lightoff");

function turnOff() {
  bulb.src = "images/bulb-trun-off webp.webp";

  if (lightOff <= turnOff) {
    body.style = "background-color: #22232396";
    lightCtn.style = "visibility:hidden";
  }
}
lightOff.addEventListener("click", turnOff);

// Fan Section here
let fanOn = document.querySelector("#fanOn");
let fanOff = document.querySelector("#fanOff");
let fanOnOff = document.querySelector("#fanOnOff");
let fanImg = document.querySelector("#fanImg");

function fanonOff() {
  fanImg.src = "images/turn-on-fan.gif";
}

fanOn.addEventListener("click", fanonOff);

function FanOnOff() {
  fanImg.src = "images/turn-off-fan-2.png";
}

fanOff.addEventListener("click", FanOnOff);

// Fan Section here
let tvOn = document.querySelector("#tvOn");
let tvOff = document.querySelector("#tvOff");
let tvOnOff = document.querySelector("#tvOnOff");
let tvImg = document.querySelector("#tvImg");

function tvonOff() {
  tvImg.src = "images/tv-on-2.gif";
}

tvOn.addEventListener("click", tvonOff);

function tvOffOn() {
  tvImg.src = "images/tv-off-2.png";
}

tvOff.addEventListener("click", tvOffOn);

//Product Counter
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let counterInput = document.querySelector(".counter input");

function incrementBtnShow() {
  let value = Number(counterInput.value);
  counterInput.value = value + 1;
}

incrementBtn.addEventListener("click", incrementBtnShow);

function deccrementBtnShow() {
  let value = Number(counterInput.value);
  if (value > 1) {
    counterInput.value = value - 1;
  }
}

decrementBtn.addEventListener("click", deccrementBtnShow);

function converter() {
  let posstiveNumber = Math.abs(counterInput.value);
  counterInput.value = posstiveNumber;
}

counterInput.addEventListener("keyup", converter);

//PRODUCTS TWO
let incrementBtn1 = document.querySelector(".increment1");
let decrementBtn1 = document.querySelector(".decrement1");
let counterInput1 = document.querySelector(".counterInput1");

function increment1(){
  let value = Number(counterInput1.value)
  counterInput1.value = value + 1;
}

incrementBtn1.addEventListener('click',increment1)

function decrement1(){
  let value = Number(counterInput1.value)
  if(value > 1){
    counterInput1.value = value - 1;
  }
}

decrementBtn1.addEventListener('click',decrement1)

function converter1(){
let positiveNumber = Math.abs(counterInput1.value)
counterInput1.value = positiveNumber;
}

counterInput1.addEventListener('keyup',converter1);


//PRODUCTS THREE
let incrementBtn2 = document.querySelector(".increment2");
let decrementBtn2 = document.querySelector(".decrement2");
let counterInput2 = document.querySelector(".counterInput2");

function increment2(){
let value = Number(counterInput2.value)
counterInput2.value = value + 1;
}

incrementBtn2.addEventListener('click',increment2);

function decrement2(){
  let value = Number(counterInput2.value)
  if(value > 1){
    counterInput2.value = value - 1;
  }
}
decrementBtn2.addEventListener('click',decrement2);

function coverter2(){
  let posstiveNumber = Math.abs(counterInput2.value)
  counterInput2.value = posstiveNumber;
}

counterInput2.addEventListener('keyup',coverter2);



//PRODUCTS FOUR
let incrementBtn3 = document.querySelector(".increment3");
let decrementBtn3 = document.querySelector(".decrement3");
let counterInput3 = document.querySelector(".counterInput3");


function increment3(){
let value = Number(counterInput3.value)
counterInput3.value = value + 1;
}

incrementBtn3.addEventListener('click',increment3)

function decrement3(){
  let value = Number(counterInput3.value)
 if(value > 1){
  counterInput3.value = value - 1;
 }
  }
  
  decrementBtn3.addEventListener('click',decrement3);


function converter3(){
  let positiveNumber = Math.abs(counterInput3.value)
  counterInput3.value = positiveNumber;
}

  counterInput3.addEventListener('keyup',converter3)


//LOGIN PAGE
let login = document.querySelector('.login');
let loginPage = document.querySelector('.loginpage');

function loginBtn(){
  if(login <= loginBtn){
    loginPage.style = "visibility: visible;"
  }
}

login.addEventListener('click',loginBtn)


let passwordBtn = document.querySelector(".eye-btn")
let passwordInput = document.querySelector("#password")

function passwordShow(){
if(passwordInput.type == "password"){
  passwordInput.type = "text";
  passwordBtn.innerHTML = '<i class="bi bi-eye"></i>'
}else{
  passwordInput.type = "password";
  passwordBtn.innerHTML = '<i class="bi bi-eye-slash"></i>'
}
}


passwordBtn.addEventListener('click',passwordShow)


let submitBtn = document.querySelector(".submitBtn")

function submit(){
  passwordInput.value.length >= 8 ? alert("Login Successful")
  : (passwordInput.value.length == 0 ? alert("Password is Required") : alert("Password must be at least 8 characters")); 
}

submitBtn.addEventListener('click',submit)
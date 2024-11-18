let lightOn = document.querySelector('#lighton');
let body = document.querySelector('body')
let bulbOnOff = document.querySelector('#bulbOnOff')
let bulb = document.querySelector('#bulb');
let lightCtn = document.querySelector('.light-content')

function turnOn(){
bulb.src = "images/bulb-trun-on-2.webp";

if(lightOn <= turnOn){
    body.style="background-color: #fff71b47";
    lightCtn.style="visibility:visible"
}
else{
    body.style="background-color: #22232396";
   
}

}

lighton.addEventListener("click",turnOn);


let lightOff = document.querySelector('#lightoff')

function turnOff(){
    bulb.src = "images/bulb-trun-off webp.webp";

    if(lightOff <= turnOff){
        body.style="background-color: #22232396";
        lightCtn.style="visibility:hidden"
    }
}
lightOff.addEventListener("click",turnOff)


// Fan Section here
let fanOn = document.querySelector('#fanOn');
let fanOff = document.querySelector('#fanOff')
let fanOnOff = document.querySelector('#fanOnOff')
let fanImg = document.querySelector('#fanImg');

function fanonOff(){
    fanImg.src = "images/turn-on-fan.gif";
    }
    
    fanOn.addEventListener("click",fanonOff);

    function FanOnOff(){
        fanImg.src = "images/turn-off-fan-2.png";
        }
        
        fanOff.addEventListener("click",FanOnOff);


// Fan Section here
let tvOn = document.querySelector('#tvOn');
let tvOff = document.querySelector('#tvOff')
let tvOnOff = document.querySelector('#tvOnOff')
let tvImg = document.querySelector('#tvImg')

function tvonOff(){
    tvImg.src = "images/tv-on-2.gif";
    }
    
    tvOn.addEventListener("click",tvonOff);

    function tvOffOn(){
        tvImg.src = "images/tv-off-2.png";
        }
        
        tvOff.addEventListener("click",tvOffOn);


     


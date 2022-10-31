/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const daysValue = document.querySelector('#days');
const hoursValue = document.querySelector('#hours');
const minutesValue = document.querySelector('#minutes');
const secondsValue = document.querySelector('#seconds');
var allSeconds = 0;

//const countdownDateTime = new Date(0,0,daysValue,hoursValue,minutesValue,secondsValue).getTime();

function update(){
    //Days
    document.querySelector('#increaseDays').addEventListener('click', () => {
        daysValue.textContent = parseInt(daysValue.textContent) + 1; 
    });
    document.querySelector('#decreaseDays').addEventListener('click', () => {
        if (parseInt(daysValue.textContent) > 0) {
            daysValue.textContent = parseInt(daysValue.textContent) - 1;       
        }
    });
    //Hours
    document.querySelector('#increaseHours').addEventListener('click', () => {
        hoursValue.textContent = parseInt(hoursValue.textContent) + 1;       
    });
    document.querySelector('#decreaseHours').addEventListener('click', () => {
        if (parseInt(hoursValue.textContent) > 0) {
            hoursValue.textContent = parseInt(hoursValue.textContent) - 1;       
        }   
    });
    //Minutes
    document.querySelector('#increaseMinutes').addEventListener('click', () => {
        minutesValue.textContent = parseInt(minutesValue.textContent) + 1;       
    });
    document.querySelector('#decreaseMinutes').addEventListener('click', () => {
        if (parseInt(minutesValue.textContent) > 0) {
            minutesValue.textContent = parseInt(minutesValue.textContent) - 1;       
        }   
    });
    //Seconds
    document.querySelector('#increaseSeconds').addEventListener('click', () => {
        secondsValue.textContent = parseInt(secondsValue.textContent) + 1;       
    });
    document.querySelector('#decreaseSeconds').addEventListener('click', () => {
        if (parseInt(secondsValue.textContent) > 0) {
            secondsValue.textContent = parseInt(secondsValue.textContent) - 1;       
        }   
    });
    
};

update();

function countdown(){

    allSeconds = 
        (parseInt(daysValue.textContent) * 24 * 60 * 60) +
        (parseInt(hoursValue.textContent) * 60 * 60) +
        (parseInt(minutesValue.textContent) * 60) +
        (parseInt(secondsValue.textContent))
    ;

    allSeconds--;

    console.log(daysValue.textContent, hoursValue.textContent, minutesValue.textContent, secondsValue.textContent);
    console.log(allSeconds);


    daysValue.textContent = Math.floor(allSeconds / (3600*24));
    hoursValue.textContent = Math.floor(allSeconds % (3600*24) / 3600);
    minutesValue.textContent = Math.floor(allSeconds % 3600 / 60);
    secondsValue.textContent = Math.floor(allSeconds % 60);

    if (parseInt(daysValue.textContent) == 0) {
        document.getElementById("days").style.color = 'grey';
    }else{
        document.getElementById("days").style.color = 'orange';
    }
    if (parseInt(hoursValue.textContent) == 0 && parseInt(daysValue.textContent) == 0) {
        document.getElementById("hours").style.color = 'grey';
    }else{
        document.getElementById("hours").style.color = 'orange';
    }
    if (parseInt(minutesValue.textContent) == 0 && parseInt(hoursValue.textContent) == 0) {
        document.getElementById("minutes").style.color = 'grey';
    }else{
        document.getElementById("minutes").style.color = 'orange';
    }
    if (parseInt(secondsValue.textContent) == 0 && allSeconds == 0) {
        document.getElementById("seconds").style.color = 'grey';
    }else{
        document.getElementById("seconds").style.color = 'orange';
    }

}

document.querySelector('#play').addEventListener('click', () => {
    setInterval(() => {
        countdown();  
    }, 1000);
});

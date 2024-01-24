const btn = document.getElementById("start");
let startingTime;
function startTimer(){
    if(!startingTime){
        startingTime = new Date().getTime();
        console.log(startingTime,"d")
    }
    else{
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - startingTime;
         let seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
         let minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
         let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
         console.log(seconds,minutes,hours);
    }

}
btn.addEventListener("click",() =>{
    setInterval(startTimer,1)
});

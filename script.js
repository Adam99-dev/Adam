console.log("Welcome to Spotify")

let songIndex = 0;
let newAudio = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let songs = [
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"},
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"},
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"},
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"},
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"},
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"},
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"},
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"},
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"},
    {songName:"Tenzoo Bloody Brazil", filePath:"1.mp3", coverPath:"1.mp3"}
]

masterPlay.addEventListener("click",()=>{
    if(newAudio.paused || newAudio.currentTime==0){
        newAudio.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
    }else{
        newAudio.pause();
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
    }
})
newAudio.addEventListener("timeupdate",()=>{
    const time = (newAudio.currentTime/newAudio.duration)*100
    progess = parseInt(time)
    
    myProgressBar.value = progess;
}) 

myProgressBar.addEventListener("change",()=>{
    const dur = (myProgressBar.value * newAudio.duration)/100
    newAudio.currentTime = dur;
})
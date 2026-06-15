const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");

document.body.addEventListener("click",()=>{
music.play().catch(()=>{});
},{once:true});

btn.addEventListener("click",()=>{

if(music.paused){

music.play();
btn.innerHTML="🔊 Music ON";

}else{

music.pause();
btn.innerHTML="🔇 Music OFF";

}

});

const weddingDate=new Date(
"June 25, 2026 08:00:00"
).getTime();

setInterval(()=>{

const now=new Date().getTime();

const distance=weddingDate-now;

document.getElementById("days").innerHTML=
Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML=
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML=
Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML=
Math.floor((distance%(1000*60))/1000);

},1000);
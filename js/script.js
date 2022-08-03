var menu=document.querySelector('#menu');
var body=document.querySelector('body');
var drawer = document.querySelector('#drawer');
menu.addEventListener('click',function(e){
    drawer.classList.toggle('open');
    e.stopPropagation();
});
body.addEventListener('click',function(){
    drawer.classList.remove('open');

});
var player=document.querySelector('#player')
function changeImage(){
    document.getElementById('playMusic').src="images/sound.png" 
    document.getElementById('playMusic2').src="images/sound.png";
    document.getElementById('playMusic3').src="images/sound.png";
    document.getElementById('playMusic4').src="images/sound.png";
    document.getElementById('playMusic5').src="images/sound.png";
    document.getElementById('playMusic6').src="images/sound.png";
    document.getElementById('playMusic7').src="images/sound.png";
}

playMusic.addEventListener('click',function(){
    player.play();
    document.getElementById('playMusic').src="images/soundactive.png"
    setTimeout(changeImage,5000);
});
var player2=document.querySelector('#player2')
playMusic2.addEventListener('click',function(){
    player2.play();
    document.getElementById('playMusic2').src="images/soundactive.png"; 
    setTimeout(changeImage,5000);
});
var player3=document.querySelector('#player3')
playMusic3.addEventListener('click',function(){
    player3.play();
    document.getElementById('playMusic3').src="images/soundactive.png";
    setTimeout(changeImage,5000);
});
var player4=document.querySelector('#player4')
playMusic4.addEventListener('click',function(){
    player4.play();
    document.getElementById('playMusic4').src="images/soundactive.png";
    setTimeout(changeImage,5000);
});
var player5=document.querySelector('#player5')
playMusic5.addEventListener('click',function(){
    player5.play();
    document.getElementById('playMusic5').src="images/soundactive.png";
    setTimeout(changeImage,5000);
});
var player6=document.querySelector('#player6')
playMusic6.addEventListener('click',function(){
    player6.play();
    document.getElementById('playMusic6').src="images/soundactive.png";
    setTimeout(changeImage,5000);
});
var player7=document.querySelector('#player7')
playMusic7.addEventListener('click',function(){
    player7.play();
    document.getElementById('playMusic7').src="images/soundactive.png";
    setTimeout(changeImage,5000);
});
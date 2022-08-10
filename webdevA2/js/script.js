
// Nav transition for tablet and phone
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


// For transition of content, click image change to text box transition
const left=document.querySelectorAll('.left');
const left2=document.querySelectorAll('.left2');
    for (let i=0; i < left.length; i++) {
        left2[i].addEventListener('click',function(e){
            left[i].classList.toggle('active');
            e.stopPropagation();
            left2[i].classList.toggle('transparent');
        });
};

const right=document.querySelectorAll('.right');
const right2=document.querySelectorAll('.right2');
for (let i=0; i < right.length; i++) {
    right2[i].addEventListener('click',function(e){
        right[i].classList.toggle('active2');
        e.stopPropagation();
        right2[i].classList.toggle('transparent');
    });
};




// For changing between sound playing and not playing 

var player=document.querySelector('#player');
var player=document.querySelector('#player2');
var player=document.querySelector('#player3');
var player=document.querySelector('#player4');
var player=document.querySelector('#player5');
var player=document.querySelector('#player6');
var player=document.querySelector('#player7');
function changeImage(){
    document.getElementById('playMusic').src="images/sound.png" 
    document.getElementById('playMusic2').src="images/sound.png";
    document.getElementById('playMusic3').src="images/sound.png";
    document.getElementById('playMusic4').src="images/sound.png";
    document.getElementById('playMusic5').src="images/sound.png";
    document.getElementById('playMusic6').src="images/sound.png";
    document.getElementById('playMusic7').src="images/sound.png";
}
if (player){ //prevent null error
    playMusic.addEventListener('click',function(){
        player.play();
        document.getElementById('playMusic').src="images/soundactive.png"
        setTimeout(changeImage,4500);
    });
};
if (player2){ //prevent null error
    var player2=document.querySelector('#player2')
    playMusic2.addEventListener('click',function(){
        player2.play();
        document.getElementById('playMusic2').src="images/soundactive.png"; 
        setTimeout(changeImage,4000);
    });
};
if (player3){ //prevent null error
    var player3=document.querySelector('#player3')
    playMusic3.addEventListener('click',function(){
        player3.play();
        document.getElementById('playMusic3').src="images/soundactive.png";
        setTimeout(changeImage,4200);
    });
};
if (player4){ //prevent null error
    var player4=document.querySelector('#player4')
    playMusic4.addEventListener('click',function(){
        player4.play();
        document.getElementById('playMusic4').src="images/soundactive.png";
        setTimeout(changeImage,4200);
    });
};
if (player5){ //prevent null error
    var player5=document.querySelector('#player5')
    playMusic5.addEventListener('click',function(){
        player5.play();
        document.getElementById('playMusic5').src="images/soundactive.png";
        setTimeout(changeImage,4000);
    });
};
if (player6){ //prevent null error
    var player6=document.querySelector('#player6')
    playMusic6.addEventListener('click',function(){
        player6.play();
        document.getElementById('playMusic6').src="images/soundactive.png";
        setTimeout(changeImage,4000);
    });
};
if (player7){ //prevent null error
    var player7=document.querySelector('#player7')
    playMusic7.addEventListener('click',function(){
        player7.play();
        document.getElementById('playMusic7').src="images/soundactive.png";
        setTimeout(changeImage,4000);
    });
};

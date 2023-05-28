document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
       let navbar_height = document.querySelector('.navbar').offsetHeight;
        if (window.scrollY >navbar_height ) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        }
        //document.getElementById("navheight").innerHTML="nav <br> height="+navbar_height;
    });
  });
let anima=document.querySelector("#animation");
let Myskill=["Web developer","Graphic Design","Tutor","Content Provider"];
let index=0, isAdding=true,skillIndex=0;

function  Animation() {
  if (anima) {
    setTimeout(function(){
        if (Myskill[skillIndex].slice(0,index) !== null)
         {
          
          anima.innerHTML=Myskill[skillIndex].slice(0,index) 
        }
        else{
          anima.innerHTML='';
        }
       if (isAdding) {
          if (index>Myskill[skillIndex].length) {
              isAdding=false;
              setTimeout(function(){
                 Animation()
              }, 20000);
              return;
          } else {
              index++;
          }
       } else {
          if (index===0) {
              isAdding=true;
             skillIndex=(skillIndex+1)% Myskill.length;
          } else {
              index--;
          }
       }
       Animation();
    },isAdding?100 : 30)
  }else{
    anima=document.querySelector("#animation");
  }
  
}

Animation();
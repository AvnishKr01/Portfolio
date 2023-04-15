// for scroll //////////////////////////


window.onscroll = () => {
   let header = document.querySelector('.header');

   header.classList.toggle(`sticky`, window.scrollY > 100);

   menu.classList.remove('bx-x');
   nav.classList.remove('active');

}

// dark-mode //////////


let dark = document.getElementById('darkmode-icon');

dark.onclick = () => {
   dark.classList.toggle('bx-sun');

   document.body.classList.toggle('dark-mode');
}

let menu = document.getElementById('menu-icon');

let nav = document.querySelector('.navbar');

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   nav.classList.toggle('active');
} 

var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

btn.addEventListener('click', () => {
   var dots = document.getElementById("dots");
   var Text = document.getElementById("more");
  
 
   if (dots.style.display === "none") {
     dots.style.display = "inline";
     btn.innerHTML = "Read more";
     Text.style.display = "none";
   } else {
     dots.style.display = "none";
     btn.innerHTML = "Read less";
     Text.style.display = "inline";
   }
})

btn1.addEventListener('click', () => {
   var dots1 = document.getElementById("dots1");
   var text1 = document.getElementById("more1");
   
   if(dots1.style.display === 'none'){
      dots1.style.display = "inline";
      btn1.innerHTML = "Read more";
      text1.style.display = "none";
   }
   else{
      dots1.style.display = "none";
      btn1.innerHTML = "Read less";
      text1.style.display = "inline";
   }
})
btn2.addEventListener('click', () => {
   var dots2 = document.getElementById("dots2");
   var text2 = document.getElementById("more2");
   
   if(dots2.style.display === 'none'){
      dots2.style.display = "inline";
      btn2.innerHTML = "Read more";
      text2.style.display = "none";
   }
   else{
      dots2.style.display = "none";
      btn2.innerHTML = "Read less";
      text2.style.display = "inline";
   }
})
btn3.addEventListener('click', () => {
   var dots3 = document.getElementById("dots3");
   var text3 = document.getElementById("more3");
   
   if(dots3.style.display === 'none'){
      dots3.style.display = "inline";
      btn3.innerHTML = "Read more";
      text3.style.display = "none";
   }
   else{
      dots3.style.display = "none";
      btn3.innerHTML = "Read less";
      text3.style.display = "inline";
   }
})

let btn5 = document.getElementById('btn5');
let mess = document.querySelector('.class');



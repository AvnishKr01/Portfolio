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

let read = document.querySelector('.read')

function download() {
   read.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima voluptatibus rerum tenetur explicabo repudiandae,Lorem ipsum dolor,sit amet consectetur adipisicing elit. Minima voluptatibus rerum tenetur explicabo repudiandae, "
}

var style = document.createElement('style');
var postion = "right";

style.innerHTML= `
@keyframes my-animation{
 0%{${postion}:-${document.querySelector('.text').offsetWidth +10}px;}
 100%{${postion}:100%;}
}`;
document.head.append(style);


let open = document.querySelector(".hamburger")
let menu = document.querySelector(".menu")

let close = document.querySelector(".cross")

open.addEventListener("click", function(){
    menu.style.display = 'block'
})

close.addEventListener("click", function(){
    menu.style.display = 'none'
})
let navbar = document.querySelector(".navbar");
let menu = document.querySelector(".menu");

menu.addEventListener("click", ()=>{
    menu.innerText = menu.innerText === "menu" ? "close" : "menu";
    navbar.classList.toggle("active")
})


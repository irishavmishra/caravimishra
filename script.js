let navbar = document.querySelector(".navbar");
let menu = document.querySelector(".menu");

menu.addEventListener("click", ()=>{
    menu.innerText = menu.innerText === "menu" ? "close" : "menu";
    navbar.classList.toggle("active")
})

// Accordion

document.querySelectorAll('.accordion-title').forEach((item) => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            document.querySelectorAll('.accordion-content').forEach((content) => {
                content.style.display = 'none';
            });
            content.style.display = 'block';
        }
    });
});
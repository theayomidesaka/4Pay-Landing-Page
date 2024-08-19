const menuIcon = document.getElementById("menu-icon")
const closeIcon = document.getElementById("close-icon")
const mobileMenu = document.getElementById("mobile-menu")


menuIcon.addEventListener("click", () => {
    mobileMenu.style.display = "flex"
})

closeIcon.addEventListener("click", function(){
    mobileMenu.style.display = "none"
})




const faqs = document.querySelectorAll(".FAQ-1, .FAQ-7");

faqs.forEach((faq) =>{
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    }) ;
});

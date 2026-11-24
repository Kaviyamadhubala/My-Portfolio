// 1. TYPING ANIMATION
const typingElement=document.getElementById("typing");
const roles=["Java Developer","Web Developer","Computer Science Student","Technology Enthusiast"];
let roleIndex=0;
let charIndex=0;
let deleting=false;
function typeEffect(){
    if(!typingElement) return;
    const currentRole=roles[roleIndex];
    if(deleting){
        charIndex--;
    }else{
        charIndex++;
    }
    typingElement.textContent=currentRole.substring(0,charIndex);
    let speed=deleting?50:100;
    if(!deleting && charIndex==currentRole.length){
        deleting=true;
        speed=1500;
    }
    else if(deleting && charIndex==0){
        deleting=false;
        roleIndex=(roleIndex+1)%roles.length;
        speed=400;
    }
    setTimeout(typeEffect,speed);
}
if(typingElement){
    typeEffect();
}
// 2. DARK / LIGHT MODE
const themeToggle=document.getElementById("theme-toggle");
const body=document.body;
const savedTheme=localStorage.getItem("PortfolioTheme");
if(savedTheme=="light"){
    body.classList.add("Light-theme");
}
function updateThemeIcon(){
    if(!themeToggle) return;
    if(body.classList.contains("Light-theme")){
        themeToggle.innerHTML='<i class="bi bi-moon-fill"></i>';
    }else{
        themeToggle.innerHTML='<i class="bi bi-sun-fill"></i>';
    }
}
updateThemeIcon();
if(themeToggle){
    themeToggle.addEventListener("click",function(){
        body.classList.toggle("light-theme");
        const currentTheme=bodyy.classList.contains("light-theme")?"light":"dark";
        localStorage.setItem("portfolioTheme",currentTheme);
        updateThemeIcon();
    });
}
// 3. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            event.preventDefault();
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// 4. BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");
if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// 5. MOBILE NAVBAR
const navLinks = document.querySelectorAll(".navbar .nav-link");
const navbarMenu = document.getElementById("navbarNav");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (
            navbarMenu &&
            navbarMenu.classList.contains("show") &&
            typeof bootstrap !== "undefined"
        ) {
            bootstrap.Collapse
                .getOrCreateInstance(navbarMenu)
                .hide();
        }
    });
});
// 6. NAVBAR ACTIVE LINK
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", function () {
    let currentSection = "";
    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });
    navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
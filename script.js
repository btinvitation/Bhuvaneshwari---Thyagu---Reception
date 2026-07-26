// ====================================
// Bhuvaneshwari ❤️ Thyagu
// Premium Invitation
// ====================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

            document.getElementById("website").style.display = "block";

            document.getElementById("website").style.opacity = "0";

            setTimeout(() => {

                document.getElementById("website").style.transition = "1.2s";

                document.getElementById("website").style.opacity = "1";

            },100);

        },1000);

    },2500);

});


// ==============================
// Envelope
// ==============================

// ===========================
// Premium Envelope Animation
// ===========================

<section id="book-section">
const envelope = document.querySelector(".envelope");
const flap = document.querySelector(".envelope-top");
const seal = document.querySelector(".wax-seal");
const landing = document.getElementById("landing");
const book = document.getElementById("book-section");

book.style.display = "none";

envelope.addEventListener("click", () => {

    // Glow effect
    seal.style.boxShadow = "0 0 45px rgba(212,175,55,.9)";

    // Break seal
    seal.style.transform = "translateX(-50%) scale(0.85)";
    seal.style.transition = ".4s";

    setTimeout(() => {

        // Open flap
        flap.style.transform = "rotateX(180deg)";

    }, 300);

    setTimeout(() => {

        landing.style.opacity = "0";
        landing.style.transition = "1s";

    }, 900);

    setTimeout(() => {

        landing.style.display = "none";

        book.style.display = "flex";

        book.scrollIntoView({
            behavior: "smooth"
        });

    }, 1700);

});


// ==============================
// Smooth Fade
// ==============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(80px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1200,
fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

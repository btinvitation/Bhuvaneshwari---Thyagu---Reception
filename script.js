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

const envelope=document.querySelector(".envelope");

const book=document.getElementById("book-section");

book.style.display="none";

envelope.addEventListener("click",()=>{

    envelope.style.transform="scale(.92) rotateX(18deg)";

    envelope.style.transition=".7s";

    setTimeout(()=>{

        envelope.parentElement.style.display="none";

        book.style.display="flex";

        book.scrollIntoView({
            behavior:"smooth"
        });

    },700);

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

/* ==========================================================
   WEDDING INVITATION WEBSITE
   SCRIPT.JS PART 1
========================================================== */


/* ==========================================================
   LOADING SCREEN
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1500);

});





/* ==========================================================
   NAVBAR SCROLL EFFECT
========================================================== */


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 100){

        header.classList.add("active");

    }

    else{

        header.classList.remove("active");

    }


});




/* ==========================================================
   COUNTDOWN TIMER
========================================================== */


const weddingDate = new Date(
"September 11, 2026 15:00:00"
).getTime();



function countdown(){


    const now = new Date().getTime();


    const distance = weddingDate - now;



    if(distance < 0){

        return;

    }



    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );



    document.getElementById("days")
    .innerHTML =
    days;



    document.getElementById("hours")
    .innerHTML =
    hours;



    document.getElementById("minutes")
    .innerHTML =
    minutes;



    document.getElementById("seconds")
    .innerHTML =
    seconds;


}



setInterval(countdown,1000);

countdown();





/* ==========================================================
   BACKGROUND MUSIC
========================================================== */


const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let playing = false;

window.addEventListener("load", () => {
    music.play()
    .then(() => {
        playing = true;
        musicButton.innerHTML = '<i class="ri-volume-up-fill"></i>';
    })
    .catch(() => {
        console.log("Autoplay blocked by browser.");
        musicButton.innerHTML = '<i class="ri-volume-mute-fill"></i>';
    });
});

musicButton.addEventListener("click", () => {

    if (playing) {
        music.pause();
        playing = false;
        musicButton.innerHTML = '<i class="ri-volume-mute-fill"></i>';
    } else {
        music.play();
        playing = true;
        musicButton.innerHTML = '<i class="ri-volume-up-fill"></i>';
    }

});
/* ==========================================================
   SCRIPT.JS PART 2
   GALLERY - ANIMATION - RSVP MODAL
========================================================== */


/* ==========================================================
   GALLERY LIGHTBOX
========================================================== */


const galleryImages =
document.querySelectorAll(".gallery-grid img");


galleryImages.forEach(image => {


    image.addEventListener("click",()=>{


        const lightbox =
        document.createElement("div");


        lightbox.className =
        "lightbox";


        lightbox.innerHTML = `

            <img src="${image.src}">

            <span class="close-lightbox">
                ×
            </span>

        `;


        document.body.appendChild(lightbox);



        const close =
        lightbox.querySelector(
        ".close-lightbox"
        );


        close.addEventListener("click",()=>{

            lightbox.remove();

        });



        lightbox.addEventListener("click",
        (e)=>{


            if(e.target === lightbox){

                lightbox.remove();

            }


        });


    });


});





/* ==========================================================
   SCROLL REVEAL ANIMATION
========================================================== */


const revealElements =
document.querySelectorAll(
"section, .person, .member-card, .location-card"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add(
        "animate"
        );


    }


});


},
{

    threshold:0.15

});



revealElements.forEach(element=>{


    observer.observe(element);


});





/* ==========================================================
   RSVP MODAL
========================================================== */


const rsvpForm =
document.getElementById("rsvpForm");


const modal =
document.getElementById("successModal");


const closeButtons =
document.querySelectorAll(
".close-modal, .modal-button"
);



closeButtons.forEach(button=>{


button.addEventListener("click",()=>{


    modal.classList.remove(
    "active"
    );


});


});





/* ==========================================================
   CLOSE MODAL WHEN CLICK OUTSIDE
========================================================== */


if(modal){


modal.addEventListener("click",
(e)=>{


    if(e.target === modal){


        modal.classList.remove(
        "active"
        );


    }


});


}
/* ==========================================================
   SCRIPT.JS PART 3
   EMAILJS RSVP SYSTEM
========================================================== */


/* ==========================================================
   EMAILJS INITIALIZATION
========================================================== */


(function(){

    emailjs.init({

        publicKey:
        "KcLx0sTd6tmACDLLC"

    });


})();





/* ==========================================================
   RSVP EMAIL SENDING
========================================================== */


const rsvpFormEmail =
document.getElementById("rsvpForm");



if(rsvpFormEmail){


rsvpFormEmail.addEventListener(
"submit",
function(event){


event.preventDefault();



const attendance =
document.querySelector(
'input[name="attendance"]:checked'
).value;


console.log(document.getElementById("guestName"));
console.log(document.getElementById("guestEmail"));
console.log(document.getElementById("guestMobile"));
console.log(document.getElementById("guestCount"));
console.log(document.getElementById("guestMessage"));

const templateParams = {


    guest_name:
    document.getElementById(
    "guestName"
    ).value,


    guest_email:
    document.getElementById(
    "guestEmail"
    ).value,


    guest_mobile:
    document.getElementById(
    "guestMobile"
    ).value,


    guest_count:
    document.getElementById(
    "guestCount"
    ).value,


    attendance:
    attendance,


    message:
    document.getElementById(
    "guestMessage"
    ).value


};


console.log("Sending:", templateParams);
emailjs.send(

    "service_gjw246e",

    "template_xa1zhaj",

    templateParams

)

.then(()=>{


    console.log(
    "RSVP Sent Successfully"
    );



    document
    .getElementById(
    "successModal"
    )
    .classList.add(
    "active"
    );



    rsvpFormEmail.reset();



})


.catch(error=>{


    console.log(
    "Email Error:",
    error
    );


    alert(
    "Something went wrong. Please try again."
    );


});



});


}
/* ==========================================================
   BASIC WEBSITE PROTECTION
========================================================== */
/* ==========================================================
   BASIC WEBSITE PROTECTION
========================================================== */


// Disable right click

document.addEventListener(
"contextmenu",
function(e){

e.preventDefault();

});



// Disable common inspect shortcuts

document.addEventListener(
"keydown",
function(e){


if(
e.key === "F12" ||

(e.ctrlKey && e.shiftKey && e.key==="I") ||

(e.ctrlKey && e.shiftKey && e.key==="J") ||

(e.ctrlKey && e.key==="U")

){

e.preventDefault();

}


});



// Disable text selection

document.addEventListener(
"selectstart",
function(e){

e.preventDefault();

});


/* ==========================================================
   MOBILE MENU (IMPROVED)
========================================================== */

const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

if (menu && nav) {

    menu.addEventListener("click", (e) => {

        e.stopPropagation();

        menu.classList.toggle("open");
        nav.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {

        if (
            !nav.contains(e.target) &&
            !menu.contains(e.target)
        ) {

            nav.classList.remove("active");
            menu.classList.remove("open");
            document.body.classList.remove("menu-open");

        }

    });

    // Close after clicking menu links
    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menu.classList.remove("open");
            document.body.classList.remove("menu-open");

        });

    });

}
/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});
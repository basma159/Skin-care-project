



///// observer
const sections = document.querySelectorAll(".section")
const options = {
    threshold: .5,
    // rootMargin:"64px",
}

const observer = new IntersectionObserver((entries) => {
    const visibleSection = entries.find(el => el.isIntersecting)
    const a = document.querySelectorAll("header ul a").forEach(a => {
        const li = a.closest("li")
        if (visibleSection) {
            if ("#" + visibleSection.target.id == a.getAttribute("href")) {
                li.classList.add("bg-white")
                li.classList.add("text-[rgb(14,124,102)]")
            }
            else {
                li.classList.remove("bg-white")
                li.classList.remove("text-[rgb(14,124,102)]")
            }
        }
    })

}, options)

sections.forEach(section => {
    observer.observe(section)
})


/// menu in mobile \

const header = document.querySelector("header");
const menuIcon = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")

menuIcon.addEventListener("click", e => {
    menu.classList.toggle("hidden")
    if (menu.classList.contains("hidden")) {
        menuIcon.classList.add("fa-bars-staggered")
        menuIcon.classList.remove("fa-xmark")
    }
    else {
        menuIcon.classList.remove("fa-bars-staggered")
        menuIcon.classList.add("fa-xmark")
    }
})

document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
        menu.classList.add("hidden");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars-staggered");
    }
});

///// gsap lib

document.addEventListener("DOMContentLoaded", e => {

    const t1 = gsap.timeline()
    t1.from(".main-head", {
        delay: 1,
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "elastic"


    })
    t1.from(".btn-1,.btn-2", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: .5,
        ease: "elastic"

    })
    t1.from(".img-1", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "elastic"
    })

    t1.from(".product-head", {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        ease: "elastic"
    }, ">1")

    t1.from(".card-1, .card-2, .card-3", {
        clearProps: "all",
        y: 100,
        // autoAlpha: 0,
        opacity: 0,
        duration: 2.5,
        stagger: 0.5,
        ease: "elastic",
    }, ">")

    t1.from(".about-head", {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        ease: "elastic"

    }, ">1")
    t1.from(".icon-parent-1,.icon-parent-2,.icon-parent-3,.icon-parent-4,.icon-parent-5,.icon-parent-6 ", {
        clearProps: "all",
        y: 100,
        opacity: 0,
        duration: 3,
        stagger: 0.5,
        ease: "elastic",
    }, ">1");

    gsap.to(".fa-heart", {
        scale: 1.7,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });


})



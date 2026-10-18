
///// observer
const sections = document.querySelectorAll(".section")
const options = {
    threshold: .5,
    // rootMargin:"64px",
}
const a = Array.from(document.querySelectorAll("header ul a"))
const observer = new IntersectionObserver((entries) => {
    const visibleSection = entries.find(el => el.isIntersecting)
    a.forEach(a => {
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


/// menu in mobile 

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
        menu.classList.add("hidden")
        menuIcon.classList.remove("fa-xmark")
        menuIcon.classList.add("fa-bars-staggered")
    }
    const isLink = a.some(a => a.contains(e.target))
    if (isLink) {
        menu.classList.add("hidden")
        menuIcon.classList.remove("fa-xmark")
        menuIcon.classList.add("fa-bars-staggered")
    }
});

///// gsap lib

document.addEventListener("DOMContentLoaded", e => {

    const t1 = gsap.timeline()
    t1.from(".main-head", {
        delay: 1,
        scale: 1.5,
        autoAlpha: 0,
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

    gsap.registerPlugin(ScrollTrigger)
    const t2 = gsap.timeline({
        scrollTrigger: {
            // clearProps:"all",
            trigger: ".products",
            start: "top 80%",
            end: "bottom 70%",
            scrub: true,
            // invalidateOnRefresh: true,
            // markers: true
        }
    })
    t2.from(".product-head", {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        ease: "elastic"
    })

    t2.fromTo(".card-1, .card-2, .card-3", {
        y: -100,
        autoAlpha: 0
    }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.5,
        ease: "power2.out",
    })
    t2.to(".product-head", {
        autoAlpha: 0
    })
    t2.to(".card-1, .card-2, .card-3", {
        y: 100,
        autoAlpha: 0,
        stagger: 0.5,
        ease: "power2.in",

    })
    const t3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top 60%",
            end: "bottom 50%",
            scrub: true,
            // invalidateOnRefresh: true
        }
    })

    t3.from(".about-head", {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        ease: "elastic"
    })

    t3.from(".icon-parent-1,.icon-parent-2,.icon-parent-3,.icon-parent-4,.icon-parent-5,.icon-parent-6 ", {
        y: 100,
        opacity: 0,
        duration: 3,
        stagger: 0.5,
        ease: "elastic",
    });
    t3.to(".about-head", {
        autoAlpha: 0
    })
    t3.to(".icon-parent-1,.icon-parent-2,.icon-parent-3,.icon-parent-4,.icon-parent-5,.icon-parent-6 ", {
        autoAlpha: 0,
        stagger: 0.5
    })

    gsap.to(".fa-heart", {
        scale: 1.7,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
    const t4 = gsap.timeline({
        scrollTrigger:{
            trigger:"#contact",
            start:"top 50%",
            end:"top 80%",
            scrub:true
        }
    })

    t4.from(".logo-footer", {
        y: - 100,
        duration: 0.5,
        autoAlpha: 0
    })
    t4.from(".head-footer", {
        y: - 100,
        duration: 0.5,
        autoAlpha: 0
    })
    t4.from(".para", {
        scale: 1.5,
        duration: 0.5,
        autoAlpha: 0
    })
    t4.from(".list-footer li", {
        clearProps: "all",
        y: -100,
        duration: 2,
        autoAlpha: 0,
        stagger: 0.5,
    })
    t4.from(".list-footer li", {
        clearProps: "all",
        y: -100,
        duration: 1.5,
        autoAlpha: 0,
        stagger: 0.5,
    })
    t4.from(".btns-footer a", {
        clearProps: "all",
        y: -100,
        duration: 1,
        autoAlpha: 0,
        stagger: 0.5,
    })

    t4.from(".copy", {
        y: -100,
        duration: 0.7,
        autoAlpha: 0
    })
})



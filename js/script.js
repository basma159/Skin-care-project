
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

//// dislay all products
const productsParent = document.querySelector(".products")
const allProducts = [
    {
        name: "Body Butter",
        image: "images/product-1.jpeg",
        disc: "  A rich, creamy body butter that leaves your skin feeling soft, smooth, and nourished.",
        price: "300",
        className: "card-1"
    },
    {
        name: "Moisturizing Cream",
        image: "images/product-2.jpeg",
        disc: " A lightweight moisturizing cream designed to keep your skin feeling soft, comfortable, and hydrated.",
        price: "200",
        className: "card-2"

    },
    {
        name: "Facial Serum",
        image: "images/product-3.jpeg",
        disc: " A lightweight facial serum that glides smoothly onto the skin and fits easily into your daily skincare routine.",
        price: "250",
        className: "card-3"
    },
    {
        name: "Perfume",
        image: "images/product-4.jpeg",
        disc: "An elegant fragrance with a captivating scent that adds a touch of freshness and sophistication to your day.",
        price: "450",
        className: "card-4"
    },
    {
        name: "Hair Shampoo",
        image: "images/product-5.jpeg",
        disc: "A gentle shampoo that cleanses the hair, removes everyday buildup, and leaves it feeling fresh and manageable.",
        price: "250",
        className: "card-5"
    },
    {
        name: "Soap",
        image: "images/product-6.jpeg",
        disc: "A gentle cleansing soap that helps remove impurities, leaving your skin feeling clean, soft, and refreshed.",
        price: "100",
        className: "card-6"
    },
]
const y = allProducts.map(product => {
    return (
        `      <div class="${product.className} h-fit w-80 bg-[#0E7C66] rounded-lg hover:shadow-2xl hover:shadow-amber-600 pb-5
            hover:-translate-y-6 hover:cursor-pointer transition-all duration-500 group">
                    <div class="image w-full h-60 pb-4 overflow-hidden rounded-lg">
                        <img src="${product.image}"
                            class="w-full h-full rounded-lg object-cover group-hover:scale-110 transition-all duration-500 "
                            alt="">
                    </div> <!-- image -->
                    <div class="disc flex flex-col justify-center items-center gap-3 text-white px-4">
                        <h2 class="text-2xl font-bold">${product.name}</h2>
                        <p class="text-center text-gray-200 h-20">${product.disc}</p>
                        <span class="text-[#F39C32] font-bold text-lg pt-5">${product.price} L.E</span>
                    </div><!-- disc -->
                </div><!-- card-1 -->
        `)
})
productsParent.innerHTML = y.join("")

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
            end: "bottom 20%",
            scrub: true,
        }
    })
    t2.from(".product-head", {
        scale: 1.5,
        opacity: 0,
        ease: "elastic"
    })

    t2.fromTo(".products > div", {
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
    t2.to(".products > div", {
        y: 100,
        autoAlpha: 0,
        stagger: 0.5,
        ease: "power2.in",

    })

    const t3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top 60%",
            end: "bottom 30%",
            scrub: true,
            // invalidateOnRefresh: true
        }
    })

    t3.from(".about-head", {
        scale: 1.5,
        opacity: 0,
        ease: "elastic"
    })

    t3.from(".icon-parent-1,.icon-parent-2,.icon-parent-3,.icon-parent-4,.icon-parent-5,.icon-parent-6 ", {
        y: 100,
        opacity: 0,
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
        scrollTrigger: {
            trigger: "#contact",
            start: "top 100%",
            end: "bottom 100%",
            scrub: true
        }
    })

    t4.from(".logo-footer", {
        y: - 100,
        // duration: 0.5,
        autoAlpha: 0,
        ease: "elastic"

    })
    t4.from(".head-footer", {
        y: - 100,
        // duration: 0.5,
        autoAlpha: 0,
        ease: "elastic"
    })
    t4.from(".para", {
        scale: 1.5,
        // duration: 0.5,
        autoAlpha: 0,
        ease: "elastic"
    })
    t4.from(".list-footer li", {
        clearProps: "all",
        y: -100,
        // duration: 2,
        autoAlpha: 0,
        stagger: 0.5,
        ease: "elastic"
    })
    t4.from(".btns-footer a", {
        clearProps: "all",
        y: -100,
        // duration: 1,
        autoAlpha: 0,
        stagger: 0.5,
        ease: "elastic"
    })

    t4.from(".copy", {
        y: -100,
        // duration: 0.7,
        autoAlpha: 0,
        ease: "elastic"
    })
})



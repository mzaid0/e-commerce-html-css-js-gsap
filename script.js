
var Typed = new Typed(".autoType", {
    strings: ["Products", "Clothes", "Shoes"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

gsap.to("#nav-bar",{
    backgroundColor:"#fff",
    duration:0.5,
    height: "9vh",
    width:"100vw",
    scrollTrigger :{
        trigger:"#nav-bar",
        scroller:"body",
        start:"top -10px",
        end:"top -11px",
        scrub:1
    }
})

gsap.to("#main ",{
    backgroundColor:"#fff",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:1
    }
})

var tl = gsap.timeline();

tl.from("#nav-bar h2, #nav-bar #nav-links",{
    y:-80,
    duration:2,
    scrub:2,
    opacity:0,
    stagger:0.5
})

tl.from("#page1 h1",{
    x:-500,
    duration:2,
    opacity:0,
    stagger:0.5
})

gsap.from(".features",{
    scale:0,
    opacity:0,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:".features .features-details",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:0.5,
    }
})







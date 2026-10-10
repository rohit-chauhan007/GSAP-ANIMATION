//ScrollTrigger use to animate an element on the scroll 

gsap.to(".box",{
   y:-300,
   scrollTrigger:{
    trigger:".box",
    start:"top 30%",
    end:"top 20%",
    markers:true,
    scrub:1,
    pin:true
   }
})
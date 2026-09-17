 document.querySelectorAll(".btn").forEach(btn =>{
   btn.addEventListener("mouseenter",(ev)=>{
    if(btn.classList.contains("btn-scale")){
       gsap.to(btn,{
           scale:1.2,
           duration:0.3,
           ease:"back.out(2)"
    })
    }
    //btn glow
    if(btn.classList.contains("btn-glow")){
        gsap.to(btn,{
            scale:1.2,
            duration:3,
            ease:"power3.out",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)"
        })
    }
   })
   btn.addEventListener("mouseleave",()=>{
   if(btn.classList.contains("btn-scale")){
     gsap.to(btn,{
        scale:1,
        duration:0.3,
        ease:"power2.out"
    })
   }

   if(btn.classList.contains("btn-glow")){
        gsap.to(btn,{
            scale:1,
            duration:0.3,
           ease:"power2.out"
        })
    }

   })
})
const count = document.querySelector('.loader-count h2');

const obj = {
    value:0,
}
gsap.to(obj,{
    value:100,
    duration:1.8,
    ease:"linear",
    onUpdate :() => {
        count.innerText = `${Math.round(obj.value)}%`;
    },
    onComplete : () =>{
      gsap.to( ".loader-count",{
        opacity:0,
        duration:1.8,
        ease:"power3.out",
       onComplete : () =>{
        tl.play();
       }
      })
     
    }
    
});


console.log("start")
const tl = gsap.timeline({paused:true})
tl.to(".loader",{
    yPercent:100,
    duration:0.8,
    ease:"expo.out"
})
.from(".hero-image img",{
    scale:2,
    duration:1.23,
    ease:"power3.out"
},"-=1.3")
.from(".heading h2",{
    y:-60,
    opacity:0,
    duration:0.9,
    ease:"power3.out"
}).from(".sub-heading p",{
    x:60,
    opacity:0,
     ease:"power3.out"
})
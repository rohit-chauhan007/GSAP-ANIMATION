const tl = gsap.timeline();

tl.to(".box",{
    x:909,
    delay:2,
    borderRadius:20,
    backgroundColor:"green",
    ease:"power1.in" //ease-in start slow and accelerate like a falling objecct
}).from(".box1",{
   x:900,
   backgroundColor:"green",
   ease:"power1.out" //ease-out start fast deaccelerate - like a ball rolling to a stopś
}).to(".box2",{
  x:900,
  ease:"back.out(1.7)"
})
.to(".box3",{
    x:909,
    ease:"circ",
    borderRadius:100,
})
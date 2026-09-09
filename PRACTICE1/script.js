const box = document.querySelector(".box");
gsap.to(box,{
    x:800,
    y:800,
    borderRadius:20,
    backgroundColor:"green",
    rotate:720,
    delay:2,
    duration:4,
    yoyo:true,
    repeat:-1,
    ease:"bounce.out"
})
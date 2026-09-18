const tl = gsap.timeline();

tl.to(".box1",{
    x:800,
    backgroundColor:"green"
})
.to(".box2",{
    x:800,
    backgroundColor:"blue"
},"-=0.6")
.to(".box3",{
    x:800,
    backgroundColor:"pink"
})
.to(".box4",{
    x:800,
    backgroundColor:"yellow"
})
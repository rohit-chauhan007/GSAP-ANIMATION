
//gsap.from("",{})//new possition to exact possition
// gsap.to(".box",{//exact possition to new possition
//     x:200,
//     y:200,
//     delay:2,
//     rotation:360,
//     scale:2.5,
// })
// gsap.fromTo(".box",{//to value From and to both 
//     y:400,
//     opacity:0.1,
// },
// {
//     x:1000,//move x direction
//     scale:2,//big 
//     delay:3,//late timing property
//     duration:3,//time taken 
//     rotate:360,//
//     opacity:1,
//     backgroundColor:"purple",
//     ease: "power3.out"
// }
// )
//gsap important properties
/*
x
y
rotation
scale
scaleX
scaleY
opacity
width
height
backgroundColor
borderRadius
*/

//EASE : none
/*
power1
power2
power3
power4
back
elastic
bounce
circ
expo
sine
*/

//Level 2
//Multiple elemet me agr stagger use krte h to animtion one by one chalega
gsap.fromTo(".box",{//to value From and to both 
    y:400,
    opacity:0.1,
},
{
    x:1000,//move x direction
    scale:2,//big 
    delay:3,//late timing property
    duration:3,//time taken 
    rotate:360,//
    opacity:1,
    backgroundColor:"purple",
    ease: "power3.out",
    stagger:2,
}
)

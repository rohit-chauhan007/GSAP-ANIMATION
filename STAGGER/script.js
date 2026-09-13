//stagger - stagger line by line / sequence me animate krta hai 
/*
stagger:time,0.3,
properties:
each - line by line start 
from:"end / center /start / "
amount -
*/

gsap.to(".box",{
    x:900,
    duration:1,
    delay:1,
    //stagger:-0.5,
    ease:"bounce",
    // stagger:{
    //     each:0.4,
    //     from:"center",
    // }
    stagger:{
        amount:1,
    }
})
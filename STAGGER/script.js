//stagger - stagger line by line / sequence me animate krta hai 
/*
stagger:time,0.3,
properties:
each - line by line start 
from:"end / center /start / "
amount -
*/
/*
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
    */
   /* gsap.from(".box",{
    y:50,
    opacity:0,
    duration:0.8,
    stagger:0.20,
    ease:"power3.out"
   })
    */

   //stagger:grid/axis
   gsap.from(".box",{
    scale:0.1,
    duration:0.5,
    stagger:{
        grid:"[1,3]",
        from:"center"
    }
   })
//Callback = ek function jo kisi event/action ke complete hone ke baad automatically call hota hai.
const box = document.querySelector(".box");
const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    gsap.to(box,{
        x:200,
        delay:2,
        duration:2,
        ease:"bounce",
        onComplete:()=>{
            console.log("completed")
        },
        onStart:startAnim,

    })
})
btn.addEventListener("click",()=>{
    gsap.from(box,{
        x:200
    })
})
const startAnim = () =>{
    console.log("Animation start");
}
//important callback
/*
1.onStart - running when animation is start
2. onComplete: runs after complete the animation
3. onUpdate: runs on animation
4.onRepeat : run when animatimation repeat
*/

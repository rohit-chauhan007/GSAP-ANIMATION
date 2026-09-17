// const tl = gsap.timeline();//timeline is use to animate an element in sequince
// tl.to(".box1", {
//   x: 300,
//   duration: 1
// })
// .to(".box2", {
//   x: 300,
//   duration: 1
// })
// .to(".box3", {
//   x: 300,
//   duration: 1
// });

//Timeline Position Parameter
/*
"<" //1st animation ke sath
Previous animation ke start par

">"
Previous animation ke end par

"-=0.5"
0.5 sec earlier

"+=0.5"
0.5 sec later
*/
const tl = gsap.timeline({pause:true});

// tl.to(".box1", {
//   x: 300,
//   duration: 1,
//   delay:1
// })
// .to(".box2", {
//   x: 300,
//   duration: 1
// }, "+=0.5")
// .to(".box3",{
//   x:300,
//   duration:1
// },"-=0.1")

// tl.pause();
/*time line label
tl.addLabel("start")
.to(".box1",{
  x:100
})
.addLabel("middle")
.to(".box2",{x:100})
.to(".box3",{opacity:1},"moddle")
*/

//controll method and playback
//const tl  = gsap.timelin({pause:true});
const playBtn = document.querySelector(".play-btn");
const reverseBtn = document.querySelector(".reverse-btn");
tl.to(".box1",
  {
    x:900,

  }
)
tl.pause();
playBtn.addEventListener("click",()=>{
  tl.play();
})

reverseBtn.addEventListener("click",()=>{
  tl.reverse();
})

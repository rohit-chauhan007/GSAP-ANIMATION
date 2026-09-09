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
const tl = gsap.timeline();

tl.to(".box1", {
  x: 300,
  duration: 1,
  delay:1
})
.to(".box2", {
  x: 300,
  duration: 1
}, "+=0.5")
.to(".box3",{
  x:300,
  duration:1
},"-=0.1")




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
const box1 = document.querySelector(".box1");

gsap.fromTo(box1,//from
    {
       x:500,
       rotate:720,
       borderRadius:20,
       ease:"bounce.out",
       delay:2,
       backgroundColor:"pink"
    },
    {
     y:0,
     rotate:0,
     backgroundColor:"yellow",
     delay:3

    }

);
//plain javascript object
const score = {value:0};
gsap.to(score,{
  value:500,
  duration:3,
  delay:3,
  onUpdate:()=>{
    console.log(score);
  }
})
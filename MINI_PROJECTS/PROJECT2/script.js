const count = document.querySelector('.loader-count');

const obj = {
    value:0,
}
gsap.to(obj,{
    value:100,
    duration:1.5,
    ease:"linear",
    onUpdate :() => {
        count.innerText = `${Math.round(obj.value)}%`;
      
    },
    onComplete : () =>{
      gsap.to( ".loader ,.loader-count",{
          y:900
      })
    }
})
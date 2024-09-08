window.addEventListener("mousemove", function(details){
    let rect = this.document.querySelector("#rect")
   let xval = gsap.utils.mapRange(0, this.window.innerWidth,100+rect.getBoundingClientRect().width/2,
     this.window.innerWidth - (100+rect.getBoundingClientRect().width/2), details.clientX)
    gsap.to('#rect',{
        left: xval + "px",
        ease: Power3
    })
})

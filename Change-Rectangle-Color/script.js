let rect = document.querySelector("#center")

rect.addEventListener("mousemove", function(details){
    let rectanglelocation = rect.getBoundingClientRect()
    var inside = details.clientX - rectanglelocation.left

    if(inside < rectanglelocation.width / 2){
        let redColor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0, inside);
       
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });
    }
    else{
        let blueColor = gsap.utils.mapRange(rectanglelocation.width / 2, rectanglelocation.width, 0, 255, inside);
       
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
        
    }
});


rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {backgroundColor: "white"})
})


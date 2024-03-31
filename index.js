var contain = document.querySelector(".container");

var icon = document.querySelector("i");

contain.addEventListener('dblclick', function(){
    icon.style.transform = "translate(-50%,-50%) scale(1)"
    icon.style.opacity =  0.8
    setTimeout(function(){
        icon.style.transform = "translate(-50%,-50%) scale(0)"
        

    },2500)
    // setTimeout(function(){
    //     icon.style.opacity = 0;
    //     icon.style.transform = "translate(-50%,-50%) scale(1)"
    // },1000)

})
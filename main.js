const curser = document.querySelector(".curser");
document.addEventListener('mousemove', function(e){
    let X = e.clientX;
    let Y = e.clientY;

    curser.style.left = X + "px";
    curser.style.top = Y + "px";
})


/* 
 */






const element = document.querySelector(".resume-section");
element.addEventListener('wheel', (event) => {

    document.querySelector(".skills-section").scrollBy({
        left: event.deltaY < 0 ? -400 : 400,
        behavior: "smooth"

    });
});

$(".resume-option").click(function (e) {
    e.preventDefault();
    $(".resume-section").css("transform", "translateX(0vw)");
    $(".resume-section").css("visibility", "visible");
});




$(".top-menu > img").click(function (e) {
    e.preventDefault();
    $(".resume-section").css("transform", "translateX(100vw)");
    $(".resume-section").css("visibility", "hidden");
});


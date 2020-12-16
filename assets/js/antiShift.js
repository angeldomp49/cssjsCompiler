window.addEventListener("load", function(){
    let shiftSections = document.querySelectorAll("div.antiShift, section.antiShift");

    shiftSections.forEach(function ( section ){
        section.style.height = "auto";
    });
});
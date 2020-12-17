window.addEventListener("load", function(){
    let shiftSections = document.querySelectorAll("*.antiShift");

    shiftSections.forEach(function ( section ){
        section.style.height = "auto";
    });
});
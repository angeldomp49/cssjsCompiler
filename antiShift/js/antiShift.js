window.addEventListener( "load", function(){
    let shiftSections = document.querySelectorAll( "*[data-shift]" );

    shiftSections.forEach( function ( section ){
        section.style.height = "auto";
    } );
} );
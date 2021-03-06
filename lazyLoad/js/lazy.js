
document.addEventListener("DOMContentLoaded",(

    function(){

        var lazyImages   = [].slice.call( document.querySelectorAll( "img[data-img]" ) );
        var lazyVideos   = [].slice.call( document.querySelectorAll( "video.lazy" ) );
        var lazySections = [].slice.call( document.querySelectorAll( "*[data-img]:not(img), *[data-bg]:not(img)" ) );

        if( "IntersectionObserver" in window ){

            let lazyImageObserver = new IntersectionObserver( (

                function( entries, observer ){

                    entries.forEach( (

                        function( entry ){

                            if( entry.isIntersecting ){
                                let lazyImage = entry.target;

                                if( lazyImage.dataset.img != "" && lazyImage.dataset.img != null){
                                    lazyImage.src = lazyImage.dataset.img;
                                }
                                lazyImageObserver.unobserve( lazyImage );
                            }
                        }
                    ) )
                }
            ) );
            
            let lazyVideoObserver = new IntersectionObserver( (

                function( entries, observer ){

                    entries.forEach( (
                        function( entry ){

                            if( entry.isIntersecting ){
                                let lazyVideo = entry.target;

                                lazyVideo.play();
                                lazyVideo.classList.remove( "lazy" );
                                lazyVideoObserver.unobserve( lazyVideo );
                            }
                        }
                    ) )
                }
            ) );
            
            let lazySectionObserver = new IntersectionObserver( (

                function( entries, observer ){

                    entries.forEach( (

                        function( entry ){

                            if( entry.isIntersecting ){
                                let lazySection = entry.target;

                                if( lazySection.dataset.img != "" && lazySection.dataset.img != null ){
                                    lazySection.style.backgroundImage = "url('" + lazySection.dataset.img + "');";
                                }
                                if( lazySection.dataset.bg != "" && lazySection.dataset.bg != null ){
                                    lazySection.style.background = lazySection.dataset.bg;
                                }
                                
                                lazySection.classList.remove( "lazy" );
                                lazySectionObserver.unobserve( lazySection );
                            }
                        }
                    ) )
                }
            ) );

            lazyImages.forEach( (
                function( lazyImage ){
                    lazyImageObserver.observe( lazyImage );
                }
            ) );

            lazyVideos.forEach( (
                function( lazyVideo ){
                    lazyVideoObserver.observe( lazyVideo );
                }
            ) );
            
            lazySections.forEach( (
                function( lazySection ){
                    lazySectionObserver.observe( lazySection );
                }
            ) );
        }
        else{
            console.error( "failed making observer listener" );
        }
    }
) );
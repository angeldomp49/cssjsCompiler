
document.addEventListener("DOMContentLoaded",(

    function(){

        var lazyImages=[].slice.call(document.querySelectorAll("img"));
        var lazyVideos=[].slice.call(document.querySelectorAll("video.lazy"));
        var lazySections=[].slice.call(document.querySelectorAll("*.lazy:not(img):not(video)"));

        if("IntersectionObserver"in window){

            let lazyImageObserver=new IntersectionObserver((

                function(entries,observer){

                    entries.forEach((

                        function(entry){

                            if(entry.isIntersecting){
                                let lazyImage = entry.target;

                                if( lazyImage.dataset.src != "" && lazyImage.dataset.src != null){
                                    lazyImage.src = lazyImage.dataset.src;
                                }
                                if( lazyImage.dataset.srcset != "" && lazyImage.dataset.srcset != null){
                                    lazyImage.srcset = lazyImage.dataset.srcset;
                                }
                                lazyImageObserver.unobserve(lazyImage)
                            }
                        }
                    ))
                }
            ));
            
            let lazyVideoObserver=new IntersectionObserver((

                function(entries,observer){

                    entries.forEach((
                        function(entry){

                            if(entry.isIntersecting){
                                let lazyVideo=entry.target;
                                lazyVideo.play();
                                lazyVideo.classList.remove("lazy");
                                lazyVideoObserver.unobserve(lazyVideo)
                            }
                        }
                    ))
                }
            ));
            
            let lazySectionObserver=new IntersectionObserver((
                function(entries,observer){
                    entries.forEach((
                        function(entry){
                            if(entry.isIntersecting){
                                let lazySection=entry.target;

                                if( lazySection.dataset.img != "" && lazySection.dataset.img != null ){
                                    lazySection.style.backgroundImage = lazySection.dataset.img;
                                }
                                if( lazySection.dataset.bg != "" && lazySection.dataset.bg != null ){
                                    lazySection.style.background = lazySection.dataset.bg;
                                }
                                
                                lazySection.classList.remove("lazy");
                                lazySectionObserver.unobserve(lazySection)
                            }
                        }
                    ))
                }
            ));

            lazyImages.forEach((
                function(lazyImage){
                    lazyImageObserver.observe(lazyImage)
                }
            ));

            lazyVideos.forEach((
                function(lazyVideo){
                    lazyVideoObserver.observe(lazyVideo)
                }
            ));
            
            lazySections.forEach((
                function(lazySection){
                    lazySectionObserver.observe(lazySection)
                }
            ))
        }
        else{
            console.error("failed making observer listener");
        }
    }
));
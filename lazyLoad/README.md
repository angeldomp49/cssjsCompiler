
------------images-------------------------

1. link the lazy.min.js file
2. add the class lazy in each element who needs it

    <img class="lazy">

3. for img tags add the data-src and data-srcset attributes ( can contain the same )
4. remove the src attribute value like:

    <img class="lazy" data-src="image.jpg" data-srcset="image.jpg" src="">

5. automatically when the viewport show the image it fill the src and srcset attribute

-------------videos--------------------------

1. turn the preload attribute to none, if the video is autoplay remember turn muted to true, the autoplay tag should not appears or be false.
2. add the lazy class.
3. automatically when the viewport show the video the script plays it. the disadvantage is clear, if the network connection is very slow the video takes long time in load.

    <video class="lazy" muted preload="none" src="resource.mp4">

-------------backgrounds----------------------

1. set attribute data-bg with the respective value
2. set the class lazy
3. remove the background attribute value like:

    <div class="lazy" data-bg="url('assets/resource.jpg')" style="background: unset;" >

4. when the viewport show this, the background takes the data-bg attribute
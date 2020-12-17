1. link the antiShift.min.js
2. add the antiShift class in all container elements who need it like:

    <div class="antiShift" >

3. add the default height in the style tag like:

    <div style="height: 50px;"> 
4. when the window loads completely the height is redefined to auto

    <div style="height: auto;">

5. if you can't add height directly in style element tag you should include the shifts.min.css

6. add the respective class like:

    <div class="h-50"> <!--height: 5px;-->
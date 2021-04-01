// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
let red = document.querySelector("#listener-example");

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  //opt.passive.get() = () =>  supportPassive = true; 

  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {
  console.log( e );
}

// Use our detect's results. passive applied if supported, capture will be false either way.
red.addEventListener('touchstart', function(){
  console.log("this");
}, supportsPassive ? { passive: true } : false);

console.log(supportsPassive);
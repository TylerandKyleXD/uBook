/// execute.js
(function() {
  //inspect element lol
  (function () {
    var script = document.createElement('script'); 
    script.src='//cdn.jsdelivr.net/npm/eruda'; 
    document.body.appendChild(script); 
    script.onload = function(){
      eruda.init()
    } 
  })();
  window.addEventListener("keyup", event => {
    //Control + ~ | do JS
    if (event.ctrlKey && event.which === 192) {
      let code = prompt("Eval:");
      if (code.startsWith("javascript:")) {
        code = code.substring(11);
      }
      eval(code);
    } else if (event.ctrlKey && event.key === ";") {
      // Control + ; | Portable
      (function() {
        var a = document.getElementById("rusic-modal");
        if (!a) {
          a = document.createElement("iframe");
        }
        a.setAttribute("allow", "fullscreen");
        a.src = "https://binchodien.adaptor.cl";
        a.id = "rusic-modal";
        a.style.cssText = "position:fixed;width:100vw;height:100vh;top:0;left:0;right:0;bottom:0;z-index:2147483647;background-color:white;border:none;";
        document.body.appendChild(a);
      })();
    } else if (event.ctrlKey && event.key === "i") {
      // Control + I | Open Web X-Ray
      (function() {
        var a = document.createElement("script");
        a.src = "https://x-ray-goggles.mouse.org/webxray.js";
        a.className = "webxray";
        a.setAttribute("data-lang", "en-US");
        a.setAttribute("data-baseuri", "https://x-ray-goggles.mouse.org");
        document.body.appendChild(a);
      })();
    }
  });
})()

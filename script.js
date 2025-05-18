/// execute.js
(function() {
  window.addEventListener("keyup", event => {
    //Control + ~ ||| do JS
    if (event.ctrlKey && event.which === 192) {
      let code = prompt("Eval:");
      if (code.startsWith("javascript:")) {
        code = code.substring(11);
      }
      eval(code);
    } else if (event.ctrlKey && event.key === ";") {
      // Control + ; ||| Portable
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
      // Control + ' ||| Open Firebug Devtools
      alert("active");
      (function() {
        var firebug = document.createElement("script");
        firebug.setAttribute("src", "https://luphoria.com/fbl/fbl/firebug-lite-debug.js");
      
        document.body.appendChild(firebug);
      
        (function() {
          if (window.firebug && window.firebug.version) {
            firebug.init();
          } else {
            setTimeout(arguments.callee, 100);
          }
        })();
      
        void(firebug);
      })();
    }
  });
})()


;(function(window, document, undefined) {

  "use strict";

  var container    = document.getElementById("work")
    , projects     = container.querySelectorAll("article")
    , currentIndex = 0;

  changeProject();

  var bulletContainer = document.createElement("p");
  bulletContainer.className = "bullet-container";
  for (var i = 0; i < projects.length; ++i) {
    var bullet = document.createElement("span");
    bullet.className = "bullet";
    bulletContainer.appendChild(bullet);
  }
  container.appendChild(bulletContainer);

  document.addEventListener("keyup", function(e) {
    switch (e.keyCode) {
      case 39:
      currentIndex = ++currentIndex % projects.length;
      changeProject();
      break;

      case 37:
      currentIndex = currentIndex <= 0 ? projects.length - 1 : --currentIndex;
      changeProject();
      break;
    }
  });

  container.addEventListener("touchend", function() {
    currentIndex = ++currentIndex % projects.length;
    changeProject();
  });

  function changeProject() {
    for (var i = 0; i < projects.length; ++i) {
      projects[i].classList.remove("active");
      if (i === currentIndex) projects[i].classList.toggle("active");
    }
  }

})(window, document);


;(function(window, document, undefined) {

  "use strict";

  var container    = document.getElementById("work")
    , projects     = container.querySelectorAll("article")
    , currentIndex = 0;

  var bulletContainer = document.createElement("p");
  bulletContainer.className = "bullet-container";
  container.appendChild(bulletContainer);

  for (var i = 0; i < projects.length; ++i) {
    var bullet = document.createElement("span");
    bullet.className = "bullet";
    bullet.addEventListener("click", bulletClick(i));
    bulletContainer.appendChild(bullet);
  }

  function changeProject() {

    var index = -1
      , max   = projects.length;

    while (++index < max) {
      projects[index].classList.remove("active");
      bulletContainer.children[index].classList.remove("active");

      if (index === currentIndex) {
        projects[index].classList.toggle("active");
        bulletContainer.children[index].classList.toggle("active");
        //bulletContainer.childNodes;
        //[i].classList.toggle("active");
      }
    }
    console.log(currentIndex)
  }

  function bulletClick(index) {
    return function() {
      currentIndex = index;
      changeProject();
    };
  }

  changeProject();

  window.b = bulletContainer;

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
})(window, document);

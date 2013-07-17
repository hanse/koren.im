
;(function(window, document, undefined) {

  "use strict";

  var container    = document.getElementById("work")
    , projects     = container.querySelectorAll("article")
    , currentIndex = 0;

  var bulletContainer = createElement("p", {className: "bullet-container"});
  container.appendChild(bulletContainer);

  buildNavigationBullets();

  function createElement(tag, attributes) {
    var el = document.createElement(tag);
    for (var attr in attributes) {
      el[attr] = attributes[attr];
    }
    return el;
  }

  function buildNavigationBullets() {
    var index = -1
      , max = projects.length;

    while (++index < max) {
      bulletContainer.appendChild(createElement("span", {
        className: "bullet",
        onclick: bulletClick(index)
      }));
    }
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

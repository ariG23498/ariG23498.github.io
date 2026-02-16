(function () {
  function setupMobileMenu() {
    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("mobile-menu");

    if (!toggle || !menu) {
      return;
    }

    toggle.addEventListener("click", function () {
      var isActive = toggle.classList.toggle("active");
      menu.classList.toggle("active", isActive);
      toggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });
  }

  function initToc(collapseDepth) {
    if (!window.tocbot) {
      return;
    }

    window.tocbot.destroy();
    window.tocbot.init({
      tocSelector: ".tocbot-list",
      contentSelector: ".post-content",
      headingSelector: "h1, h2, h3, h4, h5",
      collapseDepth: collapseDepth,
      orderedList: false,
      scrollSmooth: true
    });
  }

  function setupPostToc() {
    var tocList = document.querySelector(".tocbot-list");
    var expandButton = document.querySelector("[data-toc-expand]");

    if (!tocList || !expandButton || !window.tocbot) {
      return;
    }

    var expanded = false;
    initToc(1);

    expandButton.addEventListener("click", function (event) {
      event.preventDefault();
      expanded = !expanded;
      initToc(expanded ? 6 : 1);
      expandButton.textContent = expanded ? "Collapse all" : "Expand all";
    });

    var topButton = document.querySelector("[data-scroll-top]");
    if (topButton) {
      topButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    var bottomButton = document.querySelector("[data-scroll-bottom]");
    if (bottomButton) {
      bottomButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupMobileMenu();
    setupPostToc();
  });
})();

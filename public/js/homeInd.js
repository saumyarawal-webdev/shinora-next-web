
    document.addEventListener("DOMContentLoaded", function () {
        const images = [
          "images2/home-bg/001.jpg",
          "images2/home-bg/002.jpg",
          "images2/home-bg/003.jpg",
          "images2/home-bg/004.jpg",
          "images2/home-bg/005.jpg",
          "images2/home-bg/006.jpg",
          "images2/home-bg/007.jpg",
          "images2/home-bg/008.jpg",
          "images2/home-bg/009.jpg",
          "images2/home-bg/0010.jpg",
          "images2/home-bg/0011.jpg",
        ];
        let currentIndex = 1; // start from the second image since the first is already set
        let activeBg = 1;

        function changeBackground() {
          const nextBg =
            activeBg === 1
              ? document.getElementById("bg2")
              : document.getElementById("bg1");
          const currentBg =
            activeBg === 1
              ? document.getElementById("bg1")
              : document.getElementById("bg2");

          nextBg.style.backgroundImage = `url(${images[currentIndex]})`;
          nextBg.style.opacity = 1;
          currentBg.style.opacity = 0;

          activeBg = activeBg === 1 ? 2 : 1;
          currentIndex = (currentIndex + 1) % images.length;
        }

        setInterval(changeBackground, 4000);
      });
    
    
      document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.querySelector(".inner-nav");

        function handleScroll() {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 100) {
            navbar.classList.add("nav-scrolled");
          } else {
            navbar.classList.remove("nav-scrolled");
          }
        }

        // Check scroll position on load in case the page is reloaded with an existing scroll
        handleScroll();

        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);
      });
    
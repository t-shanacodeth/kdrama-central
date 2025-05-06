// Toggle between light and dark mode
let changeAppearanceButton = document.querySelector(".dark-mode-toggle");
changeAppearanceButton.addEventListener("click", changeAppearance);

      function changeAppearance() {
        let body = document.querySelector("body");

        if (body.classList.contains("dark-mode")) {
          body.classList.remove("dark-mode");
        } else {
          body.classList.add("dark-mode");
        }
      }

      // Navigate to website to watch kdramas
      function goToViki() {
        window.location.href = "https://www.viki.com/";
      }

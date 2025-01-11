(function toggleBackground() {
    // Check if custom styles are already applied
    const existingStyle = document.querySelector("#dark-mode-style");

    if (existingStyle) {
        // If styles are applied, remove them (toggle off)
        existingStyle.remove();
    } else {
        // If styles are not applied, add them (toggle on)
        const style = document.createElement("style");
        style.id = "dark-mode-style";
        style.textContent = `
        body {
          background-color: #262626 !important;
          color: white !important;
        }
        * {
          background-color: transparent !important;
          color: white !important;
          border: none !important;
        }
          .menu-left {
        background-color: green !important;
      }
      `;
        document.head.appendChild(style);
    }
})();

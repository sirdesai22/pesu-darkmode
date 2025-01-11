document.getElementById("toggleSwitch").addEventListener("change", (event) => {
    const isChecked = event.target.checked;

    // Send a message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: toggleMenuLeftBackground,
            args: [isChecked],
        });
    });
});

// Function to toggle background for "menu-left"
function toggleMenuLeftBackground(isChecked) {
    const styleId = "menu-left-style";
    const existingStyle = document.querySelector(`#${styleId}`);

    if (isChecked) {
        if (!existingStyle) {
            const style = document.createElement("style");
            style.id = styleId;
            style.textContent = `
          body {
          background-color: #262626 !important;
          color: white !important;
        }
          #pge_menu {
          background-color: #121212 !important;
        }
        * {
          background-color: transparent !important;
          color: white !important;
          border: none !important;
        }
          .menu-left {
        background-color: #121212 !important;
      }
        `;
            document.head.appendChild(style);
        }
    } else {
        if (existingStyle) {
            existingStyle.remove();
        }
    }
}

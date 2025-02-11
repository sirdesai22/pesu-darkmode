// background.js
let isStyleApplied = false;

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleStyles,
  });
});

function toggleStyles() {
  const styleId = "custom-style-toggle";
  let styleTag = document.getElementById(styleId);

  if (styleTag) {
    styleTag.remove();
  } else {
    styleTag = document.createElement("style");
    styleTag.id = styleId;
    styleTag.textContent = "body { background-color: #222; color: white !important; }";
    document.head.appendChild(styleTag);
  }
}

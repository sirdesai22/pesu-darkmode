const QUOTES = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Study hard what interests you the most in the most undisciplined, irreverent manner possible.", author: "Richard Feynman" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "Education is the passport to the future — tomorrow belongs to those who prepare today.", author: "Malcolm X" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
];

let quoteIndex = Math.floor(Math.random() * QUOTES.length);

function showQuote(index) {
  const textEl = document.getElementById("quote-text");
  const authorEl = document.getElementById("quote-author");
  const numEl = document.getElementById("quote-num");

  textEl.style.opacity = "0";
  setTimeout(() => {
    textEl.textContent = QUOTES[index].text;
    authorEl.textContent = "— " + QUOTES[index].author;
    numEl.textContent = String(index + 1).padStart(2, "0") + " / " + QUOTES.length;
    textEl.style.opacity = "1";
    textEl.style.transition = "opacity 0.3s";
  }, 150);
}

showQuote(quoteIndex);

document.getElementById("next-quote").addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % QUOTES.length;
  showQuote(quoteIndex);
});

// Dark mode toggle
const toggle = document.getElementById("dark-toggle");
const toggleCard = document.getElementById("toggle-card");
const toggleStatus = document.getElementById("toggle-status");

toggle.addEventListener("change", () => {
  const isOn = toggle.checked;
  toggleCard.classList.toggle("active", isOn);
  toggleStatus.textContent = isOn ? "● ACTIVE" : "● INACTIVE";
  toggleStatus.classList.toggle("active", isOn);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: toggleStyles,
    });
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
    styleTag.textContent = `
      body { background: #000; color: white !important; }
      #pge_menu { background: #151515; color: white !important; }
      .app-name-font { color: white !important; }
      #StudentProfilePESUContent { background: #262626; color: white !important; }
      .events-announcements { background: #000; color: orange !important; }
      .anc-text { color: orange !important; }
      .panel-default { background: #161616; color: orange !important; }
      .panel-heading { background: #000 !important; color: orange !important; }
      #semesters { background: #000 !important; color: white !important; }
      tr:hover { background: #000 !important; color: white !important; }
      thead { background: #000 !important; }
      th { color: white !important; }
      .tab-content { background: #262626 !important; color: white !important; }
      #courselistunit > li > a { background: #151515 !important; color: orange !important; }
      #courseContentCategory > li > a { background: #121212 !important; color: orange !important; }
      #courseMaterialContent > li > a { background: #121212 !important; color: orange !important; }
      .link-preview { background: #121212 !important; }
      .coursecontent-navigation-area { background: #121212 !important; color: orange !important; }
      .odd { background: #121212 !important; }
      .even { background: #262626 !important; }
      #assignmentTypeID { background: #000 !important; }
      #showbc { background: #0091cd !important; color: white !important; }
      .pagination > li > a { background: #000 !important; color: orange !important; }
      .form-control { background: #000 !important; color: white !important; }
      iframe { filter: invert(90%) hue-rotate(180deg); }
    `;
    document.head.appendChild(styleTag);

    let fullScreen = document.createElement("a");
    fullScreen.classList = "elem-fullscreen-link";
    fullScreen.href = "javascript:void(0)";

    let fullScreenIcon = document.createElement("span");
    fullScreenIcon.classList = "fa fa-arrows-alt";
    fullScreenIcon.ariaHidden = true;

    const fullScreenParent = document.getElementsByClassName("link-preview")[0];
    if (fullScreenParent) {
      fullScreen.appendChild(fullScreenIcon);
      fullScreenParent.appendChild(fullScreen);
    }
  }
}

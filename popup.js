document.getElementById("toggle-style").addEventListener("click", () => {
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
      body { 
      background: #000; 
      color: white !important; 
      }

      #pge_menu{ 
      background:#151515; 
      color: white !important; 
      }

      .app-name-font{
      color: white !important;
      }
      
      .menu-left{
      
      }

      #StudentProfilePESUContent{
      background:#262626; 
      color: white !important; 
      }

      .events-announcements{
      background:#000; 
      color: orange !important; 
      }

      .anc-text{
      color: orange !important; 
      }

      .panel-default{
      background:#161616; 
      color: orange !important; 
      }

      .panel-heading{
      background:#000 !important; 
      color: orange !important;
      }

      #semesters{
      background:#000 !important; 
      color: white !important;
      }

      tr:hover{
      background:#000 !important; 
      color: white !important;
      }

      thead{
      background:#000 !important; 
      }
      th{
        color: white !important;
      }

      .tab-content{
      background:#262626 !important; 
      color: white !important;
      }

      #courselistunit > li > a{
      background:#151515 !important; 
      color: orange !important;
      }

      #courseContentCategory > li > a{
      background:#121212 !important; 
      color: orange !important;
      }

      #courseMaterialContent > li > a{
      background:#121212 !important; 
      color: orange !important;
      }

      .link-preview {
      background:#121212 !important; 
      }

      .coursecontent-navigation-area{
      background:#121212 !important; 
      color: orange !important;
      }

      .odd{
      background:#121212 !important; 
      }

      .even{
      background:#262626 !important; 
      }

      #assignmentTypeID{
      background:#000 !important; 
      }
      
      #showbc{
      background:#0091cd !important; 
      color: white !important;
      }

      .pagination > li > a{
      background:#000 !important; 
      color: orange !important;
      }

      .form-control{
      background:#000 !important; 
      color: white !important;
      }

      `;
      document.head.appendChild(styleTag);
  }
}

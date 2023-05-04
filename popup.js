document.addEventListener("DOMContentLoaded", function () {
    const openLinkButton = document.getElementById("openLinkButton");
  
    openLinkButton.addEventListener("click", function () {
      chrome.tabs.create({ url: "http://localhost:3000" });
    });
  });
  
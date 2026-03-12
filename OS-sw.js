// Open popup for each new chrome window
chrome.windows.onCreated.addListener((window) => {
  chrome.action.openPopup();
})


// Look up on Google a picture of a cat
document.getElementById('searchButton').addEventListener('click', () => {
    chrome.tabs.create({ url: "https://www.google.com/search?q=cats"});
});
// background.js
console.log("Background script loaded");

// This listener waits for a click on the extension icon
chrome.action.onClicked.addListener((tab) => {
    console.log("Extension icon clicked");

    // Run the script to remove text on the active tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["scripts/remove_text.js"],
    });
});

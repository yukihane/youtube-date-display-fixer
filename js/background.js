chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    console.log("complete");
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["js/replace.js"],
    });
  }
});

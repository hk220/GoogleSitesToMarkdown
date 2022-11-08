chrome.action.onClicked.addListener(async (tab) => {
  console.log(`Action trigged on ${tab.url}`);
  chrome.tabs.sendMessage(tab.id, "hello");
});

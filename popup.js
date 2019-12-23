$('#js-only-live').click(function (){
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "ONLY_LIVE");
  });
});
$('#js-show-all').click(function (){
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "SHOW_ALL");
  });
});

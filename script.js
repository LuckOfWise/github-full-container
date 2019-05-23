chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		setContainerStyle();
	}
});

function setContainerStyle() {
  const containerLg = document.getElementsByClassName('container-lg');
  for (var i = 0; i < containerLg.length; i++) {
    containerLg[i].style.width = '100%';
    containerLg[i].style.maxWidth = '100%';
  }
  const container = document.getElementsByClassName('container');
  for (var i = 0; i < container.length; i++) {
    container[i].style.width = '100%';
    container[i].style.maxWidth = '100%';
    container[i].style.paddingLeft = '16px';
    container[i].style.paddingRight = '16px';
  }
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "ONLY_LIVE") {
		$('.room-participations .participation.online').each(function(){      
      if ($(this).data('icon') && $(this).data('icon').length > 0 && $(this).data('icon').indexOf('https://world-data-tokyo.s3.amazonaws.com/uploads/user/image/') == 0) {
        $(this).css('display', 'none');
      }
    });
  }
  if (request == 'SHOW_ALL') {
		$('.room-participations .participation.online').css('display', 'inline-block');
	}
});

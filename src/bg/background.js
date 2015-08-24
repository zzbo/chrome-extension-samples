var data = {};

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	console.log('background.js');
	data.request = request;
	data.sender = sender;
	data.sendResponse = sendResponse;
	console.log(request);
	console.log(sender);
	console.log(sendResponse);
	console.log('--------------------');
	console.log(chrome.browserAction);
	//chrome.pageAction.show(sender.tab.id);
	sendResponse();
});
document.addEventListener('DOMContentLoaded', function () {
	var data = chrome.extension.getBackgroundPage().data;
	console.log(data);
});

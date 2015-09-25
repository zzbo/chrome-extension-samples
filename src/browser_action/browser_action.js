$(function () {
	//var data = chrome.extension.getBackgroundPage().data;
	/*console.log('browser_action.js');
    console.log(data);
    console.log('---------------------');
    console.log($('#mainPopup').length);*/

    var jqCheckImgContainer = $('#J_checkImgContainer');
    var jqCheckImgBtn = $('#J_checkImgBtn');

    jqCheckImgBtn.on('click', function () {
    	var imgContainer = jqCheckImgContainer.val();
    	
    	/*chrome.extension.sendMessage({
    		cmd: 'checkImg',
    		container : imgContainer,
    	}, function (res) {
    		console.log('res', res);
    	});*/

        chrome.tabs.query({
            currentWindow: true,
            active: true
        }, function(tabs) {
            // Note that sending a message to a content script is different
            chrome.tabs.sendMessage(tabs[0].id, {
                message:'getPageDOM'
            }, function(response) {
                console.log(response);
            });
        });
    });
});



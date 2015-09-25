var data = {};

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    /*console.log('background.js');
    console.log(request);
    console.log(sender);
    console.log(sendResponse);
    console.log(chrome.browserAction);
    console.log('--------------------');*/

    /*data.request = request;
    data.sender = sender;
    data.sendResponse = sendResponse;*/
    
    /*
        chrome.browserAction.show(sender.tab.id);
        ------------- chrome.browserAction -------------
        disable: ()  //禁用插件功能
        enable: ()   //启用插件功能
        getBadgeBackgroundColor: ()   //获取浏览器按钮上的文字背景颜色
        getBadgeText: () //获取浏览器按钮上的文字，如果没有指定标签页，则返回用于所有标签页的文字。
        getPopup: () //获取设置为浏览器按钮弹出内容的HTML文档。
        getTitle: () //获取浏览器按钮的标题
        onClicked: Event //单击浏览器按钮时发生。如果浏览器按钮有弹出菜单则不会触发该事件。
        setBadgeBackgroundColor: () //设置文字的背景颜色
        setBadgeText: () //设置浏览器按钮上的文字，显示在图标上。
        setIcon: () //设置浏览器按钮的图标。图标既可以指定为图片文件的路径，也可以指定来自canvas元素的像素数据，或者这两者中任意一个的词典。path或imageData属性中有且只有一个必须指定。
        setPopup: () //设置当用户单击浏览器按钮时显示为弹出菜单的HTML文档。
        setTitle: () //设置浏览器图标的标题，显示在工具提示中
    */
   
    console.log(request);

    sendResponse({'arr': 'g_newsArr'});

    chrome.extension.sendMessage({
        'checkImgResult' : {
            a : 1,
            b : 2
        }
    });
});





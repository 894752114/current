$("#open_background").click(function () {
    window.open(chrome.extension.getURL('background.html'));
})
$("#set_storage").click(function () {
    console.log(chrome);
    chrome.storage.local.set({ color: 'red' }, function () {
        console.log("保存成功!");
        chrome.storage.local.get('color', function(data){
            console.log(data);
        })
    })
})
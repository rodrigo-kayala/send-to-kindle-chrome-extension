// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    debugger;
    chrome.storage.sync.get({
        ksKindleEmail: '',
        ksSmtpServer: '',
        ksSmtpPort: '',
        ksSenderAddress: '',
        ksSenderUsername: '',
        ksSenderPassword: '',
        ksServerUrl: ''
    }, function(data) {
         if (checkData(data)) {
             console.log('Sending to kindle document ' + tab.url);

             chrome.tabs.executeScript(tab.id, {
                 code: "document.querySelector('.reader_content').innerHTML;"
             }, function(val) {
                 debugger;
                 alert('Sending to kindle...');
                 $.post(
                     data.ksServerUrl,
                     JSON.stringify({
                         data:val[0],
                         kindleEmail: data.ksKindleEmail,
                         smtpServer: data.ksSmtpServer,
                         smtpPort: data.ksSmtpPort,
                         senderAddress: data.ksSenderAddress,
                         senderUsername: data.ksSenderUsername,
                         senderPassword: data.ksSenderPassword
                     }),
                     function(data) {alert( "Send to kindle success." );},
                     'json');
             });
         } else {
            chrome.runtime.openOptionsPage();
         }
    });
});

function checkData(data) {
    return (data &&
        data.ksKindleEmail &&
        data.ksSmtpServer &&
        data.ksSmtpPort &&
        data.ksSenderAddress &&
        data.ksSenderUsername &&
        data.ksSenderPassword &&
        data.ksServerUrl)
}


function sendData(data, tab) {

}

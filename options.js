function save_options() {
    var kindleEmail = document.getElementById('ksKindleEmail').value;
    var smtpServer = document.getElementById('ksSmtpServer').value;
    var smtpPort = document.getElementById('ksSmtpPort').value;
    var senderAddress = document.getElementById('ksSenderAddress').value;
    var senderUsername = document.getElementById('ksSenderUsername').value;
    var senderPassword = document.getElementById('ksSenderPassword').value;
    var serverUrl = document.getElementById('ksServerUrl').value;

    chrome.storage.sync.set({
        ksKindleEmail: kindleEmail,
        ksSmtpServer: smtpServer,
        ksSmtpPort: smtpPort,
        ksSenderAddress: senderAddress,
        ksSenderUsername: senderUsername,
        ksSenderPassword: senderPassword,
        ksServerUrl: serverUrl
    }, function() {
        var status = document.getElementById('status');
        status.style.display = "";
        setTimeout(function() {
            status.style.display = "none";
        }, 4000);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        ksKindleEmail: '',
        ksSmtpServer: '',
        ksSmtpPort: '',
        ksSenderAddress: '',
        ksSenderUsername: '',
        ksSenderPassword: '',
        ksServerUrl: ''
    }, function(items) {
        document.getElementById('ksKindleEmail').value = items.ksKindleEmail;
        document.getElementById('ksSmtpServer').value = items.ksSmtpServer;
        document.getElementById('ksSmtpPort').value = items.ksSmtpPort;
        document.getElementById('ksSenderAddress').value = items.ksSenderAddress;
        document.getElementById('ksSenderUsername').value = items.ksSenderUsername;
        document.getElementById('ksSenderPassword').value = items.ksSenderPassword;
        document.getElementById('ksSenderUrl').value = items.ksServerUrl;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

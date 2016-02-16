function save_options() {
    var kindleEmail = document.getElementById('ksKindleEmail').value;
    var smtpServer = document.getElementById('ksSmtpServer').value;
    var smtpPort = document.getElementById('ksSmtpPort').value;
    var senderAddress = document.getElementById('ksSenderAddress').value;
    var senderUsername = document.getElementById('ksSenderUsername').value;
    var senderPassword = document.getElementById('ksSenderPassword').value;

    chrome.storage.sync.set({
        ksKindleEmail: kindleEmail,
        ksSmtpServer: smtpServer,
        ksSmtpPort: smtpPort,
        ksSenderAddress: senderAddress,
        ksSenderUsername: senderUsername,
        ksSenderPassword: senderPassword
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        ksKindleEmail: '',
        ksSmtpServer: '',
        ksSmtpPort: '',
        ksSenderAddress: '',
        ksSenderUsername: '',
        ksSenderPassword: ''
    }, function(items) {
        document.getElementById('ksKindleEmail').value = items.ksKindleEmail;
        document.getElementById('ksSmtpServer').value = items.ksSmtpServer;
        document.getElementById('ksSmtpPort').value = items.ksSmtpPort;
        document.getElementById('ksSenderAddress').value = items.ksSenderAddress;
        document.getElementById('ksSenderUsername').value = items.ksSenderUsername;
        document.getElementById('ksSenderPassword').value = items.ksSenderPassword;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

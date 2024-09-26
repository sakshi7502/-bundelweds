document.getElementById('chat-btn').addEventListener('click', function() {
    let chatBox = document.getElementById('chat-box');
    if (chatBox.style.display === 'block') {
        chatBox.style.display = 'none';
    } else {
        chatBox.style.display = 'block';
        chatBox.innerHTML = '<p>Welcome! How can we help you?</p><input type="text" placeholder="Type your message...">';
    }
});

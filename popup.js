const apiSwitch = document.getElementById('use-browser-ai')
const apiKeyInput = document.getElementById('ai-api-key')

apiSwitch.addEventListener('change', updateInputState);

function updateInputState() {
    if (apiSwitch.checked) {
        apiKeyInput.disabled = true;
        apiKeyInput.required = false;
        apiKeyInput.value = "";
        apiKeyInput.placeholder = "Not Needed";
    } else {
        apiKeyInput.disabled = false;
        apiKeyInput.required = true;
        apiKeyInput.placeholder = "AI API Key";
    }
}

updateInputState();
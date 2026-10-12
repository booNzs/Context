const apiSwitch = document.getElementById('use-browser-ai')
const apiKeyInput = document.getElementById('ai-api-key')

apiSwitch.addEventListener('change', updateInputState);

function updateInputState() {
    if (apiSwitch.checked) {
        apiKeyInput.disabled = true;
        apiKeyInput.required = false;
        apiKeyInput.value = "";
    } else {
        apiKeyInput.disabled = false;
        apiKeyInput.required = true;
    }
}

updateInputState();
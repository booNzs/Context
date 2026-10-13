const apiSwitch = document.getElementById('use-browser-ai')
const apiKeyInput = document.getElementById('ai-api-key')
const autoSwitch = document.getElementById("give-context-auto")

apiSwitch.addEventListener('change', updateInputState);

apiSwitch.addEventListener("change", saveSettings);

autoSwitch.addEventListener("change", saveSettings);

apiKeyInput.addEventListener("input", saveSettings);

function updateInputState() {
    if (apiSwitch.checked) {
        apiKeyInput.disabled = true;
        apiKeyInput.required = false;
        apiKeyInput.placeholder = "Not Needed";
    } else {
        apiKeyInput.disabled = false;
        apiKeyInput.required = true;
        apiKeyInput.placeholder = "AI API Key";
    }
}

async function loadSettings() {
    const settings = await chrome.storage.local.get({
        useBrowserAI: false,
        autoContext: false,
        apiKey: ""
    });

    apiSwitch.checked = settings.useBrowserAI;
    autoSwitch.checked = settings.autoContext;
    apiKeyInput.value = settings.apiKey;

    updateInputState();
}

async function saveSettings() {
    await chrome.storage.local.set({
        useBrowserAI: apiSwitch.checked,
        autoContext: autoSwitch.checked,
        apiKey: apiKeyInput.value
    });
}

(async () => {
    await loadSettings();
})();
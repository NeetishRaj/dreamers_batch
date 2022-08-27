let textarea, saveNotes, save_interval;
const AUTO_SAVE_KEY = "autosave-data";

function init() {
    textarea = document.getElementById('textarea_notes');
    saveNotes = document.getElementById('saveNotes');

    const saved_text = localStorage.getItem(AUTO_SAVE_KEY);
    if(saved_text.length > 0)
        textarea.value = saved_text;

        
    save_interval = setInterval(() => {
        // Get the current text from textarea and save it in localStorage
        if(saveNotes.checked) {
            const current_text = textarea.value;
            localStorage.setItem(AUTO_SAVE_KEY, current_text);
        }
    }, 1000);

}

window.onload = init;
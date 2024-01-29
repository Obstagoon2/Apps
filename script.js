// Dark mode toggle button
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Dark Mode';
    } else {
        toggleButton.textContent = 'Light Mode';
    }
});

// Note-saving and downloading
const noteInput = document.getElementById('note-input');
const saveButton = document.getElementById('save-note');
const downloadLink = document.getElementById('download-link');

saveButton.addEventListener('click', () => {
    const noteText = noteInput.value;
    const blob = new Blob([noteText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.style.display = 'block';
    downloadLink.textContent = 'Download Note';
    downloadLink.download = 'note.txt';
});

function submitForm(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const recipient = document.getElementById('recipient').value;

    // Construct mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;

    // Redirect to Gmail with pre-filled email
    window.location.href = mailtoLink;
}

// Function to save form values in local storage
function saveFormValues() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const recipient = document.getElementById('recipient').value;

    // Save form values in local storage
    localStorage.setItem('savedTitle', title);
    localStorage.setItem('savedBody', body);
    localStorage.setItem('savedRecipient', recipient);
}

// Function to load saved values from local storage
function loadSavedValues() {
    const savedTitle = localStorage.getItem('savedTitle');
    const savedBody = localStorage.getItem('savedBody');
    const savedRecipient = localStorage.getItem('savedRecipient');

    if (savedTitle) document.getElementById('title').value = savedTitle;
    if (savedBody) document.getElementById('body').value = savedBody;
    if (savedRecipient) document.getElementById('recipient').value = savedRecipient;
}

// Attach event listeners to the input fields
document.getElementById('title').addEventListener('input', saveFormValues);
document.getElementById('body').addEventListener('input', saveFormValues);
document.getElementById('recipient').addEventListener('input', saveFormValues);

// Call the loadSavedValues function when the page loads
window.onload = loadSavedValues;

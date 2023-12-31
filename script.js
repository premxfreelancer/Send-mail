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

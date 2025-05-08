// Get the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date
const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};

const formattedDate = new Date(document.lastModified).toLocaleDateString('en-US', options);
document.getElementById('lastModified').textContent = `Last Modification: ${formattedDate.replace(',', '')}`;
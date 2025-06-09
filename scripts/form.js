const products = [
    {
        id: "fc-1888",
        name: "React website",
        averagerating: 4.5
    },
    {
        id: "Games",
        name: "popular games",
        averagerating: 4.7
    },
    {
        id: "React + Tailwind.css+Next.js",
        name: "latest tech stack",
        averagerating: 3.5
    },
    {
        id: "Python code",
        name: "server side rendering",
        averagerating: 3.9
    },
    {
        id: "CSharp",
        name: "backend costs",
        averagerating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', function() {
    populateProductSelect();
    setupFormValidation();
    setDefaultDate();
});


function populateProductSelect() {
    const productSelect = document.getElementById('productName');
    
    
    const placeholder = productSelect.querySelector('option[disabled]');
    productSelect.innerHTML = '';
    productSelect.appendChild(placeholder);
    
  
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}


function setupFormValidation() {
    const form = document.getElementById('reviewForm');
    const requiredFields = form.querySelectorAll('[required]');
    
  
    requiredFields.forEach(field => {
        field.addEventListener('blur', validateField);
        field.addEventListener('input', clearFieldError);
    });
    
   
    form.addEventListener('submit', handleFormSubmission);
}


function validateField(event) {
    const field = event.target;
    const isValid = field.checkValidity();
    
   
    field.classList.remove('error');
    removeErrorMessage(field);
    
    if (!isValid) {
        field.classList.add('error');
        showErrorMessage(field);
    }
}


function clearFieldError(event) {
    const field = event.target;
    field.classList.remove('error');
    removeErrorMessage(field);
}


function showErrorMessage(field) {
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) return;
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'var(--error-color)';
    errorDiv.style.fontSize = 'var(--font-size-sm)';
    errorDiv.style.marginTop = 'var(--spacing-xs)';
    
    let message = 'This field is required.';
    
    if (field.type === 'date') {
        message = 'Please select a valid date.';
    } else if (field.name === 'rating') {
        message = 'Please select a rating.';
    } else if (field.name === 'productName') {
        message = 'Please select a product.';
    }
    
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}


function removeErrorMessage(field) {
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}


function setDefaultDate() {
    const dateField = document.getElementById('installDate');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateField.max = formattedDate; // Prevent future dates
}


function handleFormSubmission(event) {
    const form = event.target;
    const isValid = form.checkValidity();
    
    if (!isValid) {
        event.preventDefault();
        
        
        const firstInvalidField = form.querySelector(':invalid');
        if (firstInvalidField) {
            firstInvalidField.focus();
            validateField({ target: firstInvalidField });
        }
        
        
        showFormError('Please fill in all required fields correctly.');
        return false;
    }
    
  
    clearFormError();
   
    return true;
}


function showFormError(message) {
    clearFormError();
    
    const form = document.getElementById('reviewForm');
    const errorDiv = document.createElement('div');
    errorDiv.id = 'form-error';
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        background-color: #fef2f2;
        border: 1px solid #fecaca;
        color: var(--error-color);
        padding: var(--spacing-sm);
        border-radius: var(--radius-md);
        margin-bottom: var(--spacing-md);
        text-align: center;
        font-weight: 600;
    `;
    errorDiv.textContent = message;
    
    form.insertBefore(errorDiv, form.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(clearFormError, 5000);
}


function clearFormError() {
    const existingError = document.getElementById('form-error');
    if (existingError) {
        existingError.remove();
    }
}


function enhanceAccessibility() {
   
    const ratingFieldset = document.querySelector('.rating-fieldset');
    if (ratingFieldset) {
        ratingFieldset.setAttribute('role', 'radiogroup');
        ratingFieldset.setAttribute('aria-labelledby', 'rating-legend');
    }
    
    const featuresFieldset = document.querySelector('.features-fieldset');
    if (featuresFieldset) {
        featuresFieldset.setAttribute('role', 'group');
        featuresFieldset.setAttribute('aria-labelledby', 'features-legend');
    }
}


document.addEventListener('DOMContentLoaded', enhanceAccessibility);


const errorStyles = `
    .error {
        border-color: var(--error-color) !important;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
    }
`;

// Inject error styles
const styleSheet = document.createElement('style');
styleSheet.textContent = errorStyles;
document.head.appendChild(styleSheet);

// Footer information
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    copyrightYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last update: ${lastModified}`;
});

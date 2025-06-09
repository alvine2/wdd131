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
    updateReviewCounter();
    displayReviewSummary();
    setupReturnNavigation();
});


function updateReviewCounter() {
    const reviewCountKey = 'wdd131-review-count';
    
 
    let currentCount = parseInt(localStorage.getItem(reviewCountKey)) || 0;
    
    currentCount += 1;
    
   
    localStorage.setItem(reviewCountKey, currentCount.toString());
    
  
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = currentCount;
        
        
        reviewCountElement.parentElement.classList.add('count-updated');
    }
    

    console.log(`Review count updated to: ${currentCount}`);
}


function displayReviewSummary() {
    const urlParams = new URLSearchParams(window.location.search);
    const reviewSummaryContainer = document.getElementById('reviewSummary');
    
    if (!reviewSummaryContainer) return;
    
 
    const hasParams = urlParams.toString().length > 0;
    
    if (!hasParams) {
        reviewSummaryContainer.innerHTML = `
            <div class="no-data-message">
                <p>No review details available. This page should be accessed through form submission.</p>
            </div>
        `;
        return;
    }

    const summaryHTML = createReviewSummaryHTML(urlParams);
    reviewSummaryContainer.innerHTML = summaryHTML;
}


function createReviewSummaryHTML(urlParams) {
    let summaryHTML = '<h3>Review Summary</h3>';
    
  
    const productId = urlParams.get('productName');
    const productName = getProductNameById(productId);
    if (productName) {
        summaryHTML += createSummaryItem('Product', productName);
    }
    
  
    const rating = urlParams.get('rating');
    if (rating) {
        const stars = '★'.repeat(parseInt(rating)) + '☆'.repeat(5 - parseInt(rating));
        summaryHTML += createSummaryItem('Rating', `<span class="rating-stars">${stars}</span> (${rating}/5)`);
    }
    
    
    const installDate = urlParams.get('installDate');
    if (installDate) {
        const formattedDate = formatDate(installDate);
        summaryHTML += createSummaryItem('Installation Date', formattedDate);
    }
    
    
    const features = urlParams.getAll('features');
    if (features.length > 0) {
        const featureTags = features.map(feature => 
            `<span class="feature-tag">${feature}</span>`
        ).join(' ');
        summaryHTML += createSummaryItem('Useful Features', `<div class="features-list">${featureTags}</div>`);
    }
    
   
    const writtenReview = urlParams.get('writtenReview');
    if (writtenReview && writtenReview.trim()) {
        const truncatedReview = truncateText(writtenReview, 150);
        summaryHTML += createSummaryItem('Written Review', `"${truncatedReview}"`);
    }
    
    
    const userName = urlParams.get('userName');
    if (userName && userName.trim()) {
        summaryHTML += createSummaryItem('Reviewer', userName);
    }
    
    return summaryHTML;
}


function createSummaryItem(label, value) {
    return `
        <div class="summary-item">
            <div class="summary-label">${label}:</div>
            <div class="summary-value">${value}</div>
        </div>
    `;
}

function getProductNameById(productId) {
    const product = products.find(p => p.id === productId);
    return product ? product.name : null;
}


function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        return dateString; 
    }
}


function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
}


function setupReturnNavigation() {
    // Add click tracking for analytics (if needed)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonText = this.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);
            
            // Add loading state for primary button
            if (this.classList.contains('btn-primary')) {
                this.style.opacity = '0.8';
                this.style.pointerEvents = 'none';
                
                // Remove loading state after navigation
                setTimeout(() => {
                    this.style.opacity = '';
                    this.style.pointerEvents = '';
                }, 1000);
            }
        });
    });
}


function resetReviewCounter() {
    const reviewCountKey = 'wdd131-review-count';
    localStorage.removeItem(reviewCountKey);
    console.log('Review counter has been reset');
    
  
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = '0';
    }
}


function getReviewStats() {
    const reviewCountKey = 'wdd131-review-count';
    const currentCount = parseInt(localStorage.getItem(reviewCountKey)) || 0;
    
    return {
        totalReviews: currentCount,
        lastAccessed: new Date().toISOString(),
        storageSupported: typeof(Storage) !== "undefined"
    };
}


window.resetReviewCounter = resetReviewCounter;
window.getReviewStats = getReviewStats;

// Add CSS for count update animation
const animationStyles = `
    .count-updated {
        animation: countUpdate 0.8s ease-out;
    }
    
    @keyframes countUpdate {
        0% {
            transform: scale(1);
            background-color: transparent;
        }
        50% {
            transform: scale(1.05);
            background-color: rgba(37, 99, 235, 0.1);
        }
        100% {
            transform: scale(1);
            background-color: transparent;
        }
    }
    
    .no-data-message {
        text-align: center;
        padding: var(--spacing-lg);
        color: var(--text-secondary);
        font-style: italic;
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Add error handling for localStorage
window.addEventListener('error', function(event) {
    console.error('JavaScript error on review page:', event.error);
});

// Check localStorage availability
if (typeof(Storage) === "undefined") {
    console.warn('localStorage is not supported in this browser. Review counter will not persist.');
}

// Performance monitoring
window.addEventListener('load', function() {
    console.log('Review page loaded successfully');
});

// Footer information
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    copyrightYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last update: ${lastModified}`;
});

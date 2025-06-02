document.addEventListener('DOMContentLoaded', () => {
  // Populate current year
  document.getElementById('currentyear').textContent = new Date().getFullYear();

  // Populate last modified date
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

  const products = [
    { id: 'p1', name: 'Product One' },
    { id: 'p2', name: 'Product Two' },
    { id: 'p3', name: 'Product Three' },
    { id: 'p4', name: 'Product Four' }
  ];

  // Populate product dropdown
  const productSelect = document.getElementById('product-name');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  const form = document.getElementById('reviewForm');
  form.addEventListener('submit', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);
  });
});

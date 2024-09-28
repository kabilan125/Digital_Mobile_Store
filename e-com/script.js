// JavaScript for managing the cart and product zoom
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const closeCart = document.querySelector('.close');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cart = [];

// Add product to cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productName = productElement.querySelector('h2').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

// Open cart modal
cartButton.addEventListener('click', () => {
    updateCart();
    cartModal.style.display = 'flex';
});

// Close cart modal
closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Update cart items and total price
function updateCart() {
    cartItemsList.innerHTML = ''; 
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
    document.getElementById('cart-count').textContent = cart.length;
}

// Handling product click to zoom and show modal
const productModal = document.getElementById('product-modal');
const productModalImg = document.getElementById('product-modal-img');
const productModalName = document.getElementById('product-modal-name');
const productModalPrice = document.getElementById('product-modal-price');
const closeProductModal = document.querySelector('.close-product');

// Show the modal when an image is clicked
document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productName = productElement.querySelector('h2').textContent;
        const productPrice = productElement.querySelector('p').textContent;
        const productImgSrc = event.target.src;

        // Set the modal content
        productModalImg.src = productImgSrc;
        productModalName.textContent = productName;
        productModalPrice.textContent = productPrice;

        // Show the modal
        productModal.style.display = 'flex';
    });
});

// Close the product modal when the close button is clicked
closeProductModal.addEventListener('click', () => {
    productModal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
productModal.addEventListener('click', (event) => {
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
});

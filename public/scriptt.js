// Product Data
const products = [
    // Birthday Collection
    { id: 1, name: 'Birthday Celebration', price: 58, image: 'https://images.unsplash.com/photo-1667489024245-7beb09ac43c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Vibrant mixed blooms perfect for birthdays', category: 'Birthday' },
    { id: 2, name: 'Cheerful Daisies', price: 42, image: 'https://images.unsplash.com/photo-1610056385356-45c56142f6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Happy daisies to brighten any birthday', category: 'Birthday' },
    { id: 3, name: 'Colorful Mix', price: 52, image: 'https://images.unsplash.com/photo-1642728265490-2ea6c3320880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'A joyful mix for birthday celebrations', category: 'Birthday' },
    
    // Mother's Day Collection
    { id: 4, name: 'Pink Carnations', price: 48, image: 'https://images.unsplash.com/photo-1666188855175-1aff7091f561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: "Classic carnations for Mother's Day", category: "Mother's Day" },
    { id: 5, name: 'Rose Romance', price: 65, image: 'https://images.unsplash.com/photo-1754731995953-3e588560d7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Elegant pink roses for Mom', category: "Mother's Day" },
    { id: 6, name: 'Peony Perfection', price: 72, image: 'https://images.unsplash.com/photo-1588457776180-4206b4909301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: "Luxurious peonies she'll adore", category: "Mother's Day" },
    
    // Casual/Just Because Collection
    { id: 7, name: 'Pure Tulips', price: 38, image: 'https://images.unsplash.com/photo-1570030467891-0c0e47ed6e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Simple elegance for any day', category: 'Casual' },
    { id: 8, name: 'Spring Tulips', price: 44, image: 'https://images.unsplash.com/photo-1580403072903-36afa4f4c9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Fresh tulips to brighten the day', category: 'Casual' },
    { id: 9, name: 'Sunny Days', price: 52, image: 'https://images.unsplash.com/photo-1629386255808-c3ceb405173c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Cheerful sunflowers for someone special', category: 'Casual' },
    { id: 10, name: 'Lavender Dreams', price: 42, image: 'https://images.unsplash.com/photo-1620661366618-92f3e77f332d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Calming lavender for relaxation', category: 'Casual' },
    
    // Romantic Collection
    { id: 11, name: 'Red Rose Romance', price: 75, image: 'https://images.unsplash.com/photo-1712677927853-4481a1c078bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Classic red roses for romance', category: 'Romantic' },
    { id: 12, name: 'Elegant Lilies', price: 62, image: 'https://images.unsplash.com/photo-1653267409726-a77cd6b3aa78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Sophisticated white lilies', category: 'Romantic' },
    { id: 13, name: 'Orchid Elegance', price: 85, image: 'https://images.unsplash.com/photo-1759549885072-ea7f9fc57bcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Exotic orchids for a special someone', category: 'Romantic' },
    { id: 14, name: 'Blue Hydrangeas', price: 68, image: 'https://images.unsplash.com/photo-1629379555555-79c361b3736b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Stunning blue hydrangeas', category: 'Romantic' }
];

// State Management
let currentUser = null;
let cartItems = [];
let favorites = [];
let currentCategory = 'All';
let isLoginMode = true;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    loadUserFromStorage();
    loadCartFromStorage();
    loadFavoritesFromStorage();
    renderProducts();
    updateUI();
    setupEventListeners();
    handleNavbarScroll();
});

// Event Listeners
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Auth form
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', handleAuthSubmit);
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

// Navbar Scroll Handler
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Smooth Scroll
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    mobileMenu.classList.toggle('show');
    
    if (mobileMenu.classList.contains('show')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Authentication Functions
function loadUserFromStorage() {
    const userData = localStorage.getItem('bloomelle_user');
    if (userData) {
        currentUser = JSON.parse(userData);
    }
}

function saveUserToStorage() {
    if (currentUser) {
        localStorage.setItem('bloomelle_user', JSON.stringify(currentUser));
    } else {
        localStorage.removeItem('bloomelle_user');
    }
}

function openAuthModal() {
    document.getElementById('authModal').classList.add('show');
    isLoginMode = true;
    updateAuthModal();
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('show');
    document.getElementById('authForm').reset();
    document.getElementById('authError').style.display = 'none';
}

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    updateAuthModal();
}

function updateAuthModal() {
    const title = document.getElementById('authTitle');
    const subtitle = document.getElementById('authSubtitle');
    const nameGroup = document.getElementById('nameGroup');
    const passwordHint = document.getElementById('passwordHint');
    const submitBtn = document.getElementById('authSubmit');
    const toggleText = document.getElementById('authToggleText');
    
    if (isLoginMode) {
        title.textContent = 'Welcome Back';
        subtitle.textContent = 'Sign in to access your account';
        nameGroup.style.display = 'none';
        passwordHint.style.display = 'none';
        submitBtn.textContent = 'Sign In';
        toggleText.innerHTML = "Don't have an account? <button onclick='toggleAuthMode()'>Sign up</button>";
    } else {
        title.textContent = 'Join Bloomelle';
        subtitle.textContent = 'Create an account to get started';
        nameGroup.style.display = 'block';
        passwordHint.style.display = 'block';
        submitBtn.textContent = 'Create Account';
        toggleText.innerHTML = "Already have an account? <button onclick='toggleAuthMode()'>Sign in</button>";
    }
    
    document.getElementById('authError').style.display = 'none';
}

function handleAuthSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const name = document.getElementById('authName').value;
    const errorDiv = document.getElementById('authError');
    
    if (isLoginMode) {
        // Login
        const users = JSON.parse(localStorage.getItem('bloomelle_users') || '{}');
        
        if (users[email] && users[email].password === password) {
            currentUser = { email, name: users[email].name };
            saveUserToStorage();
            updateUI();
            closeAuthModal();
            showToast('Welcome back!');
        } else {
            errorDiv.textContent = 'Invalid email or password';
            errorDiv.style.display = 'block';
        }
    } else {
        // Signup
        if (!name) {
            errorDiv.textContent = 'Please enter your name';
            errorDiv.style.display = 'block';
            return;
        }
        
        const users = JSON.parse(localStorage.getItem('bloomelle_users') || '{}');
        
        if (users[email]) {
            errorDiv.textContent = 'An account with this email already exists';
            errorDiv.style.display = 'block';
            return;
        }
        
        users[email] = { password, name };
        localStorage.setItem('bloomelle_users', JSON.stringify(users));
        
        currentUser = { email, name };
        saveUserToStorage();
        updateUI();
        closeAuthModal();
        showToast('Account created successfully!');
    }
}

function handleLogout() {
    currentUser = null;
    saveUserToStorage();
    updateUI();
    showToast('Logged out successfully');
}

function handleMobileAuth() {
    if (currentUser) {
        handleLogout();
    } else {
        openAuthModal();
    }
    toggleMobileMenu();
}

// Cart Functions
function loadCartFromStorage() {
    const cartData = localStorage.getItem('bloomelle_cart');
    if (cartData) {
        cartItems = JSON.parse(cartData);
    }
}

function saveCartToStorage() {
    localStorage.setItem('bloomelle_cart', JSON.stringify(cartItems));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateUI();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    saveCartToStorage();
    updateUI();
    renderCart();
}

function updateQuantity(productId, delta) {
    const item = cartItems.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        updateUI();
        renderCart();
    }
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cartItems = [];
        saveCartToStorage();
        updateUI();
        renderCart();
        showToast('Cart cleared');
    }
}

function openCart() {
    document.getElementById('cartModal').classList.add('show');
    renderCart();
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('show');
}

function renderCart() {
    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');
    
    if (cartItems.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                </div>
                <h3>Your cart is empty</h3>
                <p>Add some beautiful flowers to get started</p>
                <button onclick="closeCart()">Continue Shopping</button>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartBody.innerHTML = `
            <div class="cart-items">
                ${cartItems.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <h3>${item.name}</h3>
                            <p class="cart-item-category">${item.category}</p>
                            <div class="cart-item-controls">
                                <div class="quantity-controls">
                                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <line x1="5" y1="12" x2="19" y2="12"/>
                                        </svg>
                                    </button>
                                    <span class="quantity-value">${item.quantity}</span>
                                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <line x1="12" y1="5" x2="12" y2="19"/>
                                            <line x1="5" y1="12" x2="19" y2="12"/>
                                        </svg>
                                    </button>
                                </div>
                                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        </div>
                        <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"/>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
        cartFooter.style.display = 'block';
    }
}

// Favorites Functions
function loadFavoritesFromStorage() {
    const favData = localStorage.getItem('bloomelle_favorites');
    if (favData) {
        favorites = JSON.parse(favData);
    }
}

function saveFavoritesToStorage() {
    localStorage.setItem('bloomelle_favorites', JSON.stringify(favorites));
}

function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    
    saveFavoritesToStorage();
    renderProducts();
}

// Products Functions
function filterCategory(category) {
    currentCategory = category;
    
    // Update active button
    const buttons = document.querySelectorAll('.category-filters button');
    buttons.forEach(btn => {
        if (btn.textContent === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const filteredProducts = currentCategory === 'All' 
        ? products 
        : products.filter(p => p.category === currentCategory);
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <span class="product-category">${product.category}</span>
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
            </div>
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// UI Update Functions
function updateUI() {
    // Update cart count
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    const mobileCartCountEl = document.getElementById('mobileCartCount');
    
    cartCountEl.textContent = cartCount;
    mobileCartCountEl.textContent = cartCount > 0 ? `(${cartCount})` : '';
    
    if (cartCount > 0) {
        cartCountEl.classList.add('show');
    } else {
        cartCountEl.classList.remove('show');
    }
    
    // Update user display
    const userDisplay = document.getElementById('userDisplay');
    const userName = document.getElementById('userName');
    const signInBtn = document.getElementById('signInBtn');
    const mobileUserDisplay = document.getElementById('mobileUserDisplay');
    const mobileUserName = document.getElementById('mobileUserName');
    const mobileAuthBtn = document.getElementById('mobileAuthBtn');
    
    if (currentUser) {
        userDisplay.style.display = 'flex';
        userName.textContent = currentUser.name;
        signInBtn.style.display = 'none';
        
        mobileUserDisplay.style.display = 'block';
        mobileUserName.textContent = currentUser.name;
        mobileAuthBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Sign Out
        `;
    } else {
        userDisplay.style.display = 'none';
        signInBtn.style.display = 'flex';
        
        mobileUserDisplay.style.display = 'none';
        mobileAuthBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
            Sign In
        `;
    }
}

// Form Handlers
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formSuccess = document.getElementById('formSuccess');
    const form = document.getElementById('contactForm');
    
    formSuccess.style.display = 'block';
    form.style.display = 'none';
    
    setTimeout(() => {
        formSuccess.style.display = 'none';
        form.style.display = 'block';
        form.reset();
    }, 3000);
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    showToast('Thank you for subscribing!');
    e.target.reset();
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Close modals on outside click
window.addEventListener('click', function(e) {
    const authModal = document.getElementById('authModal');
    const cartModal = document.getElementById('cartModal');
    
    if (e.target === authModal) {
        closeAuthModal();
    }
    
    if (e.target === cartModal) {
        closeCart();
    }
});

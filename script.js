// Product Data
const products = [
    // Birthday Collection (11 items)
    { id: 1, name: 'Colorful Mix', price: 58, image: 'https://images.unsplash.com/photo-1667489024245-7beb09ac43c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Vibrant mixed blooms perfect for birthdays', category: 'Birthday' },
    { id: 2, name: 'Cheerful Daisies', price: 42, image: 'https://images.unsplash.com/photo-1610056385356-45c56142f6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Happy daisies to brighten any birthday', category: 'Birthday' },
    { id: 3, name: 'Birthday Celebration', price: 52, image: 'https://images.unsplash.com/photo-1642728265490-2ea6c3320880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'A joyful mix for birthday celebrations', category: 'Birthday' },
    { id: 4, name: 'Rainbow Delight', price: 64, image: 'https://images.unsplash.com/photo-1567113211587-73b0f58c97e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Colorful rainbow bouquet for special days', category: 'Birthday' },
    { id: 5, name: 'Gerbera Joy', price: 48, image: 'https://images.unsplash.com/photo-1683073022704-c14d8002ee63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Vibrant gerbera daisies full of joy', category: 'Birthday' },
    { id: 6, name: 'Birthday Bliss', price: 56, image: 'https://images.unsplash.com/photo-1689061732262-2f8a68fa99cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Stunning arrangement for birthday wishes', category: 'Birthday' },
    { id: 7, name: 'Party Blooms', price: 54, image: 'https://images.unsplash.com/photo-1604925828072-87e23dde39eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Festive flowers for birthday parties', category: 'Birthday' },
    { id: 8, name: 'Vibrant Wishes', price: 62, image: 'https://images.unsplash.com/photo-1717028055435-2d8f9e1e91e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Bright and cheerful birthday bouquet', category: 'Birthday' },
    { id: 9, name: 'Sunny Days', price: 52, image: 'https://images.unsplash.com/photo-1629386255808-c3ceb405173c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Cheerful sunflowers for birthdays', category: 'Birthday' },
    { id: 10, name: 'Yellow Sunshine', price: 46, image: 'https://images.unsplash.com/photo-1673277848241-86e145cd7112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Bright yellow blooms for happiness', category: 'Birthday' },
    { id: 11, name: 'Spring Meadow', price: 58, image: 'https://images.unsplash.com/photo-1615669527168-8766827a7159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Fresh spring flowers for celebration', category: 'Birthday' },
    
    // Mother's Day Collection (11 items)
    { id: 12, name: 'Pink Carnations', price: 48, image: 'https://images.unsplash.com/photo-1666188855175-1aff7091f561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: "Classic carnations for Mother's Day", category: "Mother's Day" },
    { id: 13, name: 'Rose Romance', price: 65, image: 'https://images.unsplash.com/photo-1754731995953-3e588560d7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Elegant pink roses for Mom', category: "Mother's Day" },
    { id: 14, name: 'Peony Perfection', price: 72, image: 'https://images.unsplash.com/photo-1588457776180-4206b4909301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: "Luxurious peonies she'll adore", category: "Mother's Day" },
    { id: 15, name: 'Pastel Dream', price: 68, image: 'https://images.unsplash.com/photo-1615352416788-6e95c0bee34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Soft pastel blooms for Mom', category: "Mother's Day" },
    { id: 16, name: 'Pink Blush', price: 58, image: 'https://images.unsplash.com/photo-1760213001704-1ec3ee5c3c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Delicate pink flowers for mothers', category: "Mother's Day" },
    { id: 17, name: 'Elegant Rose Garden', price: 76, image: 'https://images.unsplash.com/photo-1667857891884-56493d5a92be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Premium rose arrangement', category: "Mother's Day" },
    { id: 18, name: 'Luxury Arrangement', price: 85, image: 'https://images.unsplash.com/photo-1724847764267-12775ec49657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Luxurious flowers for special moms', category: "Mother's Day" },
    { id: 19, name: 'Pink & White Elegance', price: 64, image: 'https://images.unsplash.com/photo-1711464512469-d5376f5bc18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Classic pink and white combination', category: "Mother's Day" },
    { id: 20, name: 'Garden Rose Bouquet', price: 78, image: 'https://images.unsplash.com/photo-1726900711789-46d316af9bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Beautiful garden roses', category: "Mother's Day" },
    { id: 21, name: 'Ranunculus Beauty', price: 66, image: 'https://images.unsplash.com/photo-1678882891382-27d7897b5b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Delicate ranunculus flowers', category: "Mother's Day" },
    { id: 22, name: 'Mothers Day Special', price: 82, image: 'https://images.unsplash.com/photo-1610898763619-6d31c36ca610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Special bouquet for Mom', category: "Mother's Day" },
    
    // Romantic Collection (11 items)
    { id: 23, name: 'Red Rose Romance', price: 75, image: 'https://images.unsplash.com/photo-1712677927853-4481a1c078bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Classic red roses for romance', category: 'Romantic' },
    { id: 24, name: 'Elegant Lilies', price: 62, image: 'https://images.unsplash.com/photo-1653267409726-a77cd6b3aa78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Sophisticated white lilies', category: 'Romantic' },
    { id: 25, name: 'Orchid Elegance', price: 85, image: 'https://images.unsplash.com/photo-1759549885072-ea7f9fc57bcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Exotic orchids for a special someone', category: 'Romantic' },
    { id: 26, name: 'Blue Hydrangeas', price: 68, image: 'https://images.unsplash.com/photo-1629379555555-79c361b3736b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Stunning blue hydrangeas', category: 'Romantic' },
    { id: 27, name: 'Love Bouquet', price: 72, image: 'https://images.unsplash.com/photo-1735212678261-8cb1275b2a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Perfect expression of love', category: 'Romantic' },
    { id: 28, name: 'Red & Pink Passion', price: 78, image: 'https://images.unsplash.com/photo-1668040823237-4938f85ba4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Passionate red and pink roses', category: 'Romantic' },
    { id: 29, name: 'Wedding Elegance', price: 95, image: 'https://images.unsplash.com/photo-1581720848095-2b72764b08a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Elegant wedding flowers', category: 'Romantic' },
    { id: 30, name: 'Romantic Roses', price: 70, image: 'https://images.unsplash.com/photo-1754731995953-3e588560d7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Soft romantic rose arrangement', category: 'Romantic' },
    { id: 31, name: 'Anemone Love', price: 64, image: 'https://images.unsplash.com/photo-1649938864042-54a21dac35d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Delicate anemone flowers', category: 'Romantic' },
    { id: 32, name: 'Pure Love', price: 88, image: 'https://images.unsplash.com/photo-1711464512469-d5376f5bc18d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Pure white and pink romance', category: 'Romantic' },
    { id: 33, name: 'Passion Red Roses', price: 82, image: 'https://images.unsplash.com/photo-1712677927853-4481a1c078bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Deep red roses for true love', category: 'Romantic' },
    
    // Casual Collection (11 items)
    { id: 34, name: 'Pure Tulips', price: 38, image: 'https://images.unsplash.com/photo-1570030467891-0c0e47ed6e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Simple elegance for any day', category: 'Casual' },
    { id: 35, name: 'Spring Tulips', price: 44, image: 'https://images.unsplash.com/photo-1580403072903-36afa4f4c9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Fresh tulips to brighten the day', category: 'Casual' },
    { id: 36, name: 'Lavender Dreams', price: 42, image: 'https://images.unsplash.com/photo-1620661366618-92f3e77f332d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Calming lavender for relaxation', category: 'Casual' },
    { id: 37, name: 'Purple Lavender', price: 46, image: 'https://images.unsplash.com/photo-1724605948220-ed4db553972d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Soothing purple lavender bunch', category: 'Casual' },
    { id: 38, name: 'Wildflower Medley', price: 40, image: 'https://images.unsplash.com/photo-1628363462308-68313cc1470b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Natural wildflower arrangement', category: 'Casual' },
    { id: 39, name: 'Simple Bouquet', price: 36, image: 'https://images.unsplash.com/photo-1716533505993-1b841a142f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Minimalist flower bouquet', category: 'Casual' },
    { id: 40, name: 'Fresh Cut Flowers', price: 34, image: 'https://images.unsplash.com/photo-1679827952972-e5e3d36cdc70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Fresh seasonal flowers', category: 'Casual' },
    { id: 41, name: 'Spring Mix', price: 48, image: 'https://images.unsplash.com/photo-1615669527168-8766827a7159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Mixed spring flowers', category: 'Casual' },
    { id: 42, name: 'Cheerful Gerberas', price: 44, image: 'https://images.unsplash.com/photo-1683073022704-c14d8002ee63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Bright gerbera daisies', category: 'Casual' },
    { id: 43, name: 'Colorful Delight', price: 50, image: 'https://images.unsplash.com/photo-1642728265490-2ea6c3320880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Colorful mixed flowers', category: 'Casual' },
    { id: 44, name: 'Garden Fresh', price: 42, image: 'https://images.unsplash.com/photo-1726900711789-46d316af9bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Fresh from the garden', category: 'Casual' },
    
    // Planting Flowers Collection (10 items)
    { id: 45, name: 'Potted Geranium', price: 35, image: 'https://images.unsplash.com/photo-1649531373722-66adbea1dec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Beautiful potted flowering plant', category: 'Planting Flowers' },
    { id: 46, name: 'Succulent Garden', price: 28, image: 'https://images.unsplash.com/photo-1653842647611-7939b30598a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Low maintenance succulent collection', category: 'Planting Flowers' },
    { id: 47, name: 'Herb Garden Kit', price: 32, image: 'https://images.unsplash.com/photo-1553275991-b6ba99f234e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Fresh herbs for your kitchen', category: 'Planting Flowers' },
    { id: 48, name: 'Flowering Azalea', price: 42, image: 'https://images.unsplash.com/photo-1762008085255-7e4e1e9c1317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Vibrant azalea in decorative pot', category: 'Planting Flowers' },
    { id: 49, name: 'Seedling Collection', price: 26, image: 'https://images.unsplash.com/photo-1647550232391-f758832be5c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Starter plants for your garden', category: 'Planting Flowers' },
    { id: 50, name: 'Cactus Mix', price: 30, image: 'https://images.unsplash.com/photo-1643717094992-5ab09ef07263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Desert cactus collection', category: 'Planting Flowers' },
    { id: 51, name: 'Indoor Monstera', price: 55, image: 'https://images.unsplash.com/photo-1605260346600-f98d9cf022a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Tropical houseplant for home', category: 'Planting Flowers' },
    { id: 52, name: 'Phalaenopsis Orchid', price: 68, image: 'https://images.unsplash.com/photo-1649531372904-ceaeb352db8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Elegant potted orchid plant', category: 'Planting Flowers' },
    { id: 53, name: 'Fern Planter', price: 38, image: 'https://images.unsplash.com/photo-1714758822287-3d7dd9dae8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Lush green fern in ceramic pot', category: 'Planting Flowers' },
    { id: 54, name: 'Tropical Palm', price: 62, image: 'https://images.unsplash.com/photo-1605036017401-a119c069c319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Indoor tropical palm plant', category: 'Planting Flowers' },
    
    // Seasonal Flowers Collection (10 items)
    { id: 55, name: 'Autumn Harvest', price: 54, image: 'https://images.unsplash.com/photo-1761678484011-31952ac19ad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Warm autumn blooms', category: 'Seasonal Flowers' },
    { id: 56, name: 'Winter Poinsettia', price: 48, image: 'https://images.unsplash.com/photo-1739139697105-6f7f23302b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Classic Christmas flower', category: 'Seasonal Flowers' },
    { id: 57, name: 'Cherry Blossoms', price: 72, image: 'https://images.unsplash.com/photo-1617836250803-24873f080562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Delicate spring cherry blossoms', category: 'Seasonal Flowers' },
    { id: 58, name: 'Summer Sunflowers', price: 46, image: 'https://images.unsplash.com/photo-1657475902155-6693421bb41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Bright summer sunshine', category: 'Seasonal Flowers' },
    { id: 59, name: 'Autumn Dahlias', price: 58, image: 'https://images.unsplash.com/photo-1695279127836-7189324c389a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Vibrant fall dahlias', category: 'Seasonal Flowers' },
    { id: 60, name: 'Fall Chrysanthemums', price: 44, image: 'https://images.unsplash.com/photo-1729353535581-9d0c9a4b4937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Traditional autumn mums', category: 'Seasonal Flowers' },
    { id: 61, name: 'Winter Amaryllis', price: 52, image: 'https://images.unsplash.com/photo-1612868294275-68fc00b8c2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Stunning winter blooms', category: 'Seasonal Flowers' },
    { id: 62, name: 'Spring Daffodils', price: 38, image: 'https://images.unsplash.com/photo-1647405647666-2cf2382e10ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Fresh spring narcissus', category: 'Seasonal Flowers' },
    { id: 63, name: 'Fall Asters', price: 42, image: 'https://images.unsplash.com/photo-1631462684417-8342331fdf4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Purple autumn asters', category: 'Seasonal Flowers' },
    { id: 64, name: 'Winter Hellebores', price: 50, image: 'https://images.unsplash.com/photo-1644206716295-9d2eb6c7baee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', description: 'Elegant winter roses', category: 'Seasonal Flowers' },
];

// State Management
let currentUser = null;
let cartItems = [];
let favorites = [];
let currentCategory = 'All';
let isLoginMode = true;
let pendingCartItem = null; // For card message flow

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    loadUserFromStorage();
    loadCartFromStorage();
    loadFavoritesFromStorage();
    renderProducts();
    updateUI();
    setupEventListeners();
    handleNavbarScroll();
    initHeroSlider();
    setMinDeliveryDate();
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
    
    // Card message character counter
    const cardMessageText = document.getElementById('cardMessageText');
    if (cardMessageText) {
        cardMessageText.addEventListener('input', updateCharCount);
    }
}

// Character counter for card message
function updateCharCount() {
    const text = document.getElementById('cardMessageText').value;
    const charCount = document.getElementById('charCount');
    charCount.textContent = text.length;
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
    
    // Store pending item and open card message modal
    pendingCartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: 1,
        cardMessage: ''
    };
    
    openCardMessageModal();
}

function openCardMessageModal() {
    document.getElementById('cardMessageModal').classList.add('show');
    document.getElementById('cardMessageText').value = pendingCartItem?.cardMessage || '';
    updateCharCount();
}

function closeCardMessageModal() {
    document.getElementById('cardMessageModal').classList.remove('show');
    document.getElementById('cardMessageText').value = '';
    pendingCartItem = null;
}

function skipCardMessage() {
    if (pendingCartItem) {
        addItemToCart(pendingCartItem);
    }
    closeCardMessageModal();
}

function confirmCardMessage() {
    if (pendingCartItem) {
        const message = document.getElementById('cardMessageText').value.trim();
        pendingCartItem.cardMessage = message;
        addItemToCart(pendingCartItem);
    }
    closeCardMessageModal();
}

function addItemToCart(item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
        existingItem.quantity++;
        // Update card message if new one is provided
        if (item.cardMessage) {
            existingItem.cardMessage = item.cardMessage;
        }
    } else {
        cartItems.push(item);
    }
    
    saveCartToStorage();
    updateUI();
    
    if (item.cardMessage) {
        showToast(`${item.name} added with your personal message!`);
    } else {
        showToast(`${item.name} added to cart!`);
    }
}

function editCardMessage(productId) {
    const item = cartItems.find(cartItem => cartItem.id === productId);
    if (item) {
        pendingCartItem = item;
        openCardMessageModal();
    }
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
                            ${item.cardMessage ? `
                                <div class="cart-item-card">
                                    <div class="cart-item-card-label">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                        </svg>
                                        Card Message:
                                    </div>
                                    <p class="cart-item-card-text">"${item.cardMessage}"</p>
                                    <button class="edit-card-btn" onclick="editCardMessage(${item.id})">Edit message</button>
                                </div>
                            ` : `
                                <button class="edit-card-btn" onclick="editCardMessage(${item.id})">+ Add card message</button>
                            `}
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
                                <span class="cart-item-price">AED ${(item.price * item.quantity).toFixed(2)}</span>
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
        document.getElementById('cartTotal').textContent = `AED ${total.toFixed(2)}`;
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
                    <span class="product-price">AED ${product.price}</span>
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
    const cardMessageModal = document.getElementById('cardMessageModal');
    const checkoutModal = document.getElementById('checkoutModal');
    
    if (e.target === authModal) {
        closeAuthModal();
    }
    
    if (e.target === cartModal) {
        closeCart();
    }
    
    if (e.target === cardMessageModal) {
        closeCardMessageModal();
    }
    
    if (e.target === checkoutModal) {
        closeCheckoutModal();
    }
});

// Hero Slider
let currentSlide = 0;
let slideInterval;

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
    // Start automatic slideshow
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

function nextSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Checkout Functions
function openCheckoutModal() {
    if (cartItems.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    // Populate order summary
    const summaryContainer = document.getElementById('checkoutSummary');
    summaryContainer.innerHTML = cartItems.map(item => `
        <div class="checkout-summary-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="checkout-summary-item-details">
                <h4>${item.name}</h4>
                <p>${item.quantity} x AED ${item.price}</p>
            </div>
            <strong>AED ${(item.quantity * item.price).toFixed(2)}</strong>
        </div>
    `).join('');
    
    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal >= 200 ? 0 : 25; // Free delivery over AED 200
    const total = subtotal + deliveryFee;
    
    document.getElementById('checkoutSubtotal').textContent = `AED ${subtotal.toFixed(2)}`;
    document.getElementById('checkoutDelivery').textContent = deliveryFee === 0 ? 'FREE' : `AED ${deliveryFee.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `AED ${total.toFixed(2)}`;
    
    // Pre-fill email if user is logged in
    if (currentUser) {
        document.getElementById('email').value = currentUser.email;
    }
    
    document.getElementById('checkoutModal').classList.add('show');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('show');
    document.getElementById('checkoutForm').reset();
}

function setMinDeliveryDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const dateInput = document.getElementById('deliveryDate');
    if (dateInput) {
        const minDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
        dateInput.value = minDate;
    }
}

function handleCheckout(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        emirate: document.getElementById('emirate').value,
        deliveryDate: document.getElementById('deliveryDate').value,
        deliveryTime: document.getElementById('deliveryTime').value,
        paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
        specialInstructions: document.getElementById('specialInstructions').value,
        items: cartItems,
        subtotal: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    };
    
    formData.deliveryFee = formData.subtotal >= 200 ? 0 : 25;
    formData.total = formData.subtotal + formData.deliveryFee;
    
    // In a real application, you would send this data to a server
    console.log('Order placed:', formData);
    
    // Show success message
    showToast('Order placed successfully! We\'ll contact you shortly.');
    
    // Clear cart
    cartItems = [];
    saveCartToStorage();
    updateUI();
    
    // Close modals
    closeCheckoutModal();
    closeCart();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

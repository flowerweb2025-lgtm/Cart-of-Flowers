// API Configuration
const API_CONFIG = {
    // Change this to your backend URL
    // For local development: 'http://localhost:5000'
    // For production: your deployed backend URL
    BASE_URL: 'http://localhost:5000',
    
    ENDPOINTS: {
        // Auth endpoints
        REGISTER: '/api/auth/register',
        LOGIN: '/api/auth/login',
        PROFILE: '/api/auth/profile',
        
        // Product endpoints
        PRODUCTS: '/api/products',
        PRODUCT_BY_ID: (id) => `/api/products/${id}`,
        
        // Order endpoints
        ORDERS: '/api/orders',
        MY_ORDERS: '/api/orders/my-orders',
        ORDER_BY_NUMBER: (orderNumber) => `/api/orders/${orderNumber}`,
        ORDER_STATUS: (id) => `/api/orders/${id}/status`,
        
        // Admin endpoints
        ADMIN_STATS: '/api/admin/dashboard/stats',
        ADMIN_ORDERS: '/api/admin/orders',
        ADMIN_ORDER_DETAILS: (id) => `/api/admin/orders/${id}`,
        ADMIN_ORDER_STATUS: (id) => `/api/admin/orders/${id}/status`,
        ADMIN_DELETE_ORDER: (id) => `/api/admin/orders/${id}`,
        ADMIN_USERS: '/api/admin/users',
        ADMIN_USER_ROLE: (id) => `/api/admin/users/${id}/role`,
        
        // Health check
        HEALTH: '/api/health'
    }
};

// Helper function to make API calls
async function apiCall(endpoint, options = {}) {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    // Add auth token if available
    const token = localStorage.getItem('bloomelle_token');
    if (token) {
        defaultOptions.headers['Authorization'] = `Bearer ${token}`;
    }
    
    const config = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers
        }
    };
    
    try {
        const response = await fetch(url, config);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'API request failed');
        }
        
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!studentAuth.checkAuth()) return;
    const studentAuth = new AuthSystem('student');

    // Initialize dashboard
    loadMarketplace();
    loadOrders();
    loadWallet();
    initSpendingChart();
    loadRecommendations();
});

// Oladoyin Daniel Codes @08125268335

// Dummy Data
const marketplaceItems = [
    {
        id: 1,
        name: "Used Calculus Textbook",
        price: 3500,
        seller: "Bookstore",
        category: "Academics",
        image: "textbook.jpg"
    },
    {
        id: 2,
        name: "Jollof Rice Combo",
        price: 800,
        seller: "Campus Kitchen",
        category: "Food",
        image: "food.jpg"
    },
    {
        id: 3,
        name: "Wireless Headphones",
        price: 12000,
        seller: "Tech Hub",
        category: "Electronics",
        image: "headphones.jpg"
    }
];

const orders = [
    {
        id: 1001,
        items: ["Jollof Rice ×2", "Water ×1"],
        total: 1800,
        status: "delivered",
        date: "2023-08-15"
    },
    {
        id: 1002,
        items: ["Physics Textbook"],
        total: 4500,
        status: "pending",
        date: "2023-08-14"
    }
];

function loadMarketplace() {
    const grid = document.querySelector('.marketplace-grid');
    grid.innerHTML = marketplaceItems.map(item => `
        <div class="marketplace-item">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h4>${item.name}</h4>
                <div class="item-meta">
                    <span class="seller">${item.seller}</span>
                    <span class="category">${item.category}</span>
                </div>
                <div class="item-price">₦${item.price.toLocaleString()}</div>
                <button class="btn-add-to-cart">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function loadOrders() {
    const orderList = document.querySelector('.order-list');
    orderList.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-info">
                <span class="order-id">#${order.id}</span>
                <span class="order-date">${order.date}</span>
                <div class="items">${order.items.join(', ')}</div>
            </div>
            <div class="order-status">
                <span class="status-${order.status}">${order.status}</span>
                <div class="order-total">₦${order.total}</div>
            </div>
        </div>
    `).join('');
}

function loadWallet() {
    const transactions = [
        { type: "deposit", amount: 20000, date: "2023-08-01" },
        { type: "purchase", amount: -5000, date: "2023-08-05" },
        { type: "purchase", amount: -3000, date: "2023-08-10" }
    ];

    const transactionList = document.querySelector('.transaction-list');
    transactionList.innerHTML = transactions.map(tx => `
        <div class="transaction-item">
            <span>${tx.date}</span>
            <span class="${tx.type}">₦${tx.amount.toLocaleString()}</span>
        </div>
    `).join('');
}

function initSpendingChart() {
    const ctx = document.getElementById('spendingChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Food', 'Books', 'Electronics', 'Others'],
            datasets: [{
                data: [12000, 25000, 15000, 5000],
                backgroundColor: [
                    '#1a73e8',
                    '#4caf50',
                    '#ff9800',
                    '#9c27b0'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

// Oladoyin Daniel Codes @08125268335

function loadRecommendations() {
    const recommendations = [
        {
            name: "Student Desk Lamp",
            price: 4500,
            seller: "Campus Store"
        },
        {
            name: "Python Programming Book",
            price: 6000,
            seller: "Book Exchange"
        }
    ];

    const grid = document.querySelector('.recommendations-grid');
    grid.innerHTML = recommendations.map(item => `
        <div class="recommended-item">
            <h4>${item.name}</h4>
            <div class="item-meta">
                <span>${item.seller}</span>
                <span class="price">₦${item.price.toLocaleString()}</span>
            </div>
            <button class="btn-view">View Item</button>
        </div>
    `).join('');
}

function logout() {
    studentAuth.logout();
}

// Oladoyin Daniel Codes @08125268335
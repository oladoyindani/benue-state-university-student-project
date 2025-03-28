document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!vendorAuth.checkAuth()) return;
    const vendorAuth = new AuthSystem('vendor');

    // Initialize dashboard
    initSalesChart();
    loadRecentOrders();
    loadInventory();
    loadReviews();
});

// Oladoyin Daniel Codes @08125268335

function initSalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Daily Sales',
                data: [15000, 23000, 18200, 24700, 18900, 28700, 21200],
                backgroundColor: 'rgba(52, 152, 219, 0.8)',
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => '₦' + value.toLocaleString()
                    }
                }
            }
        }
    });
}

function loadRecentOrders() {
    // Sample order data
    const orders = [
        {
            id: 'ORD-1001',
            status: 'pending',
            customer: 'John D.',
            items: ['Jollof Rice ×2', 'Bottled Water ×1'],
            total: 1200,
            time: '12:45 PM'
        },
        {
            id: 'ORD-1002',
            status: 'processing',
            customer: 'Sarah M.',
            items: ['Chicken Wrap ×1'],
            total: 700,
            time: '12:30 PM'
        }
    ];

    const orderList = document.querySelector('.order-list');
    orderList.innerHTML = orders.map(order => `
        <div class="order-item ${order.status}">
            <div class="order-info">
                <span class="order-id">#${order.id}</span>
                <span class="customer">${order.customer} · ${order.items.length} items</span>
                <span class="order-time">${order.time}</span>
            </div>
            <div class="order-details">
                <div class="items-list">${order.items.join('<br>')}</div>
                <div class="order-actions">
                    <span class="order-total">₦${order.total}</span>
                    <button class="btn-process">
                        ${order.status === 'pending' ? 'Start Preparing' : 'Mark Complete'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Oladoyin Daniel Codes @08125268335

function loadInventory() {
    // Sample inventory data
    const inventory = [
        {
            name: 'Jollof Rice',
            price: 500,
            stock: 42,
            sales: 128,
            image: 'food-placeholder.jpg'
        },
        {
            name: 'Chicken Wrap',
            price: 700,
            stock: 25,
            sales: 89,
            image: 'food-placeholder.jpg'
        }
    ];

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = inventory.map(item => `
        <tr>
            <td>
                <div class="item-info">
                    <img src="${item.image}" alt="${item.name}">
                    <span>${item.name}</span>
                </div>
            </td>
            <td>₦${item.price}</td>
            <td class="stock-level">
                <div class="stock-bar" style="width: ${(item.stock/50)*100}%"></div>
                <span>${item.stock} left</span>
            </td>
            <td>${item.sales} sold</td>
            <td>
                <button class="btn-edit"><i class="fas fa-edit"></i></button>
                <button class="btn-restock"><i class="fas fa-undo"></i></button>
            </td>
        </tr>
    `).join('');
}

function loadReviews() {
    // Sample review data
    const reviews = [
        {
            user: 'Sarah M.',
            rating: 5,
            text: 'The best jollof rice on campus! Always fresh and delicious.',
            date: '2 hours ago',
            avatar: 'user-avatar.jpg'
        }
    ];

    const reviewList = document.querySelector('.review-list');
    reviewList.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="user-info">
                    <img src="${review.avatar}" alt="${review.user}">
                    <div>
                        <span class="user-name">${review.user}</span>
                        <div class="rating">${'⭐'.repeat(review.rating)}</div>
                    </div>
                </div>
                <span class="review-date">${review.date}</span>
            </div>
            <p class="review-text">"${review.text}"</p>
        </div>
    `).join('');
}

function logout() {
    vendorAuth.logout();
}

// Oladoyin Daniel Codes @08125268335
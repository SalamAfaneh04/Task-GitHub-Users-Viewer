const container = document.getElementById('user-container');
const API_URL = 'https://api.github.com/users';

async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Bonus: Show only the first 10 users
        const topTen = data.slice(0, 10);
        
        displayUsers(topTen);
    } catch (error) {
        console.error("Error fetching data:", error);
        container.innerHTML = "<p>Failed to load users.</p>";
    }
}

function displayUsers(users) {
    // Clear container first
    container.innerHTML = '';

    users.forEach(user => {
        // Create the card div
        const card = document.createElement('div');
        card.classList.add('user-card');

        // Build the inner HTML template
        card.innerHTML = `
            <img src="${user.avatar_url}" alt="${user.login}">
            <h3>${user.login}</h3>
            <a href="${user.html_url}" target="_blank">View Profile</a>
        `;

        // Append to the main container
        container.appendChild(card);
    });
}

// Initial call
fetchUsers();
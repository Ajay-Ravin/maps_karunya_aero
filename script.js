// Initialize the map with a view and zoom level
var map = L.map('map').setView([51.505, -0.09], 13);  // Coordinates for initial view (e.g., London)

// Add OpenStreetMap tile layer (the base map style)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker at a specific location with a popup
L.marker([51.505, -0.09]).addTo(map)
    .bindPopup("A sample marker at the starting point.")
    .openPopup();

// script.js
function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `/search?query=${query}`;
    } else {
        alert('Please enter a search term');
    }
}
// Add event listener for the explore button
document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.querySelector('.explore-btn');
    exploreBtn.addEventListener('click', function() {
        window.location.href = '/explore';
    });
});
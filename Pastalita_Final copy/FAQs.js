document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        const btn = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');

        btn.addEventListener('click', function() {
            content.classList.toggle('show');
        });

        // Close dropdown when clicking outside of it
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                content.classList.remove('show');
            }
        });
    });
});

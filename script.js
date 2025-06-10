<script>
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = navLinks ? navLinks.querySelectorAll('a') : [];

    // Toggle navigation menu on hamburger click
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            navLinks.classList.toggle('show');
            hamburger.setAttribute('aria-expanded', (!isExpanded).toString());
        });
    }

    // Close menu when a navigation link is clicked (on mobile)
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && navLinks && hamburger) {
                navLinks.classList.remove('show');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Ensure menu is closed when window is resized to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks && hamburger) {
            navLinks.classList.remove('show');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Read More button alert (for UI cards)
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert("This button can be linked to full project details or a modal.");
        });
    });
});
</script>

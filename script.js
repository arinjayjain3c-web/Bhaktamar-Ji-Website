document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the menu
        navLinks.classList.toggle('active');
    });

    // Optional: Close the mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
<script>
    const template = document.getElementById('footer-template');
    const container = document.getElementById('footer-container');
    if (template && container) {
    const footerClone = template.content.cloneNode(true);
    container.appendChild(footerClone);

</script>
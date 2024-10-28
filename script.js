window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Link click event listener for smooth page transitions
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));
            
            // Add active class to the clicked link
            link.classList.add('active');
            
            const targetPage = e.target.getAttribute('href');
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = targetPage;
            }, 500); // Wait for the animation before redirect
        });
    });

    // Menu toggle functionality for mobile view
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggle the visibility of the nav links
    });

    // Initial fade-in animation when the page loads
    document.body.classList.add('fade-in');
});

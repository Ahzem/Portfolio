// Add click event listener to all anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Get the href attribute of the clicked link
        const href = this.getAttribute('href');
        
        // Apply left transition class to body
        document.body.classList.add('left-transition');
        
        // Wait for the transition to finish and then navigate to the new page
        setTimeout(() => {
            window.location.href = href;
        }, 500); // Adjust the delay to match the transition duration
    });
});

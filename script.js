// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create falling hearts
    createFallingHearts();
    
    // Add fade-in animation to container
    const container = document.querySelector('.container');
    setTimeout(() => {
        container.classList.add('fade-in');
    }, 100);
    
    // Add fade-in animation to each paragraph with a delay
    const paragraphs = document.querySelectorAll('.message-container p');
    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.classList.add('fade-in');
        }, 300 + (index * 200)); // Stagger the animations
    });
});

// Function to create falling hearts in the background
function createFallingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const numberOfHearts = 30;
    
    // Heart SVG content
    const heartSVG = `
        <svg class="heart" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ff3399" d="M16,28.261c0,0-14-7.926-14-17.046c0-8.565,9.333-11.816,14-4.312
            c4.667-7.504,14-4.252,14,4.312C30,20.335,16,28.261,16,28.261z"/>
        </svg>
    `;
    
    // Create multiple hearts
    for (let i = 0; i < numberOfHearts; i++) {
        // Create a heart element
        const heartDiv = document.createElement('div');
        heartDiv.innerHTML = heartSVG;
        const heart = heartDiv.firstElementChild;
        
        // Randomize heart properties
        const size = Math.random() * 15 + 10; // Random size between 10px and 25px
        const left = Math.random() * 100; // Random horizontal position
        const animationDuration = Math.random() * 15 + 5; // Random animation duration between 5s and 20s
        const animationDelay = Math.random() * 10; // Random delay before animation starts
        const opacity = Math.random() * 0.5 + 0.3; // Random opacity between 0.3 and 0.8
        
        // Apply styles
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.animationDuration = `${animationDuration}s`;
        heart.style.animationDelay = `${animationDelay}s`;
        heart.style.opacity = opacity;
        
        // Add heart to container
        heartsContainer.appendChild(heart);
    }
}

// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create falling hearts
    createFallingHearts();
    
    // Get elements
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const container = document.querySelector('.container');
    
    // Add fade-in animation to container
    setTimeout(() => {
        container.classList.add('fade-in');
    }, 100);
    
    // Add event listeners to the buttons
    if (noButton) {
        noButton.addEventListener('mouseover', moveNoButton);
        noButton.addEventListener('click', noClicked);
    }
    
    if (yesButton) {
        yesButton.addEventListener('click', yesClicked);
    }
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

// Function to move the "No" button when hovered
function moveNoButton(event) {
    const button = event.target;
    const container = document.querySelector('.container');
    
    // Calculate container boundaries
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    // Calculate maximum allowed position to keep button within container
    const maxX = containerRect.width - buttonRect.width - 20; // 20px as padding
    const maxY = containerRect.height - buttonRect.height - 20;
    
    // Generate random position within container bounds
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    // Apply new position
    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

// Function for "No" button click
function noClicked() {
    const noButton = document.getElementById('noButton');
    
    // Add shake animation
    noButton.classList.add('shake');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        noButton.classList.remove('shake');
    }, 500);
    
    // Show message
    alert("Think again, our love story is just beginning! 💕");
}

// Function for "Yes" button click
function yesClicked() {
    // Play celebration sound if browser allows
    try {
        const audio = new Audio('https://freesound.org/data/previews/131/131660_2398403-lq.mp3');
        audio.volume = 0.5;
        audio.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
        console.log('Audio play failed:', error);
    }
    
    // Show congratulatory message
    alert("I knew you'd say YES! I love you so much! ❤️🥰");
    
    // Create celebration effect
    createCelebration();
    
    // Change the container content to celebration message
    const container = document.querySelector('.container');
    
    // Save the SVG path to reuse
    const svgPath = document.querySelector('.image-container object').getAttribute('data');
    
    container.innerHTML = `
        <h1>You said YES! ❤️🎉</h1>
        <div class="image-container">
            <object data="${svgPath}" type="image/svg+xml" alt="I Love You Image"></object>
        </div>
        <p>I promise to cherish and love you forever! ❤️💍</p>
        <p>You've made me the happiest person in the world! 🌟🦁</p>
        <a href="/" class="btn">Back to Love Letter</a>
    `;
}

// Function to create confetti celebration effect
function createCelebration() {
    const celebrationContainer = document.querySelector('.celebration-container');
    celebrationContainer.style.display = 'block';
    
    const colors = ['#ff3399', '#ff99cc', '#ffccff', '#ff66b3', '#990033'];
    const numConfetti = 150;
    
    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        // Apply styles
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = color;
        confetti.style.left = `${left}%`;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.animationDelay = `${delay}s`;
        
        // Add shapes
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        } else if (Math.random() > 0.5) {
            confetti.style.transform = 'rotate(45deg)';
        }
        
        celebrationContainer.appendChild(confetti);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        celebrationContainer.style.display = 'none';
        celebrationContainer.innerHTML = '';
    }, 5000);
}

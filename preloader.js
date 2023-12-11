// Create the overlay and loader elements
const overlay = document.createElement('div');
overlay.id = 'loader-overlay';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const loader = document.createElement('div');
loader.id = 'loader';
loader.style.cssText = `
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(loader);

// Function to hide the overlay
function hideOverlay() {
    overlay.style.display = 'none';
        loader.style.display = 'none'; // Hide the loader as well

}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);

// Add the CSS for the animation
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = `
    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);

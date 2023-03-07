// Wait for the DOM to load before accessing the container element
document.addEventListener('DOMContentLoaded', () => {
    // Get the container element
    const container = document.querySelector('.container');
  
    // Create 16x16 grid of square divs and append them to the container
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
  
        // Rainbow Colors
        // Add event listener to button to activate hover effect
        const rainbowButton = document.querySelector('#rainbowButton');
        rainbowButton.addEventListener('click', function() {
          // Add event listener to change background color on hover
          const squares = document.querySelectorAll('.square');
          squares.forEach(square => {
            square.addEventListener('mouseover', function() {
              const randomColor = Math.floor(Math.random()*16777215).toString(16); // Generate a random hex color
              square.style.backgroundColor = "#" + randomColor; // Set the background color
            });
          });
        });
        
        // Add event listener to button to set color to black
        const blackButton = document.querySelector('#blackButton');
        blackButton.addEventListener('click', function() {
            // Add event listener to change background color on hover
            const squares = document.querySelectorAll('.square');
            squares.forEach(square => {
                square.addEventListener('mouseover', function() {
                    square.style.backgroundColor = 'black'; // Set the background color to black
          });
        });
    });
        // Add event listener to button to reset all colors to default
        const resetButton = document.querySelector('#resetButton');
        resetButton.addEventListener('click', function() {
          const squares = document.querySelectorAll('.square');
          squares.forEach(square => {
            square.style.backgroundColor = '#3498db'; // Reset the background color to white
          });
        });
      }
    }
  });
  
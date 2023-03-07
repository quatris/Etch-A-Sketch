document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
  
    // Create initial grid
    createGrid(16);
  
    // Add event listener to range slider
    const rangeSlider = document.getElementById("range-slider");
    rangeSlider.addEventListener("input", function () {
      const gridSize = parseInt(rangeSlider.value);
      createGrid(gridSize);
    });
  
    function createGrid(size) {
      // Remove previous grid
      container.innerHTML = "";
  
      // Create new grid
      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
      }
  
      const rangeSlider = document.querySelector("#range-slider");
      const sliderValue = document.querySelector("#slider-value");
  
      rangeSlider.addEventListener("input", function () {
        const value = rangeSlider.value;
        sliderValue.textContent = "Grid Size: " + value + "x" + value;
      });
  
      // Add event listeners to buttons
      const rainbowButton = document.querySelector("#rainbowButton");
      rainbowButton.addEventListener("click", function () {
        // Add 'active' class to rainbow button
        rainbowButton.classList.add("active");
        // Remove 'active' class from black button
        blackButton.classList.remove("active");
        // Clear the grid back to the default color
        clearGrid();
      });
  
      const blackButton = document.querySelector("#blackButton");
      blackButton.addEventListener("click", function () {
        // Add 'active' class to black button
        blackButton.classList.add("active");
        // Remove 'active' class from rainbow button
        rainbowButton.classList.remove("active");
        // Clear the grid back to the default color
        clearGrid();
      });
  
      const squares = document.querySelectorAll(".square");
      let isDrawing = false; // Create a variable to track if the mouse button is being held down
  
      document.addEventListener("mousedown", function () {
        isDrawing = true; // Set isDrawing to true when mouse button is pressed down
      });
  
      document.addEventListener("mouseup", function () {
        isDrawing = false; // Set isDrawing to false when mouse button is released
      });
  
      squares.forEach((square) => {
        square.addEventListener("mousemove", function () {
          if (isDrawing) {
            if (rainbowButton.classList.contains("active")) {
              const randomColor = Math.floor(Math.random() * 16777215).toString(
                16
              ); // Generate a random hex color
              square.style.backgroundColor = "#" + randomColor; // Set the background color
            } else if (blackButton.classList.contains("active")) {
              square.style.backgroundColor = "black"; // Set the background color to black
            }
          }
        });
      });
  
      const resetButton = document.querySelector("#resetButton");
      resetButton.addEventListener("click", function () {
        // Clear the grid back to the default color
        clearGrid();
      });
  
      function clearGrid() {
        squares.forEach((square) => {
          square.style.backgroundColor = "#3498db"; // Reset the background color to the default color
        });
      }
    }
  });
  
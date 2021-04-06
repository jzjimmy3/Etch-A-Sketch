const container = document.getElementById("container");

function makeGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows)
    container.style.setProperty("--grid-cols", cols)
    for (i = 0; i < (rows * cols); i++) {
        let grid = document.createElement('div')
        // grid.innerText = (i + 1);
        container.appendChild(grid).className = "grid-item";
    };
};

makeGrid(16, 16)


// function fillGrid(rows, cols) {
//     const grids = document.querySelector(".grid-item")
//     for (let i = 0; i < (rows * cols); i++) {
//         container.addEventListener("mouseover", function (color) {
//             grids.style.setProperty("background-color", "red")
//         }   
//     }
// }

// fillGrid(16, 16)


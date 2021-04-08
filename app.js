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

const grids = document.querySelectorAll(".grid-item")
grids.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.setProperty("background-color", "red")
    })
})




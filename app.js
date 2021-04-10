const container = document.getElementById("grid-container");

function makeGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows)
    container.style.setProperty("--grid-cols", cols)

    for (i = 0; i < (rows * cols); i++) {
        const grid = document.createElement('div')
        container.appendChild(grid).className = "grid-item";
    };
};

makeGrid(3, 3)
hover()
function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

function hover() {
    const grids = document.querySelectorAll(".grid-item")
    grids.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.setProperty("background-color", "#52b043")
        })
    })
}

const reset = document.getElementById("reset");
reset.addEventListener('click', event => {
    const grids = document.querySelectorAll(".grid-item")
    grids.forEach(item => {
        item.style.setProperty("background-color", "white")
    })
})

const small = document.getElementById("small");
small.addEventListener('click', event => {
    clearGrid()
    makeGrid(10, 10)
    hover()
})

const med = document.getElementById("med");
med.addEventListener('click', event => {
    clearGrid()
    makeGrid(20, 20)
    hover()
})

const large = document.getElementById("large");
large.addEventListener('click', event => {
    clearGrid()
    makeGrid(25, 25)
    hover()
})



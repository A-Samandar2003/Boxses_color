

let wrapper = document.querySelector(".wrapper");
let colors = document.querySelector(".colors");
let btn = document.querySelector(".btn");
let fragmet = document.createDocumentFragment();

let global_Color;

for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");

    for (let j = 0; j < 10; j++) {
        let sub_cell = document.createElement("div");
        sub_cell.setAttribute("class", "sub-cell");
        cell.appendChild(sub_cell);
    }

    fragmet.appendChild(cell);
    wrapper.appendChild(fragmet);

}

for (let j = 0; j < 10; j++) {
    let colors_box = document.createElement("div");
    colors_box.setAttribute("class", "colors-box");
    colors_box.style.backgroundColor = randomColors();
    colors.appendChild(colors_box);
}

let cells = document.querySelectorAll(".cell");
let sub_cells = document.querySelectorAll(".sub-cell");
let colors_box = document.querySelectorAll(".colors-box");

btn.addEventListener('click', () => {
    location.reload();
})

function randomColors() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}

console.log(randomColors());

sub_cells.forEach((item, idx) => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = global_Color;
    })
    item.addEventListener("mousemove", () => {
        item.style.backgroundColor = global_Color;
    })
});



colors_box.forEach(item => {
    item.addEventListener("click", () => {
        let colors_item = item.style.backgroundColor;
        global_Color = colors_item;

    })
});

console.log(global_Color);





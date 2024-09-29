function getRandowColor() {
    return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
}

const itemEls = document.querySelectorAll(".item");
console.log(itemEls);

for (const item of itemEls) {
    console.log(item);
    
    item.style.backgroundColor = getRandowColor()
}
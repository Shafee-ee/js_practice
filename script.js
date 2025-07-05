const fruitList = document.getElementById("fruit-list");

fruitList.addEventListener("click", function (e) {
    console.log("event.target:", e.target);
    console.log("==== Event Object ====");
    console.log("Type:", e.type);
    console.log("Target:", e.target);
    console.log("Current Target:", e.currentTarget);
    console.log("Bubbles?", e.bubbles);
    console.log("Default prevented?", e.defaultPrevented);

    if (e.target.classList.contains("remove")) {
        const li = e.target.closest("li");
        li.remove();
        alert(`Removed:${li.textContent.trim()}`)
    }
})
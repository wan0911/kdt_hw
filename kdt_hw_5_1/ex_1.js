const table = document.querySelector("table");
const dateInput = document.querySelector("#date");
const innerText = document.querySelector("#content");
const btn = document.querySelector("button");

let target = null;

table.addEventListener("click", function (e) {
    if (e.target.tagName === "P") {
        // console.log(e.target.textContent);
        const dateValue = e.target.textContent;
        dateInput.value = dateValue;

        // console.log(e.target.parentNode);
        // e.target.parentNode.append(dateInput.value);
        // console.log(e.target.parentNode);
        target = e.target.parentNode;
    }

    if (e.target.tagName === "DIV") {
        e.target.remove();
    }
})

function writeSchedule() {
    const divEl = document.createElement("div");
    divEl.textContent = innerText.value;
    target.append(divEl);

    // divEl.addEventListener("click", function () {
    //     divEl.remove();
    // })
    innerText.value = "";
}



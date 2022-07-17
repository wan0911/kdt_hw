let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일

document.querySelector(".top_info").innerHTML = year + "/" + month + "/" + date;


const btnEl = document.querySelector("#btn_submit");
const todoInput = document.querySelector(".todo_input");
const todos = document.querySelector(".todo_list");
const msg = document.querySelector(".msg");

btnEl.addEventListener("click", onSubmit);

function onSubmit(e) {
    e.preventDefault;

    if (todoInput.value === "") {
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 2000);
        return;
    }

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add("item");
    todos.appendChild(li);
    todoInput.value = "";
}


// js 추가 : 클래스, 상단 텍스트, 전환
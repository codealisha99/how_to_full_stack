let ctr = 0;
function callback()
{
    const el = document.querySelectorAll("h4")[0]
    el.innerHTML = ctr;
    ctr = ctr + 1;
}

setInterval(callback, 1000); // this will call the callback function every 1000 milliseconds or 1 second




<script>
function addTodo() {
const inputEl = document.querySelector("input");
const value = inputEl.value;
const newDivEl = document.createElement("div");
newDivEl.innerHTML = "<div>" + value + "</div><button>delete</button>";
document.querySelector("body").appendChild(newDivEl)
}
</script>



function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", ctr);
    ctr = ctr + 1;
    newDivEl.innerHTML = "<div>" + value + '</div><button onclick="deleteTodo(' + ctr + ')">delete</button
    document.querySelector("body").appendChild(newDivEl)
    }
    


    class Promise2 {
        constructor(fn) {
        this.fn = fn;
        this.fn((): => {
        this.resolves.forEach((fn) => fn());
        });
        }
        then(fn) {
        if (!this.resolves) {
        this.resolves = [];
        }
        this.resolves.push(fn);
        }
        }
        function setTimeout Promisified(duration) {
        return new Promise(function (resolve) {
        console.log(resolve);
        setTimeout(resolve, duration);
        });
        }



        // <button onclick="addtodo">ADD TODO</button>

        // 1. create an empty array todos = []
        // 2. on click of button add an object to the array with title as the value of input box
        // 3. render the array to the screen as a list of todos
// 4. each todo should have a delete button next to it
// 5. on click of delete button remove the todo from the array and re-render the list
// 6. each todo should have a unique id
// 7. use the unique id to identify which todo to delete

<script>
let todos = [];
function addTodo() {
todos.push({
title: document.querySelector("input").value
})
render()
}
function render() {
for (let i = 0; i < todos.len
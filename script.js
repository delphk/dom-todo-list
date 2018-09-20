const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

let todo = document.querySelector("#todo-list");
 
tasks.forEach(function(a) {
	let li = document.createElement("li");
	li.textContent = a;
	todo.appendChild(li);
})

todo.addEventListener("click", function(e) {
	e.target.classList.toggle("done");
})

let button = document.querySelector("button");
let input = document.querySelector("input");

const addTask = () => {
	let li = document.createElement("li");
	li.textContent = input.value;
	todo.appendChild(li);
	input.value = "";
}

button.addEventListener("click", function() {
	addTask();
})

input.addEventListener("keypress", function(key) {
	if (key.charCode === 13) {
		addTask();
	}
})
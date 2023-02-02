let tasksList = [];
const inputNewTask = document.getElementById("inputNewTask");
const btnAddNewTask = document.getElementById("btnAddNewTask");
const ulTasksList = document.getElementById("tasksList");

btnAddNewTask.onclick = addTask;
// btnAddNewTask.addEventListener('click', function () {})
function addTask() {
  const task = inputNewTask.value;
  const ultimoEle = tasksList.push(task) - 1;
  ulTasksList.innerHTML +=
    `<li id='item${ultimoEle}'>
      ${tasksList[ultimoEle]} 
      <button onclick='removeTask(${ultimoEle})'>X</button>
    </li>`;
}

function removeTask(indice) {
  delete tasksList[indice];
  const li = document.getElementById(`item${indice}`);
  li.remove();
}

/* let nomes = ["Fulano", "Ciclano", "Beltrano"];
// let nomes = ["Fulano","Beltrano", 1, [2, 3, 4], true, null];

console.log(nomes.length);

// Pop
let ultimoEle = nomes.pop();
console.log(ultimoEle);

console.log(nomes.length);

// Push
// nomes.push(2, "Nikola");
nomes.push("Nikola");

console.log(nomes); */
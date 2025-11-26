document.querySelector('h1').textContent = 'Destructing'

//Destructuring

const [a = 4, b] = [, 2]
const {c , nested:{d, e}} = {c:3, nested: {d:4, e:5}}
console.log(a, b)
console.log(c, d, e)

const tasks = [
  { id: 1, title: "Buy groceries", status: "pending", otherInfo: { priority: "high" } },
  { id: 2, title: "Write blog", status: "completed", otherInfo: { priority: "low" } },
  { id: 3, title: "Workout", status: "pending", otherInfo: { priority: "medium" } },
];

//use binding pattern in loop

for(const {title, status, otherInfo: { priority }} of tasks){
    console.log(`${title} | ${priority} | ${status}`)
}

//function

const printSummary = ({title, status}) => `${title} is ${status}`
console.log(printSummary(tasks[0]))
console.log(printSummary(tasks[1]))

//assignment binding


const taskToUpdate = tasks.find(task => task.id=== 1)
console.log('Before assignment:', taskToUpdate);
({status: taskToUpdate.status, title: taskToUpdate.title} = {status : 'completed', title: 'New Title'})
console.log(taskToUpdate)
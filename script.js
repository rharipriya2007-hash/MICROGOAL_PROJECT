let goals=[]
let streak=0

function addGoal(){

const input=document.getElementById("goalInput")

if(input.value==="") return

const goal={
text:input.value,
completed:false
}

goals.push(goal)

input.value=""

renderGoals()

}

function renderGoals(){

const list=document.getElementById("goalList")

list.innerHTML=""

let completedCount=0

goals.forEach((goal,index)=>{

const li=document.createElement("li")

if(goal.completed){
li.classList.add("completed")
completedCount++
}

li.innerHTML=`
<span onclick="toggleGoal(${index})">${goal.text}</span>
<div>
<button onclick="toggleGoal(${index})">✅</button>
<button onclick="deleteGoal(${index})">🗑</button>
</div>
`

list.appendChild(li)

})

updateProgress(completedCount)

}

function toggleGoal(index){

goals[index].completed=!goals[index].completed

renderGoals()

}

function deleteGoal(index){

goals.splice(index,1)

renderGoals()

}

function updateProgress(completed){

const percent=(completed/goals.length)*100 || 0

document.getElementById("progressFill").style.width=percent+"%"

if(percent===100 && goals.length>0){
streak++
document.getElementById("streak").innerText=streak
}

}

document.getElementById("darkModeBtn").onclick=function(){
document.body.classList.toggle("dark")
}
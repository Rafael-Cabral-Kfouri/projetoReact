import { useState } from "react";
import AddTask from "./components/addTasks";
import Tasks from "./components/tasks";
import './index.css';

function App() {
  const [tasks, setTasks] = useState([
  { 
    id: 1,
    title: 'estudar programação',
    description: 'se tornar um desenvolvedor fullstack',
    isCompleted: false
  },
  {
    id: 2,
    title: 'estudar inglês',
    description: 'se tornar fluente',
    isCompleted: false
  },
  {
    id: 3,
    title: 'estudar matemática',
    description: 'se tornar um nerd',
    isCompleted: false
  },
]);

function clicouNaTask(taskId){
  const newTasks = tasks.map((task) => {
  //preciso atualizar essa tarefa
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
    }
    //Não preciso atulizar essa tarefa
    return task
  })
  setTasks(newTasks);
}
  function deleteNaTask(taskId){
  const newTasks = tasks.filter(task => task.id != taskId)
  setTasks(newTasks);
}

function addListaDeBaixo (title, description) {
  const newTask = {
    id: tasks.length + 1,
    title: title, // pode fazer um 'short hand sintaxe'. Nome da propriedade é igual nome parametro
    description: description, 
    isCompleted: false 
  };
  setTasks([...tasks, newTask])// equivalente ao tasks.push(newTask) mas não funcioa com push
}
  
return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4" >
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de Tarefas</h1>  
{/* Quando vc quer passar um valor pro componente de baixo vc usa uma props */} 
      <AddTask addListaDeBaixo={addListaDeBaixo} />
      <Tasks tasks={tasks} clicouNaTask={clicouNaTask} deleteNaTask={deleteNaTask} />
      </div>
    </div>
  );
}

export default App;

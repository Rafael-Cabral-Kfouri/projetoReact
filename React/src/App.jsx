import { useState } from "react";
import AddTask from "./components/addTasks";
import Tasks from "./components/tasks";
import './index.css';

function App() {
  const [tasks, setTasks] = useState([
  { 
    id: 1,
    titulo: 'estudar programação',
    description: 'se tornar um desenvolvedor fullstack',
    isCompleted: false
  },
  {
    id: 2,
    titulo: 'estudar inglês',
    description: 'se tornar fluente',
    isCompleted: false
  },
  {
    id: 3,
    titulo: 'estudar matemática',
    description: 'se tornar um nerd',
    isCompleted: false
  },
]);

function clicouNaTask(taskId){
  const newTasks = tasks.map(task => {
  //preciso atualizar essa tarefa
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
    }
    //Não preciso atulizar essa tarefa
    return task
  })
  setTasks(newTasks);
}
  
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de Tarefas</h1>  
{/* Quando vc quer passar um valor pro componente de baixo vc usa uma props */} 
      <AddTask />
      <Tasks tasks={tasks} clicouNaTask={clicouNaTask} />
      </div>
    </div>
  );
}

export default App;

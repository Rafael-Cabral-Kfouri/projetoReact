import { ChevronRightIcon } from "lucide-react";
//agora esse Tasks tem acesso dentro desse props a clicouNaTask e por isso quando eu clicar no botão quero chamar a função clicouNaTask
function Tasks(props) {
    return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
{/* quando vc tem uma props que é uma função e vc precisa chamar quando clicar n botão e também passar parâmetro vc passa primeiro a arrowfunction                 */}
            <button onClick={()=>props.clicouNaTask(task.id)} className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${task.isCompleted && 'line-through'}`}>
                {task.titulo}
                 </button>
            <button className="bg-slate-400 p-2 rounded-md text-white">
                <ChevronRightIcon />
            </button>
            </li>
        ))}
    </ul>
    );
}

export default Tasks;

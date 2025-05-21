import { ChevronRightIcon, TrashIcon} from "lucide-react";
// props é o meio que o arquivo App passa a função 'clicouNaTask' para o arquivo Tasks. Não precisa exportar o arquivo e importar. Então task.id(a tarefa clicada) é passado pelo onClick para TaskId que é o parâmetro de 'clicouNaTask', que passa via props esse valor para a função 'Tasks'. Tasks 
function Tasks({tasks, clicouNaTask, deleteNaTask}) {
    return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
{/* quando vc tem uma props que é uma função e vc precisa chamar quando clicar n botão e também passar parâmetro vc passa primeiro a arrowfunction                 */}
            <button onClick={() => clicouNaTask(task.id)} className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${task.isCompleted && 'line-through'}`}>
                {task.titulo}
                 </button>
            <button className="bg-slate-400 p-2 rounded-md text-white">
                <ChevronRightIcon />
            </button>
            <button onClick={() => deleteNaTask(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
                <TrashIcon />
            </button>
            </li>
        ))}
    </ul>
    );
}

export default Tasks;

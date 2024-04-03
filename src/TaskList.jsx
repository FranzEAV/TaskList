const TaskList = ({ tasks }) => {
    return (
        <div>
        <h2>Lista de Tareas</h2>
        <ul>
            {tasks.map(task => (
            <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default TaskList;

import TaskList from './TaskList';

const App = () => {
    const tasks = [{ 
        id: 1, 
        text: 'Recoger la basura', 
        completed: false 
    }, { 
        id: 2, 
        text: 'Visitar a la familia', 
        completed: true
    }, { 
        id: 3, 
        text: 'Pagar las cuentas en el banco', 
        completed: false 
    }];

    return (
        <div>
        <TaskList tasks={tasks} />
        </div>
    );
};

export default App;

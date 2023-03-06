import * as React from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Card from 'react-bootstrap/Card';


const Main = () => {
    const [todolist, setTodolist] = React.useState([])

    const addCallback = (todoText) => {
        const uniqueId = Date.now();
        setTodolist([...todolist, { id: uniqueId, name: todoText }])
    }

    const editCallBack = (id, name) => {
        const newTaskName = prompt("Enter Your Updated task", name);
        const allTask = Object.assign([], todolist)
       
        const position = allTask.findIndex(el => el.id === id)

        allTask[position] = {
            id: id,
            name: newTaskName
        }
        setTodolist(allTask)
    }
    
    const deleteCallBack = (id) => {
        console.log(id)
    }

    return (
        <div className='container'>
            <div className="col-lg-12">
                <Card>
                    <Card.Body>
                        <h3> My Todo List</h3>
                        <AddTodo callback={addCallback} />
                        <TodoList onEdit={editCallBack} onDelete={deleteCallBack} tasks={todolist} />
                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}

export default Main;

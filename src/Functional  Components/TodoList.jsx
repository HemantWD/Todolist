import * as React from 'react'
import Table from 'react-bootstrap/Table';


const TodoList = (props) => {
    // const deleteHandler = (id) => 
    //     props.onDelete(id)
    // }
    return (
        <section id='todo-list'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((el, key) => {
                        return <tr>
                            <td>{key + 1}</td>
                            <td>{el.name}</td>
                            <td><button className='btn btn-primary' onClick={() => props.onEdit(el.id, el.name)}>Edit</button></td>
                            <td><button className='btn btn-primary' onClick={() => props.onDelete(el.id)}>Delete</button></td>

                        </tr>
                    })}

                </tbody>
            </Table>
        </section>
    )
}



export default TodoList;

import axios from 'axios';
import * as React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from 'react';

const AddTodo = (props) => {
    const [currentTaskName, setCurrentTaskName] = React.useState(' ')
    const [todoName, setTodoName] = useState(' ')
    const [todoStatus, setTodoStatus] = useState(false);

    const onChangeHandler = (e) => {
        setCurrentTaskName(e.target.value)
    }
    const onSaveHandler = (e) => {
        props.callback(currentTaskName)
        e.preventDefault();

        console.log(`Form submitted:`);

        const newTodo = {
            todo_Name: todoName,
            todo_Status: todoStatus
        }
        axios.post('http://localhost:4000/save', newTodo)
        .then(res=>console.log(res.data));
        setTodoName('');
        setTodoStatus(false);

    }
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Write Your Task"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={onChangeHandler}
                />
                <Button onClick={onSaveHandler} variant="outline-secondary" id="button-addon2">
                    Save
                </Button>
            </InputGroup>
        </>
    )
}



export default AddTodo;

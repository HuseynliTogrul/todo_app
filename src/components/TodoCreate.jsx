import React, { useState } from 'react'
import "../css/TodoCreate.css"

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');
    const [countId, setCountId] = useState(1);

    const clearTodo = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: countId,
            content: newTodo
        }

        onCreateTodo(request)
        setCountId(countId + 1)
        clearTodo();
    }

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='todo-input' type="text" placeholder='Todo enter...' />
            <button onClick={createTodo} className='todo-btn'>Todo create</button>
        </div>
    )
}

export default TodoCreate;
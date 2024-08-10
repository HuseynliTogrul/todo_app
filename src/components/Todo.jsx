import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import "../css/todo.css"

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false)
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div className='todo'>
            <div>
                {
                    editable ? <input
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        style={{ width: '380px', background: 'aliceblue' }}
                        className='todo-input' type="text" />
                        : content
                }
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <MdDelete className='todoIcon' onClick={removeTodo} />
                {
                    editable ? <FaCheck className='todoIcon' onClick={updateTodo} style={{ color: 'green' }} />
                        : <MdEdit className='todoIcon' onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    )
}

export default Todo
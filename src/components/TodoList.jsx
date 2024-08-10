import React from 'react'
import Todo from "./Todo"
import "../css/TodoList.css"

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div className='TodoList'>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))
            }
        </div>
    )
}

export default TodoList
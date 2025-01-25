import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleAddTask(e) {
        e.preventDefault();
        if (!newTask.trim()) return;
        setTask([...task, { text: newTask, completed: false }]);
        setNewTask('');
    }

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function handleMoveTaskUp(index) {
        if (index === 0) return;
        const newTasks = [...task];
        const temp = newTasks[index];
        newTasks[index] = newTasks[index - 1];
        newTasks[index - 1] = temp;
        setTask(newTasks);
    }

    function handleMoveTaskDown(index) {
        if (index === task.length - 1) return;
        const newTasks = [...task];
        const temp = newTasks[index];
        newTasks[index] = newTasks[index + 1];
        newTasks[index + 1] = temp;
        setTask(newTasks);
    }

    function handleDeleteTask(index) {
        const newTasks = task.filter((_, i) => i !== index);
        setTask(newTasks);
    }

    function handleToggleComplete(index) {
        const newTasks = [...task];
        newTasks[index].completed = !newTasks[index].completed;
        setTask(newTasks);
    }

    return (
        <div className="container">
            <div className="todo-wrapper">
                <h1 className="title">To Do List</h1>
                <form onSubmit={handleAddTask} className="input-form">
                    <input
                        type="text"
                        value={newTask}
                        onChange={handleInputChange}
                        placeholder="Add a new task..."
                        className="todo-input"
                    />
                    <button type="submit" className="add-button">Add</button>
                </form>
                <ul className="todo-list">
                    {task.map((item, index) => (
                        <li key={index} className={`todo-item ${item.completed ? 'completed' : ''}`}>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => handleToggleComplete(index)}
                                className="checkbox"
                            />
                            <span className="task-text">{item.text}</span>
                            <div className="button-group">
                                <button onClick={() => handleMoveTaskUp(index)} className="move-button">↑</button>
                                <button onClick={() => handleMoveTaskDown(index)} className="move-button">↓</button>
                                <button onClick={() => handleDeleteTask(index)} className="delete-button">×</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
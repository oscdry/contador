import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { FaTrophy } from 'react-icons/fa';


const TodoList = ({ tasks }) => {
    const [todos, setTodos] = useState([]);
    const [confettiConfig, setConfettiConfig] = useState({ show: false, x: 0, y: 0 });
  
    useEffect(() => {
      const initialTodos = tasks.map(task => ({
        ...task,
        isCompleted: new Date(task.date) <= new Date(),
      }));
      setTodos(initialTodos);
  
      const interval = setInterval(() => {
        setTodos(currentTodos =>
          currentTodos.map((todo, index) => {
            if (!todo.isCompleted && new Date(todo.date) <= new Date()) {
              showConfetti(index);
              return { ...todo, isCompleted: true };
            }
            return todo;
          })
        );
      }, 60000);
  
      return () => clearInterval(interval);
    }, [tasks]);
  
    const showConfetti = (index) => {
      const element = document.getElementById(`todo-item-${index}`);
      const rect = element.getBoundingClientRect();
      setConfettiConfig({
        show: true,
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2
      });
      setTimeout(() => setConfettiConfig({ show: false, x: 0, y: 0 }), 3000);
    };
  
    return (
      <div className="todo-list">
        {confettiConfig.show && <Confetti numberOfPieces={200} recycle={false} width={window.innerWidth} height={window.innerHeight} initialVelocityY={10} />}
        {todos.map((todo, index) => (
          <div key={index} id={`todo-item-${index}`} className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
            <input type="checkbox" checked={todo.isCompleted} readOnly />
            <span>{todo.text}</span>
            {todo.isCompleted && <FaTrophy className="trophy-icon" />}
          </div>
        ))}
      </div>
    );
  };
  
  export default TodoList;

import React, { useState } from 'react';
import styled from 'styled-components';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const AppContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 50px auto;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
`;

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <AppContainer>
      <Title>Lista de Tareas</Title>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
    </AppContainer>
  );
};

export default App;

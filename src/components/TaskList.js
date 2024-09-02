import React from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

const ListContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <ListContainer>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p style={{ padding: '10px', textAlign: 'center' }}>No hay tareas disponibles</p>
      )}
    </ListContainer>
  );
};

export default TaskList;

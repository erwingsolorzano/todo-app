import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const TaskTitle = styled.span`
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
  margin-left: 10px;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  color: white;
  background-color: #dc3545;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #c82333;
  }
`;

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <TaskContainer>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          style={{ marginRight: '10px' }}
        />
        <TaskTitle $completed={task.completed}>
          {task.title}
        </TaskTitle>
      </div>
      <DeleteButton onClick={() => onDelete(task.id)}>Eliminar</DeleteButton>
    </TaskContainer>
  );
};

export default TaskItem;

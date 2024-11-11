import React from 'react';

const Action = ({ action, index, onRemoveAction }) => {
  return (
    <li>
      {action.name} - {action.co2Reduction} kg CO₂
      <button onClick={() => onRemoveAction(index)}>Delete</button>
    </li>
  );
};

export default Action;


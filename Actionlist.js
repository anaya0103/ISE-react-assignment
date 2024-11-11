import React from 'react';

const predefinedActions = [
  { name: 'Recycle', co2Reduction: 0.2 },
  { name: 'Use Public Transport', co2Reduction: 0.5 },
  { name: 'Plant a Tree', co2Reduction: 10 },
  // Add more actions as needed
];

const ActionList = ({ onAddAction }) => {
  return (
    <div className="action-list">
      <h2>Eco-friendly Actions</h2>
      <ul>
        {predefinedActions.map((action, index) => (
          <li key={index}>
            {action.name} - {action.co2Reduction} kg CO₂
            <button onClick={() => onAddAction(action)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionList;


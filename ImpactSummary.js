import React from 'react';
import Action from './Action';

const ImpactSummary = ({ actions, totalCO2, onRemoveAction, onClearActions }) => {
  const getImpactMessage = (totalCO2) => {
    if (totalCO2 > 1) return 'green';
    if (totalCO2 > 0.5) return 'orange';
    return 'red';
  };

  return (
    <div className="impact-summary">
      <h2>Impact Summary</h2>
      {actions.length === 0 ? (
        <p>No actions tracked yet.</p>
      ) : (
        <>
          <ul>
            {actions.map((action, index) => (
              <Action
                key={index}
                index={index}
                action={action}
                onRemoveAction={onRemoveAction}
              />
            ))}
          </ul>
          <p>
            Total CO₂ reduction: {totalCO2} kg
            <span
              style={{
                color: getImpactMessage(totalCO2),
              }}
            >
              {' '}
              ({totalCO2 / 10} trees planted!)
            </span>
          </p>
          <button onClick={onClearActions}>Clear All</button>
        </>
      )}
    </div>
  );
};

export default ImpactSummary;
 
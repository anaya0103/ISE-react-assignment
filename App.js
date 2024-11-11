import React, { useState, useEffect } from 'react';
import ActionList from './components/ActionList';
import ImpactSummary from './components/ImpactSummary';
import './App.css';

const App = () => {
  const [actions, setActions] = useState([]);
  const [totalCO2, setTotalCO2] = useState(0);

  useEffect(() => {
    const storedActions = JSON.parse(localStorage.getItem('actions')) || [];
    setActions(storedActions);
    calculateTotalCO2(storedActions);
  }, []);

  useEffect(() => {
    localStorage.setItem('actions', JSON.stringify(actions));
    calculateTotalCO2(actions);
  }, [actions]);

  const calculateTotalCO2 = (actions) => {
    const total = actions.reduce((acc, action) => acc + action.co2Reduction, 0);
    setTotalCO2(total);
  };

  const handleAddAction = (action) => {
    setActions([...actions, action]);
  };

  const handleRemoveAction = (index) => {
    const newActions = actions.filter((_, i) => i !== index);
    setActions(newActions);
  };

  const handleClearActions = () => {
    setActions([]);
  };

  return (
    <div className="App">
      <h1>Eco Tracker</h1>
      <ActionList onAddAction={handleAddAction} />
      <ImpactSummary
        actions={actions}
        totalCO2={totalCO2}
        onRemoveAction={handleRemoveAction}
        onClearActions={handleClearActions}
      />
    </div>
  );
};

export default App;

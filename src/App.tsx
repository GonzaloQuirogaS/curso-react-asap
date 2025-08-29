import React from 'react';
import TareasForm from './components/TareasForm';
import TareasList from './tareas/TareasList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <h1>Tareas</h1>
      <TareasForm />
      <TareasList />
    </div>
  );
};

export default App;
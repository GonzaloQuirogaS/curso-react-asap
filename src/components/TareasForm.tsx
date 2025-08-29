import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarTarea } from '../tareas/tareaSlice';
import type { AppDispatch } from '../app/store';

const TareaForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre.trim()) {
      dispatch(agregarTarea(nombre));
      setNombre('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit" style={{backgroundColor:'green'}}>Agregar</button>
    </form>
  );
};

export default TareaForm;
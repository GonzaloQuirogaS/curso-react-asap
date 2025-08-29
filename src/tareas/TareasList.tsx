import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';
import { eliminarTarea, toggleCompletado, modificarTarea, } from './tareaSlice';

const TareasList: React.FC = () => {
  const tareas = useSelector((state: RootState) => state.tareas.tareas);
  const dispatch = useDispatch<AppDispatch>();

  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [nuevoNombre, setNuevoNombre] = useState('');


  const handleEditar = (id: number, nombreActual: string) => {
    setEditandoId(id);
    setNuevoNombre(nombreActual);
  };

  const handleGuardar = (id: number) => {
    if (nuevoNombre.trim() !== '') {
      dispatch(modificarTarea({ id, nuevoNombre }));
      setEditandoId(null);
      setNuevoNombre('');
    }
  };

 return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          {editandoId === tarea.id ? (
            <>
              <input
                type="text"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
              />
                <div className="tarea-actions">
                 <button onClick={() => handleGuardar(tarea.id)} style={{backgroundColor:'blue'}}>Guardar</button>
                 <button onClick={() => setEditandoId(null)} style={{backgroundColor:'red'}}>Cancelar</button>
                </div>
            </>
          ) : (
            <>
              <span
                onClick={() => dispatch(toggleCompletado(tarea.id))}
              className={`tarea-name ${tarea.completado ? 'completed' : ''}`}
              >
                {tarea.nombre}
              </span>
                <div className="tarea-actions">
              <button onClick={() => handleEditar(tarea.id, tarea.nombre)} style={{backgroundColor:'yellow', color:'black'}}>
                Editar
              </button>
              <button onClick={() => dispatch(eliminarTarea(tarea.id))} style={{backgroundColor: 'red'}}>
                Eliminar
              </button>
                </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TareasList;
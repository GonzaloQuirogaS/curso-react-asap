import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Tarea {
  id: number;
  nombre: string;
  completado: boolean;
}

interface TareasState {
  tareas: Tarea[];
  nextId: number;
}

const initialState: TareasState = {
  tareas: [],
  nextId: 1,
};

const tareasSlice = createSlice({
  name: 'tareas',
  initialState,
  reducers: {
    agregarTarea: (state, action: PayloadAction<string>) => {
      state.tareas.push({
        id: state.nextId,
        nombre: action.payload,
        completado: false,
      });
      state.nextId++;
    },
    eliminarTarea: (state, action: PayloadAction<number>) => {
      state.tareas = state.tareas.filter(tarea => tarea.id !== action.payload);
    },
    toggleCompletado: (state, action: PayloadAction<number>) => {
      const tarea = state.tareas.find(t => t.id === action.payload);
      if (tarea) {
        tarea.completado = !tarea.completado;
      }
    },
      modificarTarea: (
      state,
      action: PayloadAction<{ id: number; nuevoNombre: string }>
    ) => {
      const tarea = state.tareas.find(t => t.id === action.payload.id);
      if (tarea) {
        tarea.nombre = action.payload.nuevoNombre;
      }
    },
  },
});

export const { agregarTarea, eliminarTarea, toggleCompletado,  modificarTarea } = tareasSlice.actions;

export default tareasSlice.reducer;

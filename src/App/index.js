import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// let defaulTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Pasear a la perra', completed: false },
//   { text: 'Hacer la cena', completed: true },
// ];

function App() {
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

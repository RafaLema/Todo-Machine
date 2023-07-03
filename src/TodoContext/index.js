import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {

    // let x = [];
  // todoItems.forEach(todoItem => (
  //     x.push(<TodoItem key={todoItem.text} text={todoItem.text} completed={todoItem.completed} />)
  // ));
  
  const {item: todos, saveItems: saveTodos, loading, error} = useLocalStorage('TODO_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text: text,
    });
    saveTodos(newTodos);
    // setTodos(newTodos);
  }

  const onComplete = (index) => {
    saveTodos(
      todos.map((prevTodo,prevIndex) => {
          if (prevIndex === index) {
            return {...prevTodo, completed: !prevTodo.completed}
          }
          return prevTodo;
        })
    );
    // setTodos(prevTodos => prevTodos.map((prevTodo,prevIndex) => {
    //   if (prevIndex === index) {
    //     return {...prevTodo, completed: !prevTodo.completed}
    //   }
    //   return prevTodo;
    // }))
  }

  const onDelete = (index) => {
    saveTodos(todos.filter((_,prevIndex) => prevIndex !== index));
    //setTodos(prevTodos => prevTodos.filter((_,prevIndex) => prevIndex !== index))
  }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            onComplete,
            onDelete,
            loading,    
            error,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
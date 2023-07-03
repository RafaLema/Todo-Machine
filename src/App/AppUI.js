import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import './App.css';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI () {
    return (
        <>
          <TodoCounter />
          <TodoSearch />
    
          <TodoContext.Consumer>
            {({
                loading,
                error,
                searchedTodos,
                onComplete,
                onDelete,
            })=>(
                <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && !searchedTodos.length) && <EmptyTodos/>}
    
                { searchedTodos.map((todo, index) => (
                  <TodoItem 
                    key={index} 
                    text={'('+(index+1)+') '+todo.text} 
                    completed={todo.completed}
                    onComplete={() => onComplete(index)}
                    onDelete={() => onDelete(index)}
                  />
                )) }
              </TodoList>
            )}
            </TodoContext.Consumer> 
    
          <CreateTodoButton />
    
          <TodoContext.Consumer>
            {({openModal}) => (
                <>
                    {openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                  )}
                </>
            )}
          </TodoContext.Consumer>
        </>
      );
}

export { AppUI };
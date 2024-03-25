import { useReducer, useRef } from 'react';

function App() {
   const TodoList = () => {
    const initState = [];
    const todosReducer = (state, action) => { 
      switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            action.payload
          ]
        case 'REMOVE_TODO':
          const newState = state.filter((todoItem, index) => index.toString() !== action.payload.toString());
          return [
            ...newState
          ]
      }
    };
    const inputRef = useRef('');
    const [todos, dispatch] = useReducer(todosReducer, initState);

    const addTodo = () => {
      const inputValue = inputRef.current.value;
      if (inputValue) {
        dispatch({type: 'ADD_TODO', payload: inputValue});
        inputRef.current.value = '';
      }

    }

    const removeTodo = (event) => {
      const dataId = event.target.parentNode.getAttribute('data-id');
      dispatch({type: 'REMOVE_TODO', payload: dataId});
    }

    return (
      <div>
        <ul>
          {todos?.map((todo, index) => (
            <li data-id={index} key={index.toString()}>{todo}<button onClick={(e) => removeTodo(e)}>Remove todo</button></li>
          ))}
        </ul>
        <input type='text' ref={inputRef}/>
        <button onClick={addTodo}>Add todo</button>
      </div>
    );
   };

   return (
    <TodoList />
   )
}

export default App;

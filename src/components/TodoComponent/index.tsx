import {FC, useRef} from 'react';
import {useSelector} from "react-redux";

import {selectTodos} from "../../store/todo/TodoSelector.ts";
import {addTodo, resetTodo, toggleTodo} from "../../store/todo/TodoSlice.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";


const TodoComponent: FC = () => {
    const dispatch = useAppDispatch();
    const todos = useSelector(selectTodos);
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleAddTodo = () => {
        if (inputRef.current?.value) {
            dispatch(addTodo({
                text: inputRef?.current?.value.trim() || ''
            }));
            inputRef.current!.value = '' // Non nullish operator (TS assertion)
        }
    };

    const handleToggleTodo = (id: number) => {
        dispatch(toggleTodo({id}));
    };

    const handleResetTodo = () => {
        dispatch(resetTodo());
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <h1>Todo List (Hook)</h1>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} onClick={() => handleToggleTodo(todo.id)}
                            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text}
                        </li>
                    ))}
                </ul>
                <div>
                    <input ref={inputRef} type="text"/>
                    <br/>
                    <br/>
                    <button onClick={handleAddTodo}>Add Todo</button>
                    <button onClick={handleResetTodo}>Reset Todo</button>
                </div>
            </div>
        </div>

    );
}

export default TodoComponent;
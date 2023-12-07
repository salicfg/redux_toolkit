// src/redux/counterSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {AddTodoAction, Todo, TodoState, ToggleTodoAction} from "./types.ts";


export const initialState: TodoState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        resetTodo: () => {
            return initialState
        },
        addTodo: (state, action: AddTodoAction) => {
            const newTodo: Todo = {
                id: state.todos.length + 1,
                text: action.payload.text,
                completed: false,
            };
            state.todos.push(newTodo)

        },
        toggleTodo: (state, action: ToggleTodoAction) => {
           state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
            )
        },
    },
});

export const {resetTodo, addTodo, toggleTodo} = todoSlice.actions;
export const TodoReducer = todoSlice.reducer;

import {PayloadAction} from '@reduxjs/toolkit';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

// Define action types
export type AddTodoAction = PayloadAction<{ text: string }>
export type ToggleTodoAction = PayloadAction<{ id: number }>


// Define the initial state
export type TodoState = {
    todos: Todo[];
};
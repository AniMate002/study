import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
    id: string;
    text: string;
    completed: boolean;
};

type InitialStateType = {
    todos: Array<Todo>;
};

const initialState: InitialStateType = {
    todos: [
        { id: "4322432", text: "go to shop", completed: true },
        { id: "7867878", text: "take pills", completed: false },
    ],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: function (state, action: PayloadAction<string>) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            });
        },
        removeTodo: function (state, action: PayloadAction<string>) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        toggleTodoComplete: function (state, action: PayloadAction<string>) {
            const foundTodo = state.todos.find(
                (todo) => todo.id === action.payload
            );
            if (foundTodo) foundTodo.completed = !foundTodo.completed;
        },
    },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

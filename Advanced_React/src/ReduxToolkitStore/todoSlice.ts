import {
    createSlice,
    PayloadAction,
    createAsyncThunk,
    AnyAction,
} from "@reduxjs/toolkit";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};

type InitialStateType = {
    todos: Array<Todo>;
    isLoadingTodos: boolean;
    error: string | null;
};

const initialState: InitialStateType = {
    todos: [],
    isLoadingTodos: false,
    error: null,
};

export const fetchTodos = createAsyncThunk<
    Array<Todo>,
    void,
    { rejectValue: string }
>("todos/fetchTodos", async (_, { rejectWithValue }) => {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        console.log(res);
        if (!res.ok) throw new Error(res.statusText);
        return await res.json();
    } catch (error) {
        return rejectWithValue(
            error instanceof Error ? error.message : "Unknown error"
        );
    }
});

export const deleteTodoAsync = createAsyncThunk<
    void,
    number,
    { rejectValue: string }
>("todos/deleteTodoAsync", async (id, { rejectWithValue, dispatch }) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            {
                method: "DELETE",
            }
        );
        if (!res.ok) throw new Error(res.statusText);
        console.log("DELETED SUCCESSFULLY: ", id);
        dispatch(removeTodo(id));
    } catch (error) {
        return rejectWithValue(
            error instanceof Error ? error.message : "Unknown error"
        );
    }
});

export const toggleCompletedTodoAsync = createAsyncThunk<
    void,
    number,
    { rejectValue: string; state: { todos: InitialStateType } }
>(
    "todos/toggleCompletedTodoAsync",
    async (id: number, { rejectWithValue, dispatch, getState }) => {
        try {
            const todo = getState().todos.todos.find(
                (todo: Todo) => todo.id === id
            );
            if (!todo) throw new Error("Todo State is empty");
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ completed: !todo.completed }),
                }
            );
            if (!res.ok) throw new Error(res.statusText);
            console.log("UPDATED SUCCESSFULLY: ", id, !todo.completed);
            dispatch(toggleTodoComplete(id));
        } catch (error) {
            return rejectWithValue(
                error instanceof Error ? error.message : "Unknown error"
            );
        }
    }
);

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: function (state, action: PayloadAction<string>) {
            state.todos.push({
                id: state.todos.length,
                title: action.payload,
                completed: false,
                userId: 1,
            });
        },
        removeTodo: function (state, action: PayloadAction<number>) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        toggleTodoComplete: function (state, action: PayloadAction<number>) {
            const foundTodo = state.todos.find(
                (todo) => todo.id === action.payload
            );
            if (foundTodo) foundTodo.completed = !foundTodo.completed;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.isLoadingTodos = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoadingTodos = false;
                state.error = null;
                state.todos = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload as string;
                state.isLoadingTodos = false;
            });
    },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

function isError(action: AnyAction) {
    return action.type.endsWith("rejected");
}

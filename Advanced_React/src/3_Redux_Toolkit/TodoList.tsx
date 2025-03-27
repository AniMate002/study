import React, { useEffect } from "react";
import {
    deleteTodoAsync,
    fetchTodos,
    toggleCompletedTodoAsync,
} from "../ReduxToolkitStore/todoSlice";
import { useAppDispatch, useAppSelector } from "../ReduxToolkitStore/hooks";

const TodoList = () => {
    const { todos, error, isLoadingTodos } = useAppSelector(
        (store) => store.todos
    );
    const dispatch = useAppDispatch();
    const handleDeleteTodo = (id: number) => dispatch(deleteTodoAsync(id));
    const handleToggleCompletedTodo = (id: number) =>
        dispatch(toggleCompletedTodoAsync(id));

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    if (isLoadingTodos) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;
    return (
        <div>
            <h3>Todo List:</h3>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {todo.title} -
                    <button onClick={() => handleToggleCompletedTodo(todo.id)}>
                        {todo.completed ? "DONE" : "IN PROGRESS"}
                    </button>
                    <button onClick={() => handleDeleteTodo(todo.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;

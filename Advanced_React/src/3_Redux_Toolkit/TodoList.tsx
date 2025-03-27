import React from "react";
import { removeTodo, toggleTodoComplete } from "../ReduxToolkitStore/todoSlice";
import { useAppDispatch, useAppSelector } from "../ReduxToolkitStore/hooks";

const TodoList = () => {
    const { todos } = useAppSelector((store) => store.todos);
    const dispatch = useAppDispatch();
    const handleDeleteTodo = (id: string) => dispatch(removeTodo(id));
    const handleToggleCompletedTodo = (id: string) =>
        dispatch(toggleTodoComplete(id));
    return (
        <div>
            <h3>Todo List:</h3>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {todo.text} -
                    <button
                        onClick={() =>
                            handleToggleCompletedTodo(todo.id.toString())
                        }
                    >
                        {todo.completed ? "DONE" : "IN PROGRESS"}
                    </button>
                    <button
                        onClick={() => handleDeleteTodo(todo.id.toString())}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;

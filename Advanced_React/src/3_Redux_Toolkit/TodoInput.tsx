import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../ReduxToolkitStore/todoSlice.js";
import { useAppDispatch } from "../ReduxToolkitStore/hooks.js";

const TodoInput = () => {
    const [text, setText] = useState<string>("");
    const dispatch = useAppDispatch();
    const handleAddTodo = () => {
        dispatch(addTodo(text));
        setText("");
    };
    return (
        <>
            <h3>Todo Input</h3>
            <label>
                <span>Add todo</span>
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            <button onClick={handleAddTodo}>SAVE</button>
        </>
    );
};

export default TodoInput;

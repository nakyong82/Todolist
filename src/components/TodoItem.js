import React from "react";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import "./TodoItem.css";

const TodoItem = ({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {
  const { id, text, checked } = todo; /*이게 뭘까?*/
  return (<div className="TodoItem">
    <div className={`content ${checked ? "checked" : ""}`}>
      {checked ? (
        <MdOutlineCheckBox
          onClick={() => {
            onCheckToggle(id);
          }}
        />
      ) : (
        <MdOutlineCheckBoxOutlineBlank
          onClick={() => {
            onCheckToggle(id);
          }}
        />
      )}
      <div className="text" onClick={() => {
        onChangeSelectedTodo(todo);
        onInsertToggle();
      }}>{text}</div>
    </div>
  </div>
  );
};

export default TodoItem;
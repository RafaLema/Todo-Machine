import React from "react";
import "./TodosLoading.css";

function TodosLoading({ skeletons = 3 }) {
  return (
    <>
        {
            [...Array(skeletons)].map((_, i) => (
                <div key={i} className="LoadingTodo-container">
                    <span className="LoadingTodo-completeIcon"></span>
                    <p className="LoadingTodo-text"></p>
                    <span className="LoadingTodo-deleteIcon"></span>
                </div>
            ))
        }
    </>
  );
}

export { TodosLoading };
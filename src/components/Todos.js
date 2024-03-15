import {memo} from "react";

const Todos = memo(({todos, addTodo}) => {
    console.log('Todo');
    return (
        <div>
            {todos.map((todo, index)=><div key={index}>{todo}</div>)}
            <button onClick={addTodo}>add Todo</button>
        </div>
    );
});

export {Todos};
const Todo = ({todo}) => {
    const {id, title, completed} = todo;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed.toString()}</div>
        </div>
    );
};

export {Todo};
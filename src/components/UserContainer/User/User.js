const User = ({user,getCurrentUser}) => {
    const {id, name} = user;


    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>getCurrentUser(user)}>Details</button>
        </div>
    );
};

export {User};
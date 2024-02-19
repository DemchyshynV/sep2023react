const MyComponent = ({children}) => {
    return (
        <div>
            <h1>MyComponent</h1>
            <hr/>
            {children}
        </div>
    );
};

export {MyComponent};
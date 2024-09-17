function Component() {
    doSomething(e);
    {
        e.preventDeafult();
    }
    return <button onEvent={doSomething}></button>
}

//creation of lists




function listNumbers() {

    const numbers = [1, 2, 3, 4, 5, 6];

    const updateNumbers = numbers.map((number) => {
        return <li key={number}>{number}</li>
    });

    return (
        {updateNumbers}
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<listNumbers />);

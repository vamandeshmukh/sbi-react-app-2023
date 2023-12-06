
const Child = (props) => {

    return (
        <>
            <h1>Child Component</h1>
<p>Parent data in child component:{props.passData}</p>
        </>
    );
};

export default Child;
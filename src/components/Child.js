
const Child = (props) => {

    const childData = 'Monu';

    const passDataToParent = () => {
        console.log(childData);
        props.dataToParent(childData);
    };

    return (
        <>
            <h1>Child Component</h1>
            <p>Child data in child component:{childData}</p>
            <p>Parent data in child component:{props.passData}</p>

            <button onClick={passDataToParent}>Click to Send</button>

        </>
    );
};

export default Child;

// import { useMyContext } from "./MyContext";

// const Child = (props) => {

//     const { contextData, setContextData } = useMyContext();

//     const sendDataToContext = () => {
//         setContextData('some other data');
//     };

//     const childData = 'Monu';

//     const passDataToParent = () => {
//         console.log(childData);
//         props.dataToParent(childData);
//     };

//     return (
//         <>
//             <h1>Child Component</h1>
//             <p>Child data in child component:{childData}</p>
//             <p>Parent data in child component:{props.passData}</p>

//             <button onClick={passDataToParent}>Click to Send</button>

//             <p>Using Context API</p>
//             <p>{contextData}</p>
//             <button onClick={sendDataToContext}>Click</button>

//         </>
//     );
// };

// export default Child;
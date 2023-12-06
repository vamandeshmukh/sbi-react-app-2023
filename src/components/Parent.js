import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const parentData = 'Sonu';
    const [childDataInParent, setChildDataInParent] = useState('');

    const getDataFromChild = (arg) => {
        console.log(arg);
        setChildDataInParent(arg);
    };

    return (
        <>
            <h1>Parent Component</h1>
            <p>Parent data in parent component: {parentData}</p>
            <p>Child data in parent component: {childDataInParent}</p>
            <Child passData={parentData} dataToParent={getDataFromChild} />
        </>
    );
};


export default Parent;
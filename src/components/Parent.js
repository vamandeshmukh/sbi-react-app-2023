import Child from "./Child";

const Parent = () => {

    const parentData = 'Sonu';

    return (
        <>
            <h1>Parent Component</h1>
<p>Parent data in parent component: {parentData}</p>
            {/* <Child /> */}
            <Child passData={parentData} />
        </>
    );
};


export default Parent;
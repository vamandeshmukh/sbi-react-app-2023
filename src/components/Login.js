import { useState } from "react";

const Login = () => {

    const [empName, setEmpName] = useState('');
    
    const handleEmpName = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEmpName(evt.target.value);
    };

    return (
        <div>
            <p>Login Component</p>
            <div>
                <p>EmpName: {empName}</p>
                <p>Change EmpName</p>
                <form>
                    <input type="text" name="empName" value={empName} onChange={handleEmpName} />
                </form>
            </div>
        </div>
    );
};

export default Login;

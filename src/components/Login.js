import { useState } from "react";

const Login = () => {

    let firstName = 'Monu';
    let salary = 10.5;

    const [empName, setEmpName] = useState('abc');

    return (
        <div>
            <p>Login Component</p>
            <div>
                <p>EmpName: {empName}</p>
                <p>Change EmpName</p>
                <form>
                    <input type="text" value={empName} />
                </form>
            </div>
        </div>
    );

};

export default Login;

import { useState } from "react";

const Login = () => {

    const [loginData, setLoginData] = useState({username: '', password: ''});

    const handleLogin = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const submitLogin = (evt) => {
        console.log(loginData);
        alert(`Hi ${loginData.username}! You've logged in successfully!`);
        setLoginData({username: '', password: ''});
        evt.preventDefault();
    };

    return (
        <div>
            <p>Login Component</p>
            <div>
                <p>Please login here.</p>
                <form onSubmit={submitLogin}>
                    <input type="text" name="username" value={loginData.username} onChange={handleLogin} />
                    <br />
                    <input type="password" name="password" value={loginData.password} onChange={handleLogin} />
                    <br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;

// import { useState } from "react";

// const Login = () => {

//     const [empName, setEmpName] = useState('');
    
//     const handleEmpName = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setEmpName(evt.target.value);
//     };


//     return (
//         <div>
//             <p>Login Component</p>
//             <div>
//                 <p>EmpName: {empName}</p>
//                 <p>Change EmpName</p>
//                 <form>
//                     <input type="text" name="empName" value={empName} onChange={handleEmpName} />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const backendUrl = 'https://jsonplaceholder.typicode.com/users';

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({username: '', password: ''});
    const [loginMessage, setLoginMessage] = useState('');

    const handleLogin = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const submitLogin = (evt) => {
      
        let validLogin = false;

        // axios.get(backendUrl)
        // .then()
        // .catch();

        // axios.get(backendUrl)
        // .then(() => {})
        // .catch(() => {});

        // axios.get(backendUrl)
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch((error) => { console.log(error);});

        axios.get(backendUrl)
        .then((response) => {
            response.data.forEach((obj) => {
                console.log(loginData.username);
                console.log(obj.username);
                // if (obj.username === loginData.username && obj.username === loginData.password) {
                    if (obj.username === loginData.username) {
                        validLogin = true;
                }
            });
            if (validLogin) {
                setLoginData({username: '', password: ''}); 
                setLoginMessage(`You've logged in successfully!`);
                navigate('/emp'); 
                }
                else {
                    setLoginData({username: '', password: ''}); 
                    setLoginMessage(`Invalid credentials!`);  
                    }
        })
        .catch((error) => { console.log(error);});

        evt.preventDefault();  
    };

    return (
        <div>
            <p>Login Component</p>
            <div>
                <p>Please login here.</p>
                <form onSubmit={submitLogin}>
                    <input type="text" name="username" value={loginData.username} onChange={handleLogin} />
                    <br /><br />
                    <input type="password" name="password" value={loginData.password} onChange={handleLogin} />
                    <br /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
            <p>Message:{loginMessage}</p>
        </div>
    );
};

export default Login;

// import { useState } from "react";

// const Login = () => {

//     const [loginData, setLoginData] = useState({username: '', password: ''});
//     const [loginMessage, setLoginMessage] = useState('');

//     const handleLogin = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     const submitLogin = (evt) => {
//         console.log(loginData); 
//         if (loginData.username === 'Sonu' && loginData.password === 'Sonu') {
//             setLoginData({username: '', password: ''}); 
//             setLoginMessage(`You've logged in successfully!`); 
//             }
//             else {
//                 setLoginData({username: '', password: ''}); 
//                 setLoginMessage(`Invalid credentials!`);  
//                 }
//         evt.preventDefault();  
//     };

//     return (
//         <div>
//             <p>Login Component</p>
//             <div>
//                 <p>Please login here.</p>
//                 <form onSubmit={submitLogin}>
//                     <input type="text" name="username" value={loginData.username} onChange={handleLogin} />
//                     <br /><br />
//                     <input type="password" name="password" value={loginData.password} onChange={handleLogin} />
//                     <br /><br />
//                     <input type="submit" value="Login" />
//                 </form>
//             </div>
//             <p>{loginMessage}</p>
//         </div>
//     );
// };

// export default Login;


// import { useState } from "react";

// const Login = () => {

//     const [loginData, setLoginData] = useState({username: '', password: ''});
//     const [loginMessage, setLoginMessage] = useState('');

//     const handleLogin = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     const submitLogin = (evt) => {
//         console.log(loginData); // for testing 
//         alert(`Hi ${loginData.username}! You've logged in successfully!`); // for alert to the user 
//         setLoginData({username: '', password: ''}); // to clear form fields 
//         setLoginMessage(`You've logged in successfully!`); // screen message to the user 
//         evt.preventDefault(); // prevents from page reload 
//     };

//     return (
//         <div>
//             <p>Login Component</p>
//             <div>
//                 <p>Please login here.</p>
//                 <form onSubmit={submitLogin}>
//                     <input type="text" name="username" value={loginData.username} onChange={handleLogin} />
//                     <br /><br />
//                     <input type="password" name="password" value={loginData.password} onChange={handleLogin} />
//                     <br /><br />
//                     <input type="submit" value="Login" />
//                 </form>
//             </div>
//             <p>{loginMessage}</p>
//         </div>
//     );
// };

// export default Login;

// import { useState } from "react";

// const Login = () => {

//     const [loginData, setLoginData] = useState({username: '', password: ''});

//     const handleLogin = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     // object destructuring - 
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//     const submitLogin = (evt) => {
//         console.log(loginData);
//         alert(`Hi ${loginData.username}! You've logged in successfully!`);
//         setLoginData({username: '', password: ''});
//         evt.preventDefault();
//     };

//     return (
//         <div>
//             <p>Login Component</p>
//             <div>
//                 <p>Please login here.</p>
//                 <form onSubmit={submitLogin}>
//                     <input type="text" name="username" value={loginData.username} onChange={handleLogin} />
//                     <br />
//                     <input type="password" name="password" value={loginData.password} onChange={handleLogin} />
//                     <br />
//                     <input type="submit" value="Login" />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

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

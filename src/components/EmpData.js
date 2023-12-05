import { useState } from "react";

const EmpData = () => {

    const [emp, setEmp] = useState(
        { username: '', firstName: '', lastName: '', phone: '', email: '' }
    );


    const handleEmp = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
    };

    const submitEmp = (evt) => {
        console.log(emp);
        // code 
        evt.preventDefault();
    };

    return (
        <div>
            <p>Emp Component</p>
            <div>
                <p>Please enter your details here.</p>
                <form onSubmit={submitEmp}>
                    <label>Username: </label>
                    <input type="text" name="username" value={emp.username} onChange={handleEmp} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <p></p>
        </div>
    );
};

export default EmpData;
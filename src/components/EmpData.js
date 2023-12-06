import { useState } from "react";

const EmpData = () => {

    const [emp, setEmp] = useState(
        { username: '', firstName: '', lastName: '', salary: '', phone: '', email: '' }
    );
    const [displayEmp, setDisplayEmp] = useState('');


    const handleEmp = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEmp({
            ...emp,
            [evt.target.name]: evt.target.value
        });
        setDisplayEmp('');
    };

    const submitEmp = (evt) => {
        console.log(emp);
        setDisplayEmp(emp);
        setEmp({ username: '', firstName: '', lastName: '', salary: '', phone: '', email: '' });
        evt.preventDefault();
    };

    return (
        <div>
            <h1>Emp Component</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                <div>
                    <p>Please enter your details here.</p>
                    <form onSubmit={submitEmp}>
                        <label>*Username: </label>
                        <input type="text" name="username" value={emp.username} onChange={handleEmp} required placeholder="Please enter username" />
                        <br />
                        <label>First name: </label>
                        <input type="text" name="firstName" value={emp.firstName} onChange={handleEmp} />
                        <br />
                        <label>Last name: </label>
                        <input type="text" name="lastName" value={emp.lastName} onChange={handleEmp} />
                        <br />
                        <label>Salary: </label>
                        <input type="number" name="salary" value={emp.salary} onChange={handleEmp} />
                        <br />
                        <label>Phone: </label>
                        <input type="tel" name="phone" value={emp.phone} onChange={handleEmp} />
                        <br />
                        <label>*Email: </label>
                        <input type="email" name="email" value={emp.email} onChange={handleEmp} required />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    <p>Employee data as entered:</p>
                    <p>{emp.username}</p>
                    <p>{emp.firstName}</p>
                    <p>{emp.lastName}</p>
                    <p>{emp.salary}</p>
                    <p>{emp.phone}</p>
                    <p>{emp.email}</p>
                </div>
                <div>
                    {displayEmp &&
                        <>
                            <p>Employee data as submitted:</p>
                            <p>{displayEmp.username}</p>
                            <p>{displayEmp.firstName}</p>
                            <p>{displayEmp.lastName}</p>
                            <p>{displayEmp.salary}</p>
                            <p>{displayEmp.phone}</p>
                            <p>{displayEmp.email}</p>
                        </>
                    }
                    <div>
                        {(10 == 11) &&
                            <div>{(10 + 20)}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpData;
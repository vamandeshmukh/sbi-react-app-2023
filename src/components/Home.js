import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Samriddhi_Bhavan_-_River_Hooghly_2012-10-23_1265.JPG/2560px-Samriddhi_Bhavan_-_River_Hooghly_2012-10-23_1265.JPG")`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: 'cover',
                    backgroundColor: 'black'
                }}
            >
                <div>
                    <div style={{
                        minHeight: "100vh",
                        alignItems: 'center',
                        justifyContent: 'right',
                    }} >
                        <h1 >SBI IT React App</h1>
                        <Link style={{ textDecoration: 'none' }} to='/emp'>Enter...</Link>
                    </div>
                </div>
            </div >
        </div >
    );
};
export default Home;



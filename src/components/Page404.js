import { Link } from 'react-router-dom';

const Page404 = () => {

    return (
        <div>
            <p>Sorry! The page you're looking for isn't found.</p>
            <p>Wanna go <Link to='home'>Home</Link>?</p>
        </div>
    );
};

export default Page404;

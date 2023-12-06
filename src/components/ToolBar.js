import { Link } from 'react-router-dom';

const ToolBar = () => {

    return (
        <div>
            <Link to={'home'}>Home </Link>
            <Link to={'emp'}>Emp </Link>
            <Link to={'parent'}>Parent </Link>
            <Link to={'login'}>Login </Link>
            <Link to={'logout'}>Logout </Link>


        </div>
    );
};

export default ToolBar;

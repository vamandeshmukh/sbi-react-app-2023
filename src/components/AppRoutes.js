import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EmpData from './EmpData';
import Parent from './Parent';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Page404 from './Page404';

const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='home' Component={Home}>Home</Route>
                    <Route path='emp' Component={EmpData}>Emp</Route>
                    <Route path='parent' Component={Parent}>Parent</Route>
                    <Route path='login' Component={Login}>Parent</Route>
                    <Route path='logout' Component={Logout}>Parent</Route>
                    <Route path='' Component={Home}>Home</Route>
                    <Route path='*' Component={Page404}>Home</Route>
                </Routes>
            </BrowserRouter>
        </div>
    );

};

export default AppRoutes;

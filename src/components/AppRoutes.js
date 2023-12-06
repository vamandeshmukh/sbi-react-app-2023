import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { redirect } from "react-router-dom";
import EmpData from './EmpData';
import Parent from './Parent';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Page404 from './Page404';
import ToolBar from './ToolBar';



const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <>
                    <ToolBar />
                </>
                <Routes>
                    <Route path='home' Component={Home} />
                    <Route path='emp' Component={EmpData} />
                    <Route path='parent' Component={Parent} />
                    <Route path='login' Component={Login} />
                    <Route path='logout' Component={Logout} />
                    <Route exact path='' Component={Home} />
                    <Route path='*' Component={Page404} />
                </Routes>
            </BrowserRouter>
        </>
    );

};

export default AppRoutes;

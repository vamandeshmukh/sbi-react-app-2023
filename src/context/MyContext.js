
import { createContext, useContext, useState } from 'react';

const MyContext = createContext(); // one central object 

export const MyContextProvider = ({ children }) => {
    console.log(children);

    const [contextData, setContextData] = useState('initial data');

    return (
        <MyContext.Provider value={{ contextData, setContextData }} >
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    console.log('useMyContext');
    return useContext(MyContext);
};  
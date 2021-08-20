import React, { createContext, useState } from 'react';

export const LoginDetailsContext = createContext();

function LoginDetailsContextProvider (props){
    
    const [isLogedIn, setIsLogedIn] = useState(false);

    return (
        <LoginDetailsContext.Provider value={{isLogedIn, setIsLogedIn}}>
            {props.children}
        </LoginDetailsContext.Provider>
    );
    
}
 
export default LoginDetailsContextProvider;

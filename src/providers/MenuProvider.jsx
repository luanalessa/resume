import React, {createContext} from 'react';

export const MenuContext = createContext({});

export const MenuProvider = (props) => {    

    return(
        <MenuContext.Provider
            value={{
               
            }}
        >

            {props.children}
        </MenuContext.Provider>
    )
}


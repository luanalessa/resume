import React, {useState, createContext} from 'react';

export const MenuContext = createContext({});

export const MenuProvider = (props) => {  
    const [isFolder, setIsFolder] = useState(false)  
    const [isChrome, setIsChrome] = useState(false)  

    const handleMenu = (selected) =>{
        if(selected === 'folder') setIsFolder(true);
        else setIsChrome(true)
        console.log(isFolder,isChrome)

    }
    return(
        <MenuContext.Provider
            value={{
                isFolder,
                isChrome,
                handleMenu
            }}
        >

            {props.children}
        </MenuContext.Provider>
    )
}


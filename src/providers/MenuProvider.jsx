import React, {useState, createContext} from 'react';

export const MenuContext = createContext({});

export const MenuProvider = (props) => {  
    const [isFolder, setIsFolder] = useState({
        projects : false,
        workingOn: false,
        chrome: false
    })  

    const handleMenu = (selected) =>{
        console.log(selected)
        if(selected === 'projects') {
            setIsFolder({...isFolder, projects : true})
        }else if( selected === 'workingOn'){
            setIsFolder({...isFolder, workingOn : true})
        }else {
            setIsFolder({...isFolder, chrome : true})
        }
        console.log(isFolder.projects)

    }

    const closeMenu = (selected) =>{
        if(selected === 'projects') {
            setIsFolder({...isFolder, projects : false})
        }else if( selected === 'workingOn'){
            setIsFolder({...isFolder, workingOn : false})
        }else {
            setIsFolder({...isFolder, chrome : false})
        }
    }

    return(
        <MenuContext.Provider
            value={{
                isFolder,
                handleMenu,
                closeMenu
            }}
        >

            {props.children}
        </MenuContext.Provider>
    )
}


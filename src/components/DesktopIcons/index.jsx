import React, {useState, useContext} from 'react';
import Draggable from "react-draggable";

import {MenuContext} from '../../providers/MenuProvider'


import * as S from './styles'

export default function DesktopIcons({ folder, className, icon, title, onOpen, disabled}){
    const  {handleMenu}  = useContext(MenuContext)

    const [isCommandHandled, setIsCommandHandled] = useState(false);
    const [ buttonPressTimer, setButtonPressTimer ] = useState(false);

    
    const handleButtonPress = function (e) {
        setIsCommandHandled(false);
        setButtonPressTimer(setTimeout(handleLongPress, 250, e));
    };

    const handleLongPress = (e) => {
        setIsCommandHandled(true);
        clearTimeout(buttonPressTimer);
      };
    
      const onMenuModal = (menu) => {
        onOpen(true); 
        handleMenu(menu);
      }
    
    return ( 
        <Draggable
        bounds='parent'
        disabled={disabled}
        onMouseDown={(e) => handleButtonPress(e)}
        >
        <S.IconDesktop key='icon' className={className} onClick={()=> 
            isCommandHandled ? 
                onOpen(false)  : onMenuModal(folder) }>
            <S.Icon className={icon} />
                {title}
            </S.IconDesktop>
        </Draggable>

     )
}
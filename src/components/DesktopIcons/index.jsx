import React, {useState} from 'react';
import Draggable from "react-draggable";

import * as S from './styles'

export default function DesktopIcons({ className, icon, title, onOpen, disabled, key}){
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
    
    
    return ( 
        <Draggable
        bounds='parent'
        disabled={disabled}
        onMouseDown={(e) => handleButtonPress(e)}
        >
        <S.IconDesktop key={key} className={className} onClick={()=> isCommandHandled ? onOpen(false) : onOpen(true)} >
            <S.Icon className={icon} />
            {title}
            </S.IconDesktop>
        </Draggable>

     )
}
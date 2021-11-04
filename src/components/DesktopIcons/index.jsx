import React from 'react';
import Draggable from "react-draggable";

import * as S from './styles'

export default function DesktopIcons({ className, icon, title, onOpen, disabled}){
   
    return ( 
        <Draggable
        bounds='parent'
        disabled={disabled}
        >
            <S.IconDesktop className={className} onClick={()=> onOpen(true)}>
            <S.Icon className={icon} />
            {title}
            </S.IconDesktop>
        </Draggable>

     )
}
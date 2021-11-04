import React, {useEffect} from 'react';
import Draggable from "react-draggable";

import * as S from './styles'

export default function DesktopIcons({ className, icon, title}){
   
    return ( 
        <Draggable
        bounds='parent'
        >
            <S.IconDesktop className={className} >
            <S.Icon className={icon} />
            {title}
            </S.IconDesktop>
        </Draggable>

     )
}
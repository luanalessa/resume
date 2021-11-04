import React from 'react'
import Draggable from "react-draggable";

import * as S from './styles'
import DesktopIcon from '../DesktopIcons'
import Projects from '../Projects'

export default function Window({setModal, title}) {

    return (
      <Draggable bounds='parent'>
            <S.Content>
              <S.Header>
                <S.Label>{title}</S.Label>
              </S.Header>
              <Projects/>
            </S.Content>
      </Draggable>
    )
  }
  
  
  

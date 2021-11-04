import React from 'react'
import Draggable from "react-draggable";

import * as S from './styles'

import Projects from '../Projects'
import WorkingOn from '../WorkingOn'


import {ReactComponent as Minimize} from '../../assets/image/minimize.svg'
import {ReactComponent as Maximize} from '../../assets/image/maximize.svg'
import {ReactComponent as Close} from '../../assets/image/close.svg'


export default function Window({setModal, title, component}) {

    return (
      <Draggable bounds='parent'
      defaultPosition={{x: 100, y: 20}}>
            <S.Content>
              <S.Header>
                <S.Label>{title}</S.Label>
                <S.Label>
                  <Minimize className='btn minimize'/>
                  <Maximize className='btn maximize'/>
                  <Close className='btn close' onClick={()=> setModal(false)}/>
                </S.Label>
              </S.Header>
             { component === 'Projects' && <Projects disabled={true}/> }
             { component === 'Working On' && <WorkingOn disabled={true}/> }

            </S.Content>
      </Draggable>
    )
  }
  
  
  

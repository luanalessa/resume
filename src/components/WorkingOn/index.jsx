import React from 'react'

import * as S from './styles'
import DesktopIcon from '../DesktopIcons'

export default function WorkingOn() {

    return (
            <S.Content>
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Mymoney'/> 
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Service Managment'/> 
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Genius 2.0'/>
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' React Scape'/>
            </S.Content>
    )
  }
  
  
  

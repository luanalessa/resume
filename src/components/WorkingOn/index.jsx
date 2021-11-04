import React from 'react'

import * as S from './styles'
import DesktopIcon from '../DesktopIcons'

export default function WorkingOn({disabled}) {

    return (
            <S.Content>
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Mymoney'
                disabled={disabled}
                /> 
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Service Managment'
                disabled={disabled}
                /> 
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Genius 2.0'
                disabled={disabled}
                />
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' React Scape'
                disabled={disabled}
                />
            </S.Content>
    )
  }
  
  
  

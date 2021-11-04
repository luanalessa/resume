import React from 'react'

import * as S from './styles'
import DesktopIcon from '../DesktopIcons'

export default function Projects({disabled}) {

    return (
            <S.Content>
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Animalandia'
                disabled={disabled}
                /> 
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Eventin'
                disabled={disabled}
                /> 
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Alphaflix'
                disabled={disabled}
                />
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Genius 1.0'
                disabled={disabled}
                />
              <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Github Explorer'
                disabled={disabled}
                />
               <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Alphapet'
                disabled={disabled}
                />
               <DesktopIcon 
                className='chickable dark'
                icon = 'folder'
                title=' Alphashoes'
                disabled={disabled}
                />
            </S.Content>
    )
  }
  
  
  

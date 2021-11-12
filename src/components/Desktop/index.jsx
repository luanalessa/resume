import React, {useContext, useState} from 'react'
import {MenuContext} from '../../providers/MenuProvider'

import * as S from './styles'
import DesktopIcon from '../DesktopIcons'
import Window from '../Window'

export default function Desktop() {
  const  {isFolder, isChrome, handleMenu}  = useContext(MenuContext)
  const [navigateProjects, setNavigateProjects] = useState(false)
  const [navigateWorkingOn, setNavigateWorkingOn] = useState(false)

 
    return (
            <S.Content>
            { navigateProjects && (
                <Window 
                  setModal={setNavigateProjects} 
                  title="Projects" 
                  component='Projects'
                  key='Projects'
                  >
                </Window>
            )}
            { navigateWorkingOn && (
                <Window 
                  setModal={setNavigateWorkingOn}
                  title="Working On" 
                  component='Working On'
                  key='Working on'
                  >
                </Window>
            )}

              <DesktopIcon 
                onOpen={setNavigateProjects}
                setMenu={handleMenu('folder')}  
                className='chickable'
                icon = 'folder'
                title='Projects'
                key='Projects icon'

              />
              <DesktopIcon 
                onOpen={setNavigateWorkingOn}
                setMenu={handleMenu('folder')}  
                className='chickable'
                icon = 'folder'
                title=' Working on'
                key='Working on icon'

               
              />
              <DesktopIcon
                setMenu={handleMenu('chrome')} 
                className='chickable'
                icon = 'cv'
                title=' Resume'
                key='Resume icon'

                
              />              
            </S.Content>
    )
  }
  
  
  

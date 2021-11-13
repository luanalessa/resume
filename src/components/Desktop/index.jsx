import React, {useState} from 'react'

import * as S from './styles'
import DesktopIcon from '../DesktopIcons'
import Window from '../Window'

export default function Desktop() {
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
                  menu='projects'
                  >
                </Window>
            )}
            { navigateWorkingOn && (
                <Window 
                  setModal={setNavigateWorkingOn}
                  title="Working On" 
                  component='Working On'
                  key='Working on'
                  menu='workinOn'
                  >
                </Window>
            )}

              <DesktopIcon 
                onOpen={setNavigateProjects}
                className='chickable'
                icon = 'folder'
                title='Projects'
                key='Projects icon'
                folder='projects'

              />
              <DesktopIcon 
                onOpen={setNavigateWorkingOn}
                className='chickable'
                icon = 'folder'
                title=' Working on'
                key='Working on icon'
                folder='projects'

               
              />
              <DesktopIcon
                className='chickable'
                icon = 'cv'
                title=' Resume'
                key='Resume icon'   
                folder='chrome'

              />              
            </S.Content>
    )
  }
  
  
  

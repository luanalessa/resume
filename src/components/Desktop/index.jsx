import React, {useState} from 'react'


import * as S from './styles'
import DesktopIcon from '../DesktopIcons'
import Window from '../Window'

export default function Desktop() {
  const [navigateProjects, setNavigateProjects] = useState(false)
  const [navigateWorkingOn, setNavigateWorkingOn] = useState(false)
 

  // const [resumeWindow, setResumeWindow] = useState(false)

    return (
            <S.Content>
            { navigateProjects && (
                <Window 
                  setModal={setNavigateProjects} 
                  title="Projects" 
                  component='Projects'
                  >
                </Window>
            )}
            { navigateWorkingOn && (
                <Window 
                  setModal={setNavigateWorkingOn} 
                  title="Working On" 
                  component='Working On'>
                </Window>
            )}

              <DesktopIcon 
                onOpen={setNavigateProjects} 
                className='chickable'
                icon = 'folder'
                title='Projects'
              />
              <DesktopIcon 
                onOpen={setNavigateWorkingOn} 
                className='chickable'
                icon = 'folder'
                title=' Working on'
              />
              <DesktopIcon 
                className='chickable'
                icon = 'cv'
                title=' Resume'
              />              
            </S.Content>
    )
  }
  
  
  

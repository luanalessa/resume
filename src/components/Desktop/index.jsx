import React, {useState} from 'react'


import * as S from './styles'
import DesktopIcon from '../DesktopIcons'
import Window from '../Window'

export default function Desktop() {
  const [projectWindow, setProjectWindow] = useState(true)
  // const [resumeWindow, setResumeWindow] = useState(false)

    return (
            <S.Content>
            { projectWindow && (
                <Window setModal={setProjectWindow} title="Projects"></Window>)
            }
              <DesktopIcon 
                className='chickable'
                icon = 'folder'
                title='Projects'
              />
              <DesktopIcon 
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
  
  
  

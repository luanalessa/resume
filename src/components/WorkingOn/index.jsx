import React, {useState} from 'react'

import * as S from './styles'
import DesktopIcon from '../DesktopIcons'

const projects = [
  {
    href:'https://github.com/luanalessa/my-money',
    className: 'chickable dark',
    icon: 'folder',
    title:'My-money'
  },
  {
    href:'https://github.com/luanalessa/service-managment',
    className: 'chickable dark',
    icon: 'folder',
    title:'Service Managment'
  },  
  {
    href:'https://github.com/luanalessa/genius-backend',
    className: 'chickable dark',
    icon: 'folder',
    title:'Genius 2.0'
  },
  {
    href:'https://github.com/luanalessa/react-scape',
    className: 'chickable dark',
    icon: 'folder',
    title:'React Scape'
  }
]


export default function WorkingOn({disabled}) {
  const [navigateFolder, setNavigateFolder] = useState(false)

    return (
            <S.Content>
              {projects.map(p => (
              <S.Link 
              href={p.href} 
              rel='noreferrer' 
              target='_blank'>  
                <DesktopIcon 
                  className= {p.className}
                  icon = {p.icon}
                  title={p.title}
                  disabled={disabled}
                  onOpen={setNavigateFolder}
                  key={navigateFolder}
                /> 
              </S.Link>  
            ))}
            </S.Content>
    )
  }
  
  
  

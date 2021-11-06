import React, {useState} from 'react'

import * as S from './styles'
import DesktopIcon from '../DesktopIcons'

const projects = [
  {
    href:'https://github.com/luanalessa/Animalandia',
    className: 'chickable dark',
    icon: 'folder',
    title:'Animalandia'
  },
  {
    href:'https://github.com/luanalessa/eventin-frontend',
    className: 'chickable dark',
    icon: 'folder',
    title:'Eventin'
  },  
  {
    href:'https://github.com/luanalessa/alphaflix-frontend',
    className: 'chickable dark',
    icon: 'folder',
    title:'Alphaflix'
  },
  {
    href:'https://github.com/luanalessa/genius-challenge',
    className: 'chickable dark',
    icon: 'folder',
    title:'Genius 1.0'
  },
  {
    href:'https://github.com/luanalessa/alphapet-edtech',
    className: 'chickable dark',
    icon: 'folder',
    title:'Alphapet'
  },  
  {
    href:'https://github.com/luanalessa/githubexplorer-edtech ',
    className: 'chickable dark',
    icon: 'folder',
    title:'Github Explorer'
  },
  {
    href:'https://github.com/luanalessa/alphashoes-frontend',
    className: 'chickable dark',
    icon: 'folder',
    title:'Alphashoes'
  }
]

export default function Projects({disabled}) {
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
  
  
  

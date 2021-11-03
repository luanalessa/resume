import React from 'react'

import * as S from './styles'

import { ReactComponent as CV } from '../../assets/image/cv.svg'
import { ReactComponent as Folder } from '../../assets/image/folder.svg'

export default function Desktop({ setModal, children }) {
  
    return (
            <S.Content>
              <S.Icon className='folder' key='icon folder'>
                <Folder /><label>Projects</label>
              </S.Icon>

              <S.Icon className='cv'>
                <CV />
                <label>CV</label>
              </S.Icon>
            
            </S.Content>
    )
  }
  
  
  

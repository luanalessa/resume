import React, {useContext} from 'react'
import { MenuContext } from '../../providers/MenuProvider'

import * as S from './styles'
import Desktop from '../Desktop'
import Clock from '../Clock'

const selected = {
    backgroundColor: '#31509A',  
    borderRadius: '10px',
  }

export default function Computer({ setModal, children }) {
    const { isFolder } = useContext(MenuContext)
    console.log(isFolder.workingOn)
    
    return (
        <S.ModalContainer>
            <S.Header> 
                <S.Label>Activities</S.Label>
                <S.Label>
                  <Clock/>
                </S.Label>
                <S.Label >
                <i onClick={() => setModal(false)} className='bx bx-power-off' ></i></S.Label>
            </S.Header>
            <S.Content>
                <S.Menu>
                    <S.Icons 
                      className={ 'clickable folder' }
                      style={isFolder.projects || isFolder.workingOn ? selected : null} /> 
                    <S.Icons
                      className={ 'clickable chrome' }
                      style={isFolder.chrome ? selected : null} 
                      />
                    <S.Icons className='menu'/>
                </S.Menu>
                  <Desktop />
            </S.Content>
        </S.ModalContainer>
    )
  }
  
  
  

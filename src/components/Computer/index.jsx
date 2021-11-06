import React from 'react' 

import * as S from './styles'
import Desktop from '../Desktop'
import Clock from '../Clock'


export default function Computer({ setModal, children }) {
  
  
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
                    <S.Icons className='chickable folder'/>
                    <S.Icons className='chickable chrome'/>
                    <S.Icons className='menu'/>
                </S.Menu>
                  <Desktop />
            </S.Content>
        </S.ModalContainer>
    )
  }
  
  
  

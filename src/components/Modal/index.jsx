import React, { useRef } from 'react'

import * as S from './styles'
import Desktop from '../Desktop'

export default function Modal({ setModal, children }) {
    const modalRef = useRef()
  
    const closeModal = ({ target }) => {
      return target === modalRef.current ? setModal(false) : ''
    }
  
    return (
      <S.BackgroundContainer ref={modalRef} onClick={closeModal}>
        <S.ModalContainer>
            <S.Header> 
                <S.Label>Activities</S.Label>
                <S.Label>nove 7 10:30</S.Label>
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
      </S.BackgroundContainer>
    )
  }
  
  
  

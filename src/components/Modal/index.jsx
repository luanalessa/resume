import React, { useRef } from 'react' 

import * as S from './styles'


export default function Modal({ setModal, children }) {
    const modalRef = useRef()
  
    const closeModal = ({ target }) => {
      return target === modalRef.current ? setModal(false) : ''
    }
  
    return (
      <S.BackgroundContainer ref={modalRef} onClick={closeModal}>
       { children }
      </S.BackgroundContainer>
    )
  }
  
  
  

import React, { useContext,useRef } from 'react' 

import * as S from './styles'
import {MenuContext} from '../../providers/MenuProvider'


export default function Modal({ setModal, children }) {
    const modalRef = useRef()
    const  {closeMenu}  = useContext(MenuContext)

  
    const exit = () => {
      setModal(false);
      closeMenu();
    } 
    const closeModal = ({ target }) => {
      return target === modalRef.current ?  exit() : '' 
    }
  
    return (
      <S.BackgroundContainer ref={modalRef} onClick={closeModal}>
       { children }
      </S.BackgroundContainer>
    )
  }
  
  
  

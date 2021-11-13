import React, {useContext} from 'react'
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

import * as S from './styles'

import Resume from '../Resume'
import {MenuContext} from '../../providers/MenuProvider'
 

import {ReactComponent as Minimize} from '../../assets/image/icons/minimize.svg'
import {ReactComponent as Maximize} from '../../assets/image/icons/maximize.svg'
import {ReactComponent as Close} from '../../assets/image/icons/close.svg'

import {ReactComponent as ChromeBuyMeACoffee} from '../../assets/image/icons/buymeacoffee.svg'
import {ReactComponent as ChromeResume} from '../../assets/image/icons/resume.svg'

const style = {
  background: "#3A4365",
  boxShadow: "1px 1px 6px #b1b1b16e",
  
  paddin: "10px",
  margin: "10px 10px",
  display: "flex",
  flexWrap: "wrap",
  position: "absolute",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  zIndex: 16,
};

const size = {
  width:574,
  height:390,
}

export default function Chrome({setModal, title, component}) {
  const  {closeMenu}  = useContext(MenuContext)

    return (
      <Draggable bounds='parent'
        defaultPosition={{x: 100, y: 20}}>
          <Resizable 
            style={style} 
            defaultSize={size}
            minWidth={480}
            minHeight={300}

            maxWidth={778}
            maxHeight={480}
            key='Window Desktop'
            >
              <S.Header >
                <S.Label>{title}</S.Label>
                <S.Label>
                  <Minimize className='btn minimize'/>
                  <Maximize className='btn maximize'/>
                  <Close className='btn close' onClick={()=> {setModal(false); closeMenu()}}/>
                </S.Label>
              </S.Header>
              <S.Navigate>
              <ChromeBuyMeACoffee className='aba buyme' />
              <ChromeResume className='aba resume'/>
              <S.Search>
                <S.BoxIcon>
                <i class='bx bx-left-arrow-alt'></i>
                <i class='bx bx-right-arrow-alt'></i>
                <i class='bx bx-refresh' ></i>
                </S.BoxIcon>
               <S.SearchBar/>
              </S.Search>

              </S.Navigate>
              <Resume disabled={true}/> 
            </Resizable>  

      </Draggable>
    )
  }
  
  
  

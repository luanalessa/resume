import React, {useContext} from 'react'
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";



import * as S from './styles'

import Projects from '../Projects'
import WorkingOn from '../WorkingOn'
import {MenuContext} from '../../providers/MenuProvider'


import {ReactComponent as Minimize} from '../../assets/image/icons/minimize.svg'
import {ReactComponent as Maximize} from '../../assets/image/icons/maximize.svg'
import {ReactComponent as Close} from '../../assets/image/icons/close.svg'

const style = {
  background: "#fff",
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

export default function Window({setModal, title, component, menu}) {
  const  {closeMenu}  = useContext(MenuContext)

    return (
      <Draggable bounds='parent'
        defaultPosition={{x: 100, y: 20}}>
          <Resizable 
            style={style} 
            defaultSize={size}
            minWidth={300}
            minHeight={300}

            maxWidth={778}
            maxHeight={480}
            key='Window Desktop'
            >
              <S.Header>
                <S.Label>{title}</S.Label>
                <S.Label>
                  <Minimize className='btn minimize' />
                  <Maximize className='btn maximize'/>
                  <Close 
                    className='btn clickable close'
                    onClick={()=> {
                      setModal(false)
                      closeMenu(menu)
                    }
                      }/>
                </S.Label>
              </S.Header>
             { component === 'Projects' && <Projects key='' disabled={true}/> }
             { component === 'Working On' && <WorkingOn key='' disabled={true}/> }
          </Resizable>  
      </Draggable>
    )
  }
  
  
  

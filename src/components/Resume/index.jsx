import React from 'react'
import ResumePdf  from '../../assets/document/resume.pdf'
import * as S from './styles'
import {ReactComponent as Zoom} from '../../assets/image/icons/pdf-zoom.svg'

export default function Projects({disabled}) {
    return (
            <S.Content>
                <S.Header>
                <S.Menu>
                <i className='bx bx-menu'></i>
                </S.Menu>
                <Zoom className='zoom' />
                <S.Menu>
                <a href={ResumePdf} download="Luana Lessa.pdf">
                  <i class='bx bxs-download' ></i>
                </a>
                </S.Menu>
                </S.Header>
                <S.Document></S.Document>
            </S.Content>
    )
  }
  
  
  

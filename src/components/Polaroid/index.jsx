import React from 'react';

import * as S from './styles'

export default function Polaroid({ src, title, legend, onClick}){
   
    return ( 
       <S.Content onClick={onClick}>
           <S.Image src={src} alt={title}></S.Image>
           <S.Title>{title}</S.Title>
           <S.Legend>{legend}</S.Legend>
       </S.Content>

     )
}
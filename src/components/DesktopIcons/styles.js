import styled from 'styled-components'

import folder from '../../assets/image/folder.png'
import cv from '../../assets/image/cv.png'

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    margin: 5px;


    background-size: cover;

    
    &.folder{
      background-image: url(${folder});
    }
    &.cv{
      background-image: url(${cv});
    }
  
`

export const IconDesktop = styled.div` 

    width: 100px;
    height: 60px;
    color: #fff;
    font-size: 14px;
    

    margin: 20px;
    cursor: pointer;


    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    line-height:15px;
    text-align: center;

    &.dark{
      color: #0B1020;
    }
    
`
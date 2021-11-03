import styled from 'styled-components'

import desktop from '../../assets/image/desktop-bg.png'
import cv from '../../assets/image/cv.svg'


export const Content = styled.div`
  width: 874px;
  height: 490px;

  background-image: url(${desktop});
  background-position: center;
  background-size: cover;
  
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 140;
`
export const Icon = styled.div`
    width: 60px;
    height: 0px;
    cursor: pointer;
    background-size: cover;

    
  
`
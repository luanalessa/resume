import styled from 'styled-components'

import desktop from '../../assets/image/desktop-bg.png'

export const Content = styled.div`
  width: 874px;
  height: 100%;

  background-image: url(${desktop});
  background-position: center;
  background-size: cover;
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  z-index: 14;

`

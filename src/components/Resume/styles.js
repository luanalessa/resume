import styled from 'styled-components'

import resume from '../../assets/image/pictures/resume.png'

export const Content = styled.div`
  width: 100%;
  height: 80%;

  
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-content: flex-start;
  z-index: 15;

  overflow: auto;
`

export const Header = styled.div`
  width: 100%;
  height: 30px;

  background: #0B1020;
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;


  justify-content: space-between;
  padding: 0x 10px;

  color: #fff;
  font-size: 20px;

  .zoom{
    height: 20px;
    margin-top: 5px;
  }
 
`

export const Menu = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;

  .bxs-download{
    cursor: pointer;
  }

  a{
    all:unset;
  }
`

export const Document = styled.div`
  width: 390px;
  height: 570px;

  background-image: url(${resume});
  background-size: cover;

  margin-top: 10px;


`

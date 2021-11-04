import styled from 'styled-components'


export const Content = styled.div`
  width: 574px;
  height: 390px;

  background: #fff;
  
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: flex-start;
  align-content: flex-start;
  z-index: 15;
`

export const Header = styled.div`
  width: 574px;
  height: 30px;

  background: #2C3F7B;
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  padding: 5px 10px;
 
`

export const Label = styled.label`
    width: auto;
    height: 40px;
    color: #fff;

    font-size: 12px;
    line-height: 22px;

    .bx-power-off{
        font-size: 20px;
        cursor: pointer;
    }

`
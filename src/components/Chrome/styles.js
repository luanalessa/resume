import styled from 'styled-components'


export const Content = styled.div`
  width: 574px;
  height: auto;

  background: #fff;
  box-shadow: 1px 1px 6px #b1b1b16e;
  
  margin: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  justify-content: flex-start;
  align-content: flex-start;
  z-index: 16;
`

export const Header = styled.div`
  width: 574px;
  height: 30px;

  background: #2C3F7B;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;

 
 
`

export const Label = styled.label`
    width: auto;
    height: 30px;
    color: #fff;

    
    font-size: 12px;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    .btn{
      margin: 0 10px;
      cursor: pointer;
    }
    
    .close{
      width: 14px;
      height: 14px;
    }

`
import styled from 'styled-components'

import chrome from '../../assets/image/icons/chrome-off.png'
import folder from '../../assets/image/icons/folder-off.png'
import menu from '../../assets/image/icons/menu.svg'


export const ModalContainer = styled.div`
  width: 874px;
  height: 540px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;



  margin: 30px auto;

  animation: animate 0.3s;

  @keyframes animate {
    from {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
`

export const Content = styled.div`
  width: 874px;
  height: 500px;

  display: flex;
  border-radius: 0 0 5px 5px ;
  position: relative;

`

export const Header = styled.div`
    width: 874px;
    height: 40px;
    background: #0B1020;
    border-radius: 5px 5px 0 0 ;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
    text-align: center;

    padding: 10px;

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
export const Menu = styled.div`
    width: 80px;
    height: 500px;
    background: #1f3770;

    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-content: flex-start;

`

export const Icons = styled.div`
    width: 60px;
    height: 60px;
    background-size: cover;


    &.folder{
        background-image: url(${folder});
        cursor: pointer;
        margin-top: 10px;
    }
    
    &.chrome{
        background-image: url(${chrome});
        cursor: pointer;
        margin-top: 10px;
    }

    &.chickable:hover{
        background-color: #31509A;       
        border-radius: 10px;
    }
    
    &.menu{
        width: 30px;
        height: 28px;
        background-image: url(${menu});

        margin-top: 310px;
    }
  
`

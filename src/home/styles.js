import styled from 'styled-components'
import joker from '../assets/image/pictures/coringa.jpeg'
export const Container = styled.div`
 
  margin: 0 auto;
 
  width: 1200px;
  height: 600px;

  

`

export const Painting = styled.div`
  
  width: 400px;
  height: 500px;

  background-image: url(${joker});
  background-size: cover;

  border: solid 20px #fff;

  margin-top: 30px;

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

export const Left = styled.div`
  /* background: white; */

  width: 210px;
  height: 400px;

  position: relative;
  float: left;
  z-index: 3;

  margin-top:100px;
  margin-left:80px;


  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;

  .painel{
    width: 180px;
    height: auto;
    position: absolute;
    z-index: 4;
  }

  .polaroid{
    width: 42px;
    height: auto;
    position: relative;
    z-index: 4;

    cursor: pointer;
    &.clickable:hover{
    position: relative;
    animation: treme 0.4s;
    animation-iteration-count: 2;
    }

    @keyframes treme {
      0% {margin-left: 0;}
      25% {margin-left: 2px;}
      50% {margin-left: 0;}
      75% {margin-left: -2px;}
      100% {margin-left: 0;}
    }
       
    
  }

  .p-one{
    bottom: 20px;
    left: 10px;
  }

  .p-two{
    bottom: 35px;
    left: 24px;
  }

  .p-three{
    left: 34px;
    bottom: 55px;

  }

  .p-four{
    top: 0px;
    right: 20px;
  }

  .p-five{
    top: 30px;
    right: 10px;
  }

  .note{
    width: 65px;
    height: auto;
    position: absolute;
    z-index: 4;

    top: 216px;
    right: 90px;

    cursor: pointer;

    &.clickable:hover{
    animation: treme 0.4s;
    animation-iteration-count: 2;
    }

    @keyframes treme {
      0% {margin-left: 0;}
      25% {margin-left: 2px;}
      50% {margin-left: 0;}
      75% {margin-left: -2px;}
      100% {margin-left: 0;}
    }
  }

  .coffee{
    width: 36px;
    height: auto;
    position: absolute;

    z-index: 4;

    top: 301px;
    right: 89px;

    cursor: pointer;
  }

`

export const Center = styled.div`
  /* background: green; */

  width: 460px;
  height: 400px;


  position: absolute;
  z-index: 3;

  margin-top:100px;
  margin-left: 400px;

  .boards{
    width: 190px;
    height: auto;
    margin-top: 10px;
    margin-left: 75px;

    position: absolute;
    cursor: pointer;

  }
  .computer{
    width: 140px;
    height: auto;
    margin-top: 145px;
    margin-left: 85px;

    cursor: pointer;
    &:hover{

    }
  }

`

export const Right = styled.div`
  width: 180px;
  height: 200px;

  /* background: white; */
  position: absolute;
  z-index: 3;
  margin-top: 100px;
  margin-left: 940px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .paint{
    width: 80px;
    height: 90px;

    margin-top: -35px;
    cursor: pointer;
    
    &.clickable:hover{
      animation: rotation 0.3s;
    }

    @keyframes rotation {
      0% {transform: rotateZ(0deg);}
      25% {transform: rotateZ(5deg);}
      50% {transform: rotateZ(10deg)}
      75% {transform: rotateZ(5deg)}
      100% {transform: rotateZ(0deg)}
    }

  }

  .linux{
    width: 30px;
    height: 40px;
    margin-top: 10px;
    margin-left: 20px;
    position: absolute;
    cursor: pointer;
    
  }
`

export const Shelf = styled.div`
  width: 180px;
  height: 47px;

  /* background-color: white; */

  margin: 10px 5px;

  display: flex;
  flex-wrap: wrap;  

  &.books{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;

    margin: 10px 5px;

    

  }

  &.social-midia{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-top: 25px;
    
    .clickable:hover{
    position: relative;
    animation: treme 0.4s;
    animation-iteration-count: 2;
    }

    @keyframes treme {
      0% {margin-top: 0;}
      25% {margin-top: 2px;}
      50% {margin-top: 0;}
      75% {margin-top: -2px;}
    100% {margin-top: 0;}
    }
  }


  .zero {
    width: auto;
    height: 22px;
  }

  .one {
    width: auto;
    height: 40px;

    margin-left: 10px;
  }

  .two {
    width: auto;
    height: 30px;

  }

  .three {
    width: auto;
    height: 40px;

  }

  .four {
    width: auto;
    height: 40px;

  }

  .five, .six, .seven {
    width: auto;
    height: 30px;  
  }

  .eight {
    width: auto;
    height: 26px;  
  }

  .nine, .ten {
    width: auto;
    height: 38px;  
  }
  .eleven {
    width: auto;
    height: 38px;  
  }

  .twelve {
    width: auto;
    height: 33px;  
  }

  .thirteen {
    width: auto;
    height: 33px;  
  }
 
  .icon {
    width: auto;
    height: 30px;
    margin: 0 5px;  
  }
`


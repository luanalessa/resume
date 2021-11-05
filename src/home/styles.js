import styled from 'styled-components'

export const Container = styled.div`
 
  margin: 0 auto;
 
  width: 1200px;
  height: 600px;


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
  }

  .p-one{
    top: 5px;
    left: 10px;
  }

  .p-two{
    bottom: 25px;
    left: 24px;
  }

  .p-three{
    left: 34px;
  }

  .p-four{
    top: 30px;
    right: 60px;
  }

  .p-five{
    top: 50px;
    right: 10px;
  }

  .note{
    width: 65px;
    height: auto;
    position: relative;
    z-index: 4;

    top: 36px;
    right: 5px;

    cursor: pointer;
  }

  .coffee{
    width: 36px;
    height: auto;
    position: relative;

    z-index: 4;

    top: 79px;
    right: 35px;

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

    cursor: pointer;

    &:hover{

    }
  }
  .computer{
    width: 140px;
    height: auto;
    margin-top: 20px;
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
    
    &:hover{

    }

  }

  .linux{
    width: 30px;
    height: 40px;
    margin-top: 10px;
    margin-left: 20px;

    cursor: pointer;
    
    &:hover{

    }
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

  }

  .book, .social{
    cursor: pointer;
    
    &:hover{

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

import styled from 'styled-components'

export const Container = styled.div`
 
  margin: 0 auto;
 
  width: 1200px;
  height: 600px;


`

export const Left = styled.div`
  /* background: white; */

  width: 360px;
  height: 400px;

  position: relative;
  float: left;
  z-index: 3;

  margin-top:100px;


`

export const Center = styled.div`
  /* background: green; */

  width: 360px;
  height: 400px;


  position: absolute;
  z-index: 3;

  margin-top:100px;
  margin-left: 400px;

  .boards{
    width: 210px;
    height: auto;
    margin-top: 20px;
    margin-right: 85px;

    cursor: pointer;


    &:hover{

    }
  }
  .computer{
    width: 160px;
    height: auto;
    margin-bottom: 184px;
    margin-right: 85px;

    cursor: pointer;


    &:hover{

    }
  }

`

export const Right = styled.div`
  background: purple;


  width: 360px;
  height: 400px;

  position: absolute;
  z-index: 3;
  margin-top:100px;
  margin-left: 800px;


  .paint{
    width: 4vw;
    height: auto;

    margin-bottom: 340px;
    margin-right: 0px;
      /* background: purple; */

    
  }

  .linux{
    width: 30px;
    height: auto;
    margin-bottom: 160px;
    margin-right: 30px;

  }
`
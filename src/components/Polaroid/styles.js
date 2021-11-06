import styled from 'styled-components'

export const Content = styled.div`
  width: 400px;
  height: 485px;

  background: #fff;
  border-radius: 2px;


  display: flex;
  flex-wrap: wrap;
  justify-content:center;

  margin: 30px 0;

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

export const Image = styled.img`
  width: 330px;
  height: 330px;

  background: #fff;
  border-radius: 2px;
  border: 1px solid #e3e7f1;
  
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  z-index: 14;

  margin-top: 30px;
`

export const Title = styled.span`
  width: 330px;

  text-align: center;
  font-size: 25px;
  color: #0B1020;

  margin-top: 20px;
  font-family: 'Architects Daughter', cursive;

`
export const Legend = styled.span`
  
  width: 330px;

  text-align: center;
  font-size: 18px;

  margin-bottom: 30px;
  color: #6e7a9f;
`


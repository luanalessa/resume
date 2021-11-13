import styled from 'styled-components'



export const Header = styled.div`
  width: 100%;
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

export const Navigate = styled.div`
    width: 100%;
    height: 30px;
    color: #fff;

    
    font-size: 12px;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    .aba{
      position: absolute;
      left: 0;

    }

    .resume{
      left: 180px;
      top: 5px;
    }

    .buyme{
      left: 10px;
      top: 8px;
      cursor: pointer;
    }
`

export const Search = styled.div`
    width: 100%;
    height: 35px;
    background: #F5F8FF;

    margin-top: 5px;
    color: #2C3F7B;
    font-size: 23px;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content:flex-start;

  
`
export const BoxIcon = styled.div`
    width: 120px;
    height: 20px;

    border-radius: 5px;


    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content:space-evenly;

    margin-right: 10px; 
`



export const SearchBar = styled.div`
    width: 330px;
    height: 20px;
    background: #fff;

    border-radius: 5px;
`



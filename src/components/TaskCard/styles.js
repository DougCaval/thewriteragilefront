import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 200px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  font-weight: normal;
  background:  #121212;


  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity:  ${ props => props.done ? 0.5 : 1 };

  &:hover{
      opacity: 0.5;
      
  }
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  
  
  img{
      width: 70px;
      height:70px;
  }
  h3 {
    font-weight: normal;
    font-size: 16px;
  }
`;
export const BottomCard = styled.div`
display: flex;
justify-content: space-around;
width: 100%;

strong{
    color: #EE6B26;
    font-weight: bold;
}
span{
    color: #999;

}
`;

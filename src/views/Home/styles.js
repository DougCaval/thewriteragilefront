import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background:  #121212;
`;

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  flex-wrap: wrap;
  background:  #121212;

  button {
    background: none;
    border: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  background:  #121212;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 70px;
 a {
    text-decoration:none;
    color: #000;
  }
`
export const Title = styled.div`
  width: 100%;
 border-bottom: 1px solid #20295F;
 display: flex;
 justify-content: center;
 margin-bottom: 20px;

 h3{
     color: #20295F;
     position: relative;
     top: 29px;
     background: #FFF;
     padding: 0 20px;
     

 }
`;

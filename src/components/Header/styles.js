import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background:  #ffff;
  border-bottom: 5px solid #008000;;
  display: flex;
  
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 200px;
    height: 50px;
    
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    color: #008000;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      color: #eb7908;
    }
  }
  #notification {
    img {
      widht: 25px;
      height: 30px;
    }
    span {
      background: #008000;
      color: #008000;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  .dividir::after{
      content: "|";
      margin: 0 10px;
      color: #008000;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  button{
    font-size: 36px;
    color: #008000;
    font-weight: bold;
    &:hover {
      color: #eb7908;
    }
  }
`;

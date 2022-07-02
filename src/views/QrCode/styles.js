import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:  #ffff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;

  h1 {
    color: #008000;
  }
  p {
    color: #20295f;
  }
`;

export const QrCodeArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin : 20px;

  span {
      text-transform: uppercase;
      font-weigth:bold;
  }

  input {
      margin: 10px;
      font-size: 18px;
      padding: 10px;
      width: 40%;
      text-align: center;

  }

  button{
      margin:10px;
      font-weight: bold;
      background: #008000;
      border: none;
      border-radius: 10px;
      color: #FFFF;
      padding: 10px;
      cursor: pointer;
      width: 40%;

      &:hover{
          background:  #20295f;
      }


  }



`;


import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 30px;
  background:  ${props => props.actived ? `#008000` : `#696969` };
  padding: 10px;
  cursor: pointer;
  

  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: #fff;
    font-height: bold;
    align-self: flex-end;
    font-size: 18px;
  }
  &:hover {
    background: #008000;
  }
`;

import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 36px;
  border: 1px rgb(207, 217, 222) solid;
  border-radius: 28px;

  &:hover {
    transition: 0.2s;
    cursor: pointer;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;

  &:focus {
    outline: none;
  }
`;

export const InnerContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;

  .close-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px;
  }

  .tweet-container {
    margin-top: -45px;
  }
`;

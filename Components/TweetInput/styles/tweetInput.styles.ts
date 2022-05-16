import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;

  .textArea {
    resize: none;
    border: none;
    outline: none;
    font-size: 1.4rem;
    margin: 10px 10px auto;
  }

  .avatarText {
    font-size: 1.8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;

  .home {
    font-size: 1.5rem;
  }
`;
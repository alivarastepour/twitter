import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin-top: 50px;

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
  padding: 10px 15px;
  position: fixed;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(12px);

  .salam {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 620px;
    height: 20px;
  }

  .home {
    font-size: 1.5rem;
  }

`;
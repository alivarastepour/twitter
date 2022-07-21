import styled from "styled-components";

export const Content = styled.div`
  padding: 10px 15px;
  position: fixed;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(12px);

  .container {
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

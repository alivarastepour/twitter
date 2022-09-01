import styled from "styled-components";

export const Content = styled.div`
  padding: 10px 15px;
  position: sticky;
  top: 0;
  z-index: 2;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.85);

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 620px;
    height: 45px;
  }

  .home {
    font-size: 1.5rem;
  }
`;

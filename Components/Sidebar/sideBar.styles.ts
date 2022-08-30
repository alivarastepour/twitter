import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  .profile-container {
    box-sizing: border-box;
    padding: 10px;
    margin-top: 30px;
    border-radius: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    .pc-avatar {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pc-username {
      font-size: 1.2rem;
      color: rgb(50, 50, 50);
    }

    &:hover {
      transition: 0.3s;
      background-color: rgb(240, 240, 240);
    }

    &:not(:hover) {
      transition: 0.3s;
      background-color: initial;
    }
  }
`;

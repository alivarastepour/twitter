import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 10px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
  background-color: rgba(255, 255, 255, 0.8);
  padding-bottom: 5px;
  z-index: 2;
  .searchBarContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 400px;
    height: 50px;
    border-radius: 25px;
    background-color: #f5f5f5;
    border: 1px solid white;

    .searchBar {
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 1.2rem;

      &::placeholder {
        font-size: 1.2rem;
        font-family: "Montserrat", sans-serif;
      }
    }

    .searchBarContainer-second,
    .searchBarContainer-first {
      margin-left: 20px;
    }
  }

  .clicked {
    border: 1px solid var(--twColor);
    background-color: white;
  }
`;

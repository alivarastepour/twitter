import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;

  .searchBarContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 400px;
    height: 50px;
    border-radius: 25px;
    background-color: #E8E8E8;
    border: 1px solid white;

    .searchBar {
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 1.2rem;

      &::placeholder {
        font-size: 1.2rem;
        font-family: 'Montserrat',sans-serif;
      }

    }


    .searchBarContainer-second, .searchBarContainer-first {
      margin-left: 20px;
    }

  }

  .clicked {
    border: 1px solid var(--twColor);
    background-color: white;
  }
`;
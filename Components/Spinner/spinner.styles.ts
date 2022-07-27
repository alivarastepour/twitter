import styled from "styled-components";

export const Wrapper = styled.div`
  width: 15px;
  height: 15px;
  border: 3px solid;
  border-radius: 50%;
  border-color: var(--twColor) var(--twColorLight) var(--twColorLight);
  animation: spin 0.8s infinite linear;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

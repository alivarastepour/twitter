import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;

  .wf-flex{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .wf-content {
    margin-left: 20px;

    .wf-username {
      color: rgb(83, 100, 113);
      font-size: 0.9rem;
    }

  }

  .wf-follow-button {
    button {
      border-radius: 15px;
      height: 32px;
      width: 77px;
      cursor: pointer;
    }
  }

  &:hover {
    transition: 0.3s;
    background-color: #ededed;
    cursor: pointer;
  }

  &:not(:hover) {
    transition: 0.3s;

  }
`;
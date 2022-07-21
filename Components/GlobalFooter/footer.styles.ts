import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  padding-left: 15px;
  margin-bottom: 20px;
  line-height: 2rem;
  font-family: sans-serif;

  .f-item {
    margin-right: 8px;

    .f-item-link {
      color: rgb(83, 100, 113);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

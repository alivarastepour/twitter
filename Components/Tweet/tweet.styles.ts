import styled from "styled-components";

export const Wrapper = styled.div`

  .tweetInput {
    display: flex;
    flex-direction: row;
    padding: 15px;
  }

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

  .visibility {
    margin-left: 80px;
  }

  .visibilityStatus {
    font-size: 1.0rem;
    color: var(--twColor);
    border-radius: 5px;
    display: flex;

    .visibilityIcon {
      margin-right: 10px;
    }
  }
  
  //.tickIcon{
  //  position: relative;
  //  right: 0;
  //}
`;
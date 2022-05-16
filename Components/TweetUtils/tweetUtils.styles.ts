import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  padding-left: 85px;

  .additional {
    display: flex;
    flex-direction: row;
  }

  .tweetButtonContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    .tweetButton {
      width: 90px;
      height: 40px;
      border-radius: 30px;
      outline: none;
      border: none;
      font-size: 1.1rem;
    }

    .tweetButtonActive {
      cursor: pointer;
    }

    .tweetButtonDisable {
      opacity: 0.5;
      pointer-events: none;
    }

    .hiddenSection {
      display: flex;
      align-items: center;
      .dividerContainer{
        margin: auto 10px;
      }
      
      .progressbar{
        margin-top: 3px;
        margin-right: 10px;
      }
    }

  }

`;

export const iconButtonStyles = {
    '&:hover': {
        backgroundColor: 'rgb(29,155,240, 0.1)'
    }
};

export const iconStyles = {
    color: 'rgb(29, 155, 240)'
};
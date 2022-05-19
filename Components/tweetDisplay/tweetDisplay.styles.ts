import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px;
  border: 1px solid rgb(239, 243, 244);
  border-bottom: none;
  height: fit-content;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:not(:hover) {
    transition: 0.2s;
    background-color: white;
  }

  .tweetHeader {
    display: flex;
    flex-direction: row;
    align-items: stretch;

    .ownerContent {
      margin-left: 10px;
      .timeTooltip{
        color: red;
      }
    }

    .tweetOwnerName {
      font-size: 1.1rem;
      margin-right: 10px;

      &:hover {
        text-decoration: underline;
      }

    }

    .tweetOwnerUsername, .tweetTime {
      color: #536471;
    }

    .tweetTime {
      &:hover {
        text-decoration: underline;
      }
    }

  }

  .tweetContent {
    margin-left: 60px;
    margin-top: -20px;
    color: #0F1419;
    line-height: 1.4rem;
  }

  .tweetFooter {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .tweetAction {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

    .comment {
      color: rgb(83, 100, 113);

      &:hover {
        color: rgb(29, 155, 240);
      }
    }

    .retweet {
      color: rgb(83, 100, 113);

      &:hover {
        color: rgb(0, 186, 124);
      }

    }

    .like {
      color: rgb(83, 100, 113);

      &:hover {
        color: rgb(249, 24, 128);
      }
    }
  }
`;
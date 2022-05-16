import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px;
  border: 1px solid black;
  height: fit-content;
  margin-top: 20px;
  
  .tweetHeader{
    display: flex;
    flex-direction: row;
    align-items: stretch;

    .ownerContent{
      margin-left: 10px;
    }
    
    .tweetOwnerName{
      font-size: 1.1rem;
      margin-right: 10px;
    }
    
    .tweetOwnerUsername, .tweetTime{
      color: #536471;
    }
    
  }
  
  .tweetContent{
    margin-left: 60px;
    margin-top: -20px;
    color: #0F1419;
    line-height: 1.4rem;
  }
  
  .tweetFooter{
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    .tweetAction{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
    
  }
`;
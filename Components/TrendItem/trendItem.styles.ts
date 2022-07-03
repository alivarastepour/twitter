import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  
  &:hover{
    background-color: #ededed;
    transition: 0.3s;
    cursor: pointer;
  }
  &:not(:hover){
    transition: 0.3s;
  }
  
  .ti-margin{
    margin-bottom: 5px;
  }
  
  .ti-content{
    font-size: 1.2rem;
  }
  
  .ti-title, .ti-count {
    font-size: 0.9rem;
    color: rgb(83, 100, 113);
  }
`;
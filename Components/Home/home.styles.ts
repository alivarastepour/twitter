import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  //.left, .right, .main{
  //  border: 1px solid black;
  //}
  
  .main{
    width: 35%;
  }
  
  .left{
    width: 20%;
  }
  
  .right{
    width: 25%;
  }
  
  .left, .main{
    margin-right: 20px;
  }
  
`;
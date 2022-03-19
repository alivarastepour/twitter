import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .mp-fl-1 {
    width: 55.5%;
    height: 925px;
    background-image: url("/lohp_en_1302x955.png");
    background-position: center;
    display: grid;
    place-content: center;
  }
  .mp-fl-2 {
    width: 44.5%;
  }
`;
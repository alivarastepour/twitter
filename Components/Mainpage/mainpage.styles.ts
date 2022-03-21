import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */

  .mp-fl-1 {
    width: 55%;
    height: 925px;
    background-image: url("/lohp_en_1302x955.png");
    background-color: rgb(29, 155, 240);
    background-position: center;
    display: grid;
    place-content: center;
  }

  .mp-fl-2 {
    padding-right: 40px;
    padding-left: 40px;
    flex-grow: 2;
    flex-shrink: 0;
  }

  .ct-ch {
    display: flex;
    flex-direction: row;
  }

  .ct-ch-1 {
    margin-top: 50px;
  }

  .ct-ch-2 {
    font-size: 4rem;
    margin-top: 80px;
  }

  .ct-ch-3 {
    font-size: 2.3rem;
    margin-top: 80px;
  }

  .ct-ch-4 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 250px;
    margin-top: 40px;

    .ct-ch-fl-5 {
      width: 350px;
      .notice {
        font-size: 0.65rem;
        a {
          color: rgb(29, 155, 240);
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .ct-ch-5 {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
    margin-top: 80px;
    .text-q {
      font-size: 1.3rem;
    }
  }
`;
export const Content = styled.div`
  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 4vw;

    .ft-fl-ch {
      margin: 10px 15px 0 0;
      font-family: sans-serif;
      font-size: 0.8rem;

      .ch-a {
        color: rgb(83, 100, 113);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

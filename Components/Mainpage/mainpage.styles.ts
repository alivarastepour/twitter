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

  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 90px;

    .ft-fl-ch {
      margin: 10px 25px 0 0;
      font-family: sans-serif;
      font-size: 0.95rem;

      .ch-a {
        color: rgb(83, 100, 113);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .ct-ch {
    display: flex;
    flex-direction: row;
  }

  .ct-ch-1 {
    margin: 50px auto auto 40px;
  }

  .ct-ch-2 {
    font-size: 5rem;
    margin: 80px auto auto 40px;
  }

  .ct-ch-3 {
    font-size: 2.3rem;
    margin: 80px auto auto 40px;
  }

  .ct-ch-4 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
    margin: 40px auto auto 40px;
    .ct-ch-fl {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 350px;
      height: 40px;
      border: 1px rgb(207, 217, 222) solid;
      border-radius: 20px;
      .text {
        font-size: 0.9rem;
      }
      .logo {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: 8px;
      }
      &:hover {
        transition: 0.2s;
        background-color: rgb(230, 230, 230);
        cursor: pointer;
      }
      &:not(:hover) {
        transition: 0.2s;
        background-color: white;
      }
    }
    .ct-ch-fl-4 {
      background-color: rgb(29, 155, 240);
      color: white;
      &:hover {
        transition: 0.2s;
        background-color: rgb(26, 140, 216);
      }
      &:not(:hover) {
        transition: 0.2s;
        background-color: rgb(29, 155, 240);
      }
    }
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
`;

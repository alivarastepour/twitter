import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid rgb(239, 243, 244);
  .header-picture {
    height: 200px;

    .hp-image {
      z-index: -1;
    }
  }
  .profile-picture-container {
    width: 145.5px;
    height: 145.5px;
    border-radius: 50%;
    background-color: white;
    margin-top: -60px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    .profile-picture {
      width: 133.5px;
      height: 133.5px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .avatar-text {
        font-size: 3.1rem;
      }
    }
  }

  .edit-profile {
    margin: -60px 20px;
    float: right;
    border: 1px rgb(207, 217, 222) solid;
    border-radius: 30px;
    width: 142px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover,
    &:not(:hover) {
      transition: 0.3s;
    }
  }
  .info {
    margin: 20px;
    .username {
      font-size: 1.7rem;
    }
    .username-footer {
      color: rgb(83, 100, 113);
    }
    .stats {
      margin-top: 30px;
      width: 35%;
      display: flex;
      justify-content: space-between;
      font-size: 1.1rem;
      .st-container {
        cursor: pointer;
        &:hover {
          text-decoration: underline 1px solid black;
        }
      }
      .indicator {
        color: rgb(83, 100, 113);
      }
    }
  }
`;

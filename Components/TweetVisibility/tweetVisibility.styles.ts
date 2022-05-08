import styled from "styled-components";

export const Wrapper = styled.div`
  
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
`;

export const iconWrapperStyles = {
    background: 'rgb(29, 155, 240)',
    borderRadius: '50%',
    width: 47,
    height: 47,
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center'
};

export const statusWrapper = {color: 'rgb(100, 100, 113)', marginLeft: 10, fontSize: '1.2rem'};

export const iconStyles = {color: 'white', width: 25, height: 25};

export const menuItemWrapper = {display: 'flex', alignItems: 'center'};
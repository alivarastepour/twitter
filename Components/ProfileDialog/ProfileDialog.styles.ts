import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
`;

export const dialogHeader = {display: 'flex', flexDirection: 'row', justifyContent: 'space-between'};

export const avatar = {width: 60, height: 60, cursor: 'pointer'};

export const followButton = {
    width: 100,
    height: 40,
    borderRadius: 20,
    fontSize: '1.0rem',
    cursor: 'pointer',
};

export const title = {fontSize: '1.2rem', marginTop: 10, cursor: 'pointer'};

export const username = {
    fontSize: '1rem', marginTop: 5, color: 'rgb(83, 100, 113)', cursor: 'pointer'
};

export const bio = {color: 'rgb(83, 100, 113)', marginTop: 15};

export const footer = {display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10};

export const follower = {marginRight: 20, cursor: 'pointer'};

export const numberContainer = {fontSize: '1.2rem', marginRight: 5};

export const stateContainer = {fontSize: '1.1rem', color: 'rgb(83, 100, 113)'};
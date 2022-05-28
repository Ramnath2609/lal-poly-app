import styled from 'styled-components';

export const GridLayout = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 15% 1fr;
    grid-template-rows: 180px calc(100% - 180px);
    grid-template-areas:
      'header header'
      'sidenav content'
`;

export const AppLayout = styled.div`
  width: 100%;
  height: 100vh;
`;

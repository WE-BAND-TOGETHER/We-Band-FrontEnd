import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 400px;
  background: ${({ theme }) => theme.colors.BlackAndWhite.white};
  min-height: calc(100vh - 30px);

  margin: 0 auto;
`;

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { View } from 'react-native';
import styled from 'styled-components/native';

export const BoardWrapper = styled(View)`
  // background-color: ${({ theme }) => theme.colors.background.brand};
  border-color: ${props => props.theme.colors.border};
  border-width: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const RowWrapper = styled(View)`
  flex-direction: row;
`;

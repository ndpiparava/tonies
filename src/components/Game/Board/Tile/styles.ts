/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const ViewWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.border.brand};
  border-width: 1px;
  width: 100px;
  height: 100px;
`;

export const TextWrapper = styled(Text)`
  width: 100px;
  height: 100px;
`;

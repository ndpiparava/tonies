/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { View } from 'react-native';
import styled from 'styled-components/native';

export const SettingsWrapper = styled(View)`
  padding: 100px 50px 50px 50px;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors?.background.brand};
`;

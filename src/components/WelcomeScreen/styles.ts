/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const ViewWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const WelcomeText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.xxlarge};
  margin-bottom: 54px;
  text-align: center;
`;
export const StartWrapper = styled(TouchableOpacity)``;
export const StartText = styled(Text)`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.xxlarge};
  color: ${({ theme }) => theme.colors.font.brand};
`;

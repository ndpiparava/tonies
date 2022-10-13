/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export const ResultWrapper = styled(View)`
  background-color: ${({ theme }) => theme.colors.background.medium};
`;

export const ResultText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.size.xxlarge};
  margin: 18px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.tile.red};
`;

export const InstructionWrapper = styled(TouchableOpacity)``;

export const InstructionText = styled(Text)`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.xxlarge}
  color: ${({ theme }) => theme.colors.tile.green};
`;

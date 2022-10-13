import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const TabIconContainer = styled(Animated.View)`
  align-items: center;
`;
export const TabLabel = styled(Animated.Text)`
font-size: ${({ theme }) => theme.fonts.size.small}
  color: ${({ theme }) => theme.colors.font.brand};
`;

import { useTheme } from 'styled-components';
import { CIRCLE, CROSS } from '../../../../constants';
import { ThemeInterface } from '../../../../themes/theme';
import { Icon } from '../../../common/icon';

import { ViewWrapper, TextWrapper } from './styles';

export type TileProps = {
  onPress: (index: number) => void;
  value: string;
  index: number;
};

const Tile = ({ onPress, value, index }: TileProps) => {
  const theme = useTheme() as ThemeInterface;

  const renderContent = () => {
    switch (value) {
      case CIRCLE:
        return <Icon icon='circle-o' color={theme.colors.tile.green} />;
      case CROSS:
        return <Icon icon='close' color={theme.colors.tile.red} />;
      default:
        return <TextWrapper onPress={handlePress} />;
    }
  };

  const handlePress = () => {
    onPress(index);
  };

  //circle-o
  //close
  return <ViewWrapper>{renderContent()}</ViewWrapper>;
};

export default Tile;

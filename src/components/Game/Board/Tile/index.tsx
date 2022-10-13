import { CIRCLE, CROSS } from '../../../../constants';
import { Icon } from '../../../common/icon';

import { ViewWrapper, TextWrapper } from './styles';

export type TileProps = {
  onPress: (index: number) => void;
  value: string;
  index: number;
};

const Tile = ({ onPress, value, index }: TileProps) => {
  const renderContent = () => {
    switch (value) {
      case CIRCLE:
        return <Icon icon='circle-o' />;
      case CROSS:
        return <Icon icon='close' />;
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

import { BoardWrapper, RowWrapper } from './styles';
import Tile from './Tile';

export type BoardProps = {
  board: boardType;
  onPress: Function;
};

export type boardType = string[];

const Board = ({ board, onPress }: BoardProps) => {
  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < 3; i++) {
      rows.push(<RowWrapper key={i}>{renderRow(i)}</RowWrapper>);
    }

    return rows;
  };
  const renderRow = (number: number) => {
    const tiles = [];
    for (let i = 0; i < 3; i++) {
      const index = number * 3 + i;
      tiles.push(
        <Tile key={i} value={board[index]} index={index} onPress={onPress} />,
      );
    }
    return tiles;
  };

  return <BoardWrapper>{renderRows()}</BoardWrapper>;
};

export default Board;

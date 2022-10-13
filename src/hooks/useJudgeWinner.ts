import { boardType } from '../components/Game/Board';
import { DRAW, EMPTY, VICTORY_CONDITIONS } from '../constants';

export default function useJudgeWinner() {
  const checkTile = (tile: number, figure: string, board: boardType) => {
    return board[tile] === figure && board[tile] !== EMPTY;
  };

  const judgeWinner = (board: boardType) => {
    if (!board.some(figure => figure === EMPTY)) {
      return DRAW;
    }

    let winner = null;
    for (let i = 0; i < VICTORY_CONDITIONS.length; ++i) {
      const figure = board[VICTORY_CONDITIONS[i][0]];
      if (VICTORY_CONDITIONS[i].every(tile => checkTile(tile, figure, board))) {
        winner = figure;
        break;
      }
    }
    return winner;
  };

  return { judgeWinner, checkTile };
}

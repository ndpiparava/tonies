import { useEffect, useState } from 'react';
import { EMPTY, USER_FIGURE, AI_FIGURE } from '../../constants';
import { View } from 'react-native';
import TicTacToe from 'tictactoe-agent';
import Board from './Board';
import { BoardWrapper } from './styles';
import Result from '../Result';
import useJudgeWinner from '../../hooks/useJudgeWinner';
import { useNavigation } from '@react-navigation/native';
import { useIntl } from 'react-intl';

const Game = () => {
  const [board, setBoard] = useState<string[]>([
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ]);

  const [aiTurn, setAITurn] = useState(false);
  const [result, setResult] = useState(EMPTY);
  const { judgeWinner } = useJudgeWinner();
  const navigation = useNavigation();
  const intl = useIntl();

  const title = intl.formatMessage({
    id: 'game',
    defaultMessage: 'Game',
  });

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

  const populateBoard = (index: number, figure: string) => {
    if (board[index] !== EMPTY) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = figure;
    setBoard(newBoard);
  };

  const AIAct = () => {
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    const input = board.join('');
    const model = new TicTacToe.Model(input, AI_FIGURE);
    const recommendation = model.getRecommendation();
    populateBoard(recommendation.index as number, AI_FIGURE);
    setAITurn(false);

    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    /* eslint-enable @typescript-eslint/no-unsafe-call */
    /* eslint-enable @typescript-eslint/no-unsafe-assignment */
  };

  const restart = () => {
    setBoard([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]);
    setResult(EMPTY);
    setAITurn(false);
  };

  const checkResult = () => {
    const result = judgeWinner(board);
    if (result !== null) {
      setResult(result);
      return;
    }
  };

  useEffect(() => {
    checkResult();
    if (aiTurn) {
      AIAct();
    }
  }, [aiTurn]);

  const handlePress = (index: number) => {
    populateBoard(index, USER_FIGURE);
    setAITurn(true);
  };

  return (
    <View>
      {result !== EMPTY && (
        <Result result={result} onRestart={restart}></Result>
      )}
      {result === EMPTY && (
        <BoardWrapper>
          <Board board={board} onPress={handlePress}></Board>
        </BoardWrapper>
      )}
    </View>
  );
};

export default Game;

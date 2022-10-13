import { useIntl } from 'react-intl';
import { DRAW, USER_FIGURE, AI_FIGURE } from '../../constants';
import {
  InstructionText,
  ResultText,
  InstructionWrapper,
  ResultWrapper,
} from './styles';

type resultProps = {
  result: string;
  onRestart: () => void;
};

const Result = ({ result, onRestart }: resultProps) => {
  const intl = useIntl();
  const restartLabel = intl.formatMessage({
    id: 'restart',
    defaultMessage: 'Restart',
  });

  const winMessage = intl.formatMessage({
    id: 'winMessage',
    defaultMessage: 'won the game',
  });

  const drawLabel = intl.formatMessage({
    id: 'draw',
    defaultMessage: 'Draw',
  });

  const getResultMessage = () => {
    switch (result) {
      case USER_FIGURE:
        return 'Player ' + winMessage;
      case AI_FIGURE:
        return 'AI ' + winMessage;
      case DRAW:
        return drawLabel;
    }
  };
  return (
    <ResultWrapper>
      <ResultText>{getResultMessage()}</ResultText>
      <InstructionWrapper onPress={() => onRestart()}>
        <InstructionText>{restartLabel}</InstructionText>
      </InstructionWrapper>
    </ResultWrapper>
  );
};

export default Result;

import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useLocaleStore } from '../../stores/useLocaleStore';
import { ViewWrapper, WelcomeText, StartWrapper, StartText } from './styles';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const intl = useIntl();
  const language = useLocaleStore(state => state.language);

  const startLabel = intl.formatMessage({
    id: 'startGame',
    defaultMessage: 'Start Game',
  });
  const navigateToGame = () => {
    navigation.navigate('game');
  };
  const title = intl.formatMessage({
    id: 'welcome',
    defaultMessage: 'Welcome',
  });

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, [language]);

  return (
    <ViewWrapper>
      <WelcomeText></WelcomeText>
      <StartWrapper onPress={navigateToGame}>
        <StartText>{startLabel}</StartText>
      </StartWrapper>
    </ViewWrapper>
  );
};

export default WelcomeScreen;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabContainer from './TabContainer';

const RootStackNavigator = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <></>
    </NavigationContainer>
  );
};

AppStack.displayName = 'AppStack';

export default AppStack;

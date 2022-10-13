import { createStackNavigator } from '@react-navigation/stack';
import Game from '../../../components/Game';
import WelcomeScreen from '../../../components/WelcomeScreen';
import { TabStackNavigatorProps } from '../../appstacktypes';

const TabStack = createStackNavigator<TabStackNavigatorProps>();

const TabStackNavigator = () => {
  return (
    <TabStack.Navigator initialRouteName='welcome'>
      <TabStack.Screen name='welcome' component={WelcomeScreen} />
      <TabStack.Screen name='game' component={Game} />
    </TabStack.Navigator>
  );
};

export default TabStackNavigator;

import TabStackNavigator from '../TabStackNavigator';
import TabIcon from '../TabIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../../../components/Settings';
import { useTheme } from 'styled-components';
import { useIntl } from 'react-intl';
import { BottomTabNavigatorParamList } from '../../appstacktypes';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const TabNavigator = () => {
  const theme = useTheme();
  const intl = useIntl();
  const usersTabLabel = intl.formatMessage({ id: 'game' });
  const settingsTabLabel = intl.formatMessage({ id: 'settings' });
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Game'
        component={TabStackNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon
                isActive={focused}
                icon={'gamepad'}
                color={focused ? theme.colors.tint : color}
                label={usersTabLabel}
              ></TabIcon>
            );
          },
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon
                isActive={focused}
                icon={'gears'}
                color={focused ? theme.colors.tint : color}
                label={settingsTabLabel}
              ></TabIcon>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

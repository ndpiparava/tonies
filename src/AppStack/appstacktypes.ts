export type TabStackNavigatorProps = {
  welcome: undefined;
  //profile: { user: User };
  game: undefined;
};

export type BottomTabNavigatorParamList = {
  Game: TabStackNavigatorProps;
  Settings: undefined;
};

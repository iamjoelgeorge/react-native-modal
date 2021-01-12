import React from 'react';
import {SafeAreaView} from 'react-native';

import DashboardScreen from './src/screens/DashboardScreen/DashboardScreen';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <DashboardScreen />
      </SafeAreaView>
    </>
  );
};

export default App;

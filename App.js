import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#ffffff'}}>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;

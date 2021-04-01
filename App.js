import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/screens/Home';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import ThisIsForName from './src/screens/ThisIsForName';
import {getNameFromUrl} from './src/helpers/getNameFromUrl';

const App = () => {
  const [isReffered, setIsReffered] = useState(null);
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        const name = getNameFromUrl(link.url);
        setIsReffered(name);
      })
      .catch(() => console.log('Without shareable link'));
  }, []);
  const resetIsReffered = () => {
    setIsReffered(null);
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#ffffff'}}>
        {!isReffered ? (
          <Home />
        ) : (
          <ThisIsForName
            name={isReffered}
            handleScreenOpenend={resetIsReffered}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;

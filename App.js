import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import Home from './src/screens/Home';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import messaging from '@react-native-firebase/messaging';
import ThisIsForName from './src/screens/ThisIsForName';
import {getNameFromUrl} from './src/helpers/getNameFromUrl';
import {sendNotificationAPI} from './src/api/sendNotificationAPI';

const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

const App = () => {
  const [isReffered, setIsReffered] = useState(null);
  const [tokenDevice, setTokenDevice] = useState(null);

  const handleToken = async () => {
    const token = await messaging().getToken();
    setTokenDevice(token);
  };

  useEffect(() => {
    requestUserPermission();
    handleToken();
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        console.log('link', link);
        const name = getNameFromUrl(link.url);
        setIsReffered(name);
      })
      .catch(() => console.log('Without shareable link'));
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });
    return () => unsubscribe;
  }, []);
  const resetIsReffered = () => {
    setIsReffered(null);
    const generateNotification = async () => {
      try {
        const name = isReffered;
        const isSended = await sendNotificationAPI(name, tokenDevice);
        return isSended;
      } catch (error) {
        console.log(error);
        Alert.alert('Warning', error.message);
      }
    };
    generateNotification();
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#ffffff'}}>
        {!isReffered ? (
          <Home setIsReffered={setIsReffered} />
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

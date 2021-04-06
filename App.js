import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import Home from './src/screens/Home';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import messaging from '@react-native-firebase/messaging';
import ThisIsForName from './src/screens/ThisIsForName';
import {getNameFromUrl} from './src/helpers/getNameFromUrl';
import {
  sendNotificationAPI,
  sendTokenDeviceAPI,
} from './src/api/sendNotificationAPI';
import Storage from './src/libs/storage';

const storage = Storage.Instance;

const requestUserPermissionMessaging = async () => {
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

  const handleToken = async () => {
    try {
      const isDeviceTokenRegistered = await storage.get(
        '@tokenNotificationRegistered',
      );
      console.log('Value of isDeviceTokenRegistered', isDeviceTokenRegistered);
      if (!isDeviceTokenRegistered) {
        const token = await messaging().getToken();
        const registeredOnDb = await sendTokenDeviceAPI(token);
        if (registeredOnDb.ok) {
          await storage.save('@tokenNotificationRegistered', true);
          console.log('This is the token', token);
        }
      }
    } catch (error) {
      Alert.alert(
        'Error an occurred while saving token',
        'Check your internet connection or close an open app again',
      );
    }
  };

  useEffect(() => {
    requestUserPermissionMessaging();
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

  const handleSendNotification = () => {
    const generateNotification = async () => {
      try {
        const name = isReffered;
        const isSended = await sendNotificationAPI(name);
        return isSended;
      } catch (error) {
        console.log(error);
        Alert.alert('Warning', error.message);
      } finally {
        setIsReffered(null);
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
            handleSendNotification={handleSendNotification}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;

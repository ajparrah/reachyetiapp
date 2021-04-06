import React from 'react';
import {Button, Text, View} from 'react-native';

const ThisIsForName = ({name, handleSendNotification}) => {
  return (
    <>
      <View>
        <Text style={{fontSize: 21, textAlign: 'center'}}>
          This page is for {name}
        </Text>
        <Button
          onPress={handleSendNotification}
          title="Send Notification"
          color="#841584"
        />
      </View>
    </>
  );
};

export default ThisIsForName;

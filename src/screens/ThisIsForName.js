import React from 'react';
import {Button, Text, View} from 'react-native';

const ThisIsForName = ({name, handleScreenOpenend}) => {
  return (
    <>
      <View>
        <Text style={{fontSize: 21, textAlign: 'center'}}>
          This is for {name}
        </Text>
        <Button
          onPress={handleScreenOpenend}
          title="Close this screen"
          color="#841584"
        />
      </View>
    </>
  );
};

export default ThisIsForName;

import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Linking, Alert} from 'react-native';

const CardLink = ({name, dynamicLink}) => {
  const handleGoToLink = () => {
    const goToShareableLink = async () => {
      try {
        await Linking.openURL(dynamicLink);
      } catch (error) {
        Alert.alert(
          'Go to link',
          'An occurred a problem while trying to open the shareable link',
          [
            {
              text: 'Ok',
              onPress: () => null,
            },
          ],
        );
      }
    };
    goToShareableLink();
  };

  return (
    <>
      <TouchableOpacity style={styles.btnItem} onPress={handleGoToLink}>
        <Text style={styles.txtCard}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnItem: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#7f5af0',
    borderBottomWidth: 1,
    borderBottomColor: '#2cb67d',
  },
  txtCard: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default CardLink;

import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const CardLink = ({name, dynamicLink}) => {
  const handleGoToLink = () => {
    console.log('Hice click en el ', name);
    console.log('Su dynamic link es ', dynamicLink);
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

import React from 'react';
import {FlatList, Text, View} from 'react-native';
import CardLink from './CardLink';

const ListShareableLinks = ({shareableLinks}) => {
  console.log(shareableLinks);
  return (
    <View>
      {shareableLinks.length > 0 ? (
        <FlatList
          data={shareableLinks}
          contentContainerStyle={{backgroundColor: '#16161a'}}
          renderItem={({item}) => (
            <CardLink name={item.name} dynamicLink={item.url} />
          )}
          keyExtractor={({_id}) => _id}
        />
      ) : (
        <Text>There is not any link</Text>
      )}
    </View>
  );
};

export default ListShareableLinks;

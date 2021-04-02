import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import ListShareableLinks from '../components/ListShareableLinks';
import {getNamesAPI} from '../api/getNamesAPI';
import {getNameFromUrl} from '../helpers/getNameFromUrl';

const Home = ({setIsReffered}) => {
  const [namesAndShareableLinks, setNamesAndShareableLinks] = useState(null);

  // const handleDynamicLink = link => {
  //   console.log('link', link);
  //   const name = getNameFromUrl(link.url);
  //   setIsReffered(name);
  // };
  const handleDynamicLink = useCallback(
    link => {
      console.log('link', link);
      const name = getNameFromUrl(link.url);
      setIsReffered(name);
    },
    [setIsReffered],
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getNamesAPI();
        setNamesAndShareableLinks(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, [handleDynamicLink]);
  return (
    <>
      <View>
        <View style={{marginBottom: 3}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            List of shareable links
          </Text>
        </View>
        {namesAndShareableLinks ? (
          <ListShareableLinks shareableLinks={namesAndShareableLinks} />
        ) : (
          <>
            <ActivityIndicator size="large" color="#841584" />
            <Text>Loading...</Text>
          </>
        )}
      </View>
    </>
  );
};

export default Home;

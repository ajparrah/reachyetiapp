import React from 'react';
import {Text, View} from 'react-native';
import ListShareableLinks from '../components/ListShareableLinks';

const test = [
  {
    _id: '60653a34d3a14c001541cb1b',
    name: 'gumercinda',
    url: 'https://reachyetitest.page.link/Ymry',
    createdBy: '6064ebb79d76790015ca965f',
  },
  {
    _id: '60653a66d3a14c001541cb1c',
    name: 'alejandro',
    url: 'https://reachyetitest.page.link/dxxs',
    createdBy: '6064ebb79d76790015ca965f',
  },
  {
    _id: '60653ab6d3a14c001541cb1d',
    name: 'hola',
    url: 'https://reachyetitest.page.link/CF1b',
    createdBy: '6064ebb79d76790015ca965f',
  },
  {
    _id: '60653e9dd3a14c001541cb1e',
    name: 'jose',
    url: 'https://reachyetitest.page.link/5y6Q',
    createdBy: '6064ebb79d76790015ca965f',
  },
  {
    _id: '60653f5fd3a14c001541cb1f',
    name: 'yolanda',
    url: 'https://reachyetitest.page.link/WYLB',
    createdBy: '6064ebb79d76790015ca965f',
  },
  {
    _id: '6065532c95b2450015dea174',
    name: 'pedry',
    url: 'https://reachyetitest.page.link/2hwP',
    createdBy: '6064ebb79d76790015ca965f',
  },
];

const Home = () => {
  return (
    <>
      <View>
        <View style={{marginBottom: 3}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            List of shareable links
          </Text>
        </View>
        <ListShareableLinks shareableLinks={test} />
      </View>
    </>
  );
};

export default Home;

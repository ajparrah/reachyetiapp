import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  static instance;

  static get Instance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }

  async save(key, value) {
    try {
      const data = JSON.stringify(value);
      await AsyncStorage.setItem(key, data);
      return true;
    } catch (error) {
      console.log('storage error', error);
      return false;
    }
  }

  async get(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      const data = JSON.parse(value);
      return data;
    } catch (error) {
      console.log('storage get', error);
      return false;
    }
  }
}

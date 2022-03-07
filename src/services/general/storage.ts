/* eslint-disable no-console */
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
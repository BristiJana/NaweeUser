import {URLS} from './config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const headerData = async () => {
  const token = await AsyncStorage.getItem('token');
  return {
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + token,
  };
};

const instance = axios.create({
  timeout: 30000,
  headers: headerData(),
});

const responseBody = response => response;

const errorBody = err => {
  if (err.response) {
    // Request made and server responded
    console.log('err.response', err.response);
    return {
      message: err.response.data.message,
      statusCode: err.response.status,
    };
  } else if (err.request) {
    // The request was made but no response was received
    console.log('err.request', err.request);
    return 'Network Failiure, Please Check your network connection!';
  } else {
    // Something happened in setting up the request that triggered an err
    console.log('err', err.message);
    return err.message;
  }
};

const requests = {
  get: (url, headers = {...headerData()}) =>
    instance.get(url, {headers}).then(responseBody).catch(errorBody),
  post: (url, body, headers = {...headerData}) =>
    instance.post(url, body, {headers}).then(responseBody).catch(errorBody),

  put: (url, body, headers = {...headerData()}) =>
    instance.put(url, body, {headers}).then(responseBody).catch(errorBody),
};

export const Auth = {
  //user signup api
  signUp: data =>
    requests.post(`${URLS.SIGNUP}`, data, {
      'Access-Control-Allow-Origin': '*',
    }),
  signin: data =>
    requests.post(`${URLS.SIGNIN}`, data, {
      'Access-Control-Allow-Origin': '*',
    }),
};

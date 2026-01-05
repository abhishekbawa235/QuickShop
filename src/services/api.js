import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

var api = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// Add a request interceptor
api.interceptors.request.use(async function (config) {
    // Do something before request is sent
try {
    let token = await AsyncStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
}catch(err){
  console.log(err)
}
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
export default api;
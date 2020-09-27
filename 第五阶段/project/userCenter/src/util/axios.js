import { create } from 'axios';
import { Message } from 'element-ui';
import Config from './config.js';
const api = create({
  baseURL: Config.host,
  timeout: 30000,
});

api.interceptors.request.use(
  request => {
    // 请求
    const user = JSON.parse(localStorage.getItem("user")) || {};
    if (user&&user._id) {
      request.headers["user"] = user._id
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);
api.interceptors.response.use(
  response => {
    // 返回的数据
    return response;
  },
  error => {
    //拦截错误
    if (error.response.status === 401) {
      //如果登录状态失效了
      //清除本地缓存的信息
      localStorage.removeItem('user');
      location.href = `${window.location.protocol}//${window.location.host}/login`;
    } else if (error.response.data&&error.response.data.code === 'auth-failed') {
      location.href = `${window.location.protocol}//${window.location.host}/login`;
    }
    return Promise.reject(error);
  },
);

/**
 * @description 发起post请求
 * @param {*} url 服务地址
 * @param {*} data post的数据
 */
export const post = async (url, data) => {
  const response = await api.post(url, data).catch(
    (error) => {
      errorHandler(error);
    }
  );
  return responseHandler(response);
}

/**
 * @description 发起get请求
 * @param {*} url 服务地址
 * @param {*} data get时带的数据
 */
export const get = async (url, data) => {
  const response = await api.get(url, data).catch(
    (error) => {
      errorHandler(error);
    }
  );
  return responseHandler(response);
}

/**
 * @description 发起put请求
 * @param {*} url 服务地址
 * @param {*} data put的数据
 */
export const put = async (url, data) => {
  const response = await api.put(url, data).catch(
    (error) => {
      errorHandler(error);
    }
  );
  return responseHandler(response);
}


/**
 * @description 发起delete请求
 * @param {*} url 服务地址
 * @param {*} data delete的数据
 */
export const del = async (url, data) => {
  // axios 0.20版本最新bug，2020.8
  // https://github.com/axios/axios/issues/3220
  // https://github.com/axios/axios/pull/3282
  const response = await api.request({ data, url, method: 'delete'});
  return responseHandler(response);
}

// 处理错误
const errorHandler = (error) => {
  let msg = error&&error.response&&error.response.data&&error.response.data.message || '请求发生错误，请重试'
  // let msg = error.response.data.message || '请求发生错误，请重试'
  Message({
    message: msg,
    type: 'error',
    offset: 120
  });
}

// 处理正确返回
const responseHandler = (response) => {
  if (response && response.status == 200) {
    if (!response.data) {
      return {}
    }
    return response.data
  }
  return null
}
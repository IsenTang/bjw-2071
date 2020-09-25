import axios from "axios";
import Config from "./config";

var api = axios.create({
  baseURL: Config.baseUrl,
  timeout: 300000
});

// request拦截器
api.interceptors.request.use(config => {
  const userid = localStorage.getItem("userid") || "";
  if (userid) {
    config.headers[ "user" ] = userid;
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

const post = async (url, data) => {
  let response = await api.post(url, data).catch(error => {
    errorHandler(error);
  });
  return responseHandler(response);
};

const put = async (url, data) => {
  let response = await api.put(url, data).catch(error => {
    errorHandler(error);
  });
  return responseHandler(response);
};

const get = async (url, data) => {
  let response = await api.get(url, data).catch(error => {
    errorHandler(error);
  });
  return responseHandler(response);
};

const del = async (url, data) => {
  let response = await api.request({data, url, method: 'delete'});
  return responseHandler(response);
};

// 公共处理错误的方法
const errorHandler = error => {
  let errorMsg = (error.response && error.response.data && error.response.data.message) || '请求错误，请重试';
  alert(errorMsg);
};

// 公共的处理返回体的方法
const responseHandler = response => {
  console.log("response", response);
  if (response && response.status == 200) {
    if (!response.data) {
      return {};
    }
    return response.data;
  }
  return null;
};

export { post, get, put, del };

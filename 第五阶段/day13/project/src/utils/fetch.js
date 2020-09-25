import axios from "axios"
import Config from "./config"

var api = axios.create({
    baseURL: Config.baseUrl,
    timeout: 300000,
});

// 拦截你给服务器发送的请求
api.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    config.headers["user"] = '5f69cd1b0023164a8b9f3ee3'
    return config;
}, (error) => {
    console.log("request error", error)
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 拦截 服务器给你发送的响应   添加响应拦截器
api.interceptors.response.use((res) => {
    console.log('request config', res)
    // 对响应数据做点什么
    return res;
}, (error) => {
    console.log("response error", error)
    // 对响应错误做点什么
    return Promise.reject(error);
});




const get = async (url, data) => {
    const response = await api.get(url, data).catch(error => {
        errorHandler(error)
        })
    return responseHandler(response)
}

const post = async (url, data) => {
    const response = await api.post(url, data).catch(error => {
        errorHandler(error)
        })
    return responseHandler(response)
}

const put = async (url, data) => {
    const response = await api.put(url, data).catch(error => {
        errorHandler(error)
        })
    return responseHandler(response)
}

// https://github.com/axios/axios/issues/3220
// https://github.com/axios/axios/pull/3282
const del = async (url, data) => {
    const response = await api.request({data, url, method: 'delete'});
    return responseHandler(response)
}

// 统一处理返回体
function responseHandler(response) {
    console.log('response==>', response)
    if (response && response.status === 200) {
        if (!response.data) {
            return {}
        }
        return response.data
    }
    console.log('response error', response)
    return null
}

// 统一处理错误返回体
function errorHandler(error) {
    console.log('xxx error===>', error.response);
    let errorMsg = (error.response && error.response.data && error.response.data.message) || '请求错误，请重试'
    console.log('///', errorMsg)
    alert(errorMsg)
}

export {
    get, post, put, del
}
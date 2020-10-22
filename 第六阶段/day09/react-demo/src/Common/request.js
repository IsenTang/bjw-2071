import axios from 'axios';
import _ from 'lodash';
import { parse,compile } from 'path-to-regexp';
import CustomError from '../Common/CustomError';
import { get, getStorage } from '../Common/utils';

/* 30 sec timeout */
axios.defaults.timeout = 30000;

/**
 * request
 */
const fetch = (options) => {

   let { url } = options;
   const { data = {}, headers = {}, method } = options;

   // const id = _.get(getStorage('user'), '_id');
   const id = '5f85685c7cac8518b1099c1d';

   if (id) {
      headers.user = `${id}`;
   }

   headers['Content-Type'] = 'application/json';

   /* cache */
   headers['Cache-Control'] = 'no-cache';

   /* Clone request body data */
   const cloneData = _.cloneDeep(data);

   try {
      let domin = '';

      if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
         const { 0: val } = url.match(/[a-zA-z]+:\/\/[^/]*/);

         domin = val;
         url = url.slice(domin.length);
      }

      const match = parse(url);

      url = compile(url)(data);

      _.forEach(match, item => {

         if (item instanceof Object && item.name in cloneData) {
            delete cloneData[item.name];
         }
      });
      url = domin + url;

   } catch (e) {

      console.log(e);
      _.noop();
   }

   switch (_.toLower(method)) {
   case 'get':
      return axios.get(url, { params: cloneData, headers });
   case 'delete':
      return axios.delete(url, { data: cloneData, headers });
   case 'post':
      return axios.post(url, cloneData, { headers });
   case 'put':
      return axios.put(url, cloneData, { headers });
   case 'patch':
      return axios.patch(url, cloneData, { headers });
   default:
      return axios(options);
   }
};

/**
 * Default request function
 */
export default async function request (options) {

   try {
      const res = await fetch(options);
      let data = _.get(res, 'data', {});

      /* convert list to object */
      if (_.isArray(data)) {
         data = { list: data };
      }

      return data;
   } catch (error) {

      // console.log('error ==>'error);
      // throw new Error(error.message);
      throw new CustomError(error);

   }
}

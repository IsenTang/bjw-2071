# vue框架搭建



### 使用vue-cli

```shell
vue create vue-demo
```

### 各种lint

#### eslint

```json
{
    "env": { 
            "browser": true,
            "node":true,
            "es6":true
    },
    "plugins": ["import", "vue"],
    "parserOptions":{
        "parser": "babel-eslint",
        "sourceType": "module"
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "rules": {
        "camelcase":[1,{ "properties": "always" }],
        "no-multiple-empty-lines":[1,{ "max": 1 }],
        "indent": [1, 3],
        "semi-spacing": [1,{"before": false, "after": true}],
        "space-infix-ops": 1,
        "switch-colon-spacing": 1,
        "semi": ["error", "always"],
        "quotes": [2, "single"],
        "no-native-reassign": 2,
        "object-curly-spacing":["error","always"],
        "space-before-function-paren": "error",
        "no-trailing-spaces": 2, 
        "no-irregular-whitespace": 2,
        "array-bracket-spacing": ["error", "always"],
        "vue/html-self-closing": "off",
        "vue/no-parsing-error": [2, {"x-invalid-end-tag": false}]
    }
}
```

```json
{
    "plugins": [
        "stylelint-scss"
    ],
    "extends": ["stylelint-config-recess-order"],
    "rules": {
        "scss/selector-no-redundant-nesting-selector": true,
        "declaration-colon-space-before":"always"
    }
}
```

Package.json中加入

```
"stylelint": "^13.1.0",
"stylelint-config-recess-order": "^2.0.3",
"stylelint-config-standard": "^19.0.0",
"stylelint-order": "^4.0.0",
"stylelint-scss": "^3.13.0",
```

安装后，lint成功



### vue-router安装

```
vue add router
```



### 文件夹命名

https://cn.vuejs.org/v2/style-guide/#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90



### 安装vuex

```shell
npm i vuex --save || yarn add vuex 
```

```js
// store
import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import loading from './loading';



Vue.use(Vuex);

export default new Vuex.Store({
   state: {
   },
   mutations: {
   },
   actions: {
   },
   modules: {
    loading
   }
});

```

```js
import * as types from './mutation-types';

const loading = {

   state:{
      show: false
   },
   mutations:{

      /* show loading */
      [types.SHOW_LOADING] (state){
         state.show = true;
      },

      /* hide loading */
      [types.HIDE_LOADING] (state){
         state.show = false;
      }
   }
};

export default loading;
```

```js
export const SHOW_LOADING = 'SHOW_LOADING';

export const HIDE_LOADING = 'HIDE_LOADING';
```



### 安装sass loader

```shell
npm install -D sass-loader node-sass
```


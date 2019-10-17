/**
 * @file index.js
 */
/* eslint-disable */
import Suggest from './Suggest.vue';

Suggest.install = function (Vue) {
    Vue.component(Suggest.name, Suggest);
};

export default Suggest;
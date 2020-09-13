import axios from 'axios';
import {query} from 'js-query-builder';
import qs from "qs"

const request = axios.create({
    baseURL: 'http://rento.itmaker.uz/api/v1'
});

request.defaults.params = {};
request.defaults.params['_f'] = 'json';
request.defaults.headers.common['Accept'] = 'application/json';
request.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';


const setToken = store => {
    const token = localStorage.getItem('rentoToken');

    function handleChange() {
        request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    store.subscribe(handleChange);

};

const queryBuilder = (url, {fields = [], include = [], limit = 0, sort = '', filter = {}, page = 1, extra = {}} = {}) => {

    let queryObj = query(url);

    if (fields.length) {
        queryObj.param('fields', fields);
    }

    if (include.length) {
        queryObj.include(include);
    }

    if (limit > 0) {
        queryObj.param('limit', Number(limit));
    }

    if (sort) {
        queryObj.sort(sort);
    }

    if (Object.keys(filter).length > 0) {
        Object.keys(filter).forEach(item => {
            const normalized = qs.stringify({[item]: filter[item]}, {encode: false}).split('&');
            normalized.forEach(item => {
                const splited = item.split('=');
                if (splited.length > 1) {
                    queryObj.param(splited[0], splited[1]);
                }
            })
        });
    }

    if (Object.keys(extra).length) {
        Object.keys(extra).forEach(key => {
            if (extra[key]) {
                queryObj.param(key, extra[key])
            }
        })
    }

    if (page > 1) {
        queryObj.page(Number(page));
    }

    return decodeURIComponent(queryObj.build());
};


export default {
    request,
    queryBuilder,
    setToken,
};

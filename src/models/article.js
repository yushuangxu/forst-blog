import service from '../../api/axios';

export const getList = (data) => service({
    url: '/article/list',
    method: 'get',
    data: data,
});
export const add = (data) => service({
    url: '/article/add',
    method: 'post',
    data: data
});
export const getInfo = (data) => service({
    url: '/article/info',
    method: 'post',
    data: data
});
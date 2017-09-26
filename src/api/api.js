import axios from 'axios';


// axios 拦截器
// http response 拦截器
var config = {
  site: 'zhihu-agent.herokuapp.com',
  method: '/get?api='
}
const API_ROOT = 'https://'.concat( config.site, config.method )
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '/';


export const getNews = params => { return axios.get(`${API_ROOT}/4/news/latest`, { params: params }); };

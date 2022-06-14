const http = require('@/utils/http.js').default;

const storeApi = {
  getByUseing: params => http('manager-entity/pp/get', params, 'get')

};
module.exports = storeApi;
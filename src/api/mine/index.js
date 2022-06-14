const { post } = require('@/utils/http.js').default;

const mineApi = {
  login: data => post('/manager-entity/admin/login', data)
}
module.exports = mineApi;

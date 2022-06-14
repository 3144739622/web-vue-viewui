const { enumParse } = require('@/utils/enum');
const { login } = require('@/api/mine/index.js');

const mineServie = {
  login: async params => {
    let { code, data } = await login(params);
    if (code !== 1) {
      data = enumParse("roel", "roelEnum", '1');
    }
    return data
  }
}

module.exports = mineServie;
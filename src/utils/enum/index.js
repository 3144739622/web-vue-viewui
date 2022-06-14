module.exports = {
  enumParse(entity, props, value) {
    // console.log("enumParse", entity, props, value)
    let result = { val: -1, label: "未知枚举" };
    try {
      let enums = require(`@/utils/enum/${entity}`);
      if (!enums) {
        return result;
      }

      let list = enums[props];
      if (!Array.isArray(list) || !list.length) {
        return result;
      }

      for (let index = 0; index < list.length; index++) {
        const data = list[index];
        const { val } = data;
        if (val == value) {
          result = JSON.parse(JSON.stringify(data));
          break;
        }
      }

    } catch (error) {
      console.error(error);
    }
    return result;
  }
}
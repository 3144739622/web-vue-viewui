
/**
 * hasPerm 权限指令
 * 页面调用方法为 v-hasPerm='test.delete'
 */

const hasPerm = {
  install(app) {
    app.directive("hasPerm", {
      mounted: (el, binding) => {
        // 切割传过来的test.delete，菜单Code—menuCode, 操作Code—operationCode
        // eslint-disable-next-line no-unused-vars
        const [menuCode, operationCode] = binding.value.split(".");
        if (operationCode == 'delete') el.parentNode.removeChild(el);
      }
    });
  }
}

export default hasPerm;
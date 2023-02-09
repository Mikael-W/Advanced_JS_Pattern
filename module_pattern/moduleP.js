const myModule = (function () {
  'use strict';

  const _privateProperty = 'Hello NWS';

  function _privateMethod() {
    console.log(_privateProperty);
  }
  return {
    publicMethod: function () {
      _privateMethod();
    }
  }
})();

myModule.publicMethod();

console.log(myModule._privateProperty);

myModule._privateMethod();

export default myModule;
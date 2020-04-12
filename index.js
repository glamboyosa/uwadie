(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root.Uwadie = factory(root);
  }
})(
  typeof global !== 'undefined'
    ? global
    : typeof window !== 'undefined'
    ? window
    : this,
  function (window) {
    const UwadieConstructor = function () {
      const publicAPIS = {};
      function getPreformattedTime(options, callback) {
        const defaults = {
          setTimestamp: true,
        };
        const newDefaults = { ...defaults, ...options };
        const preformattedTime = `${`${
          /^0/.test(new Date().getHours())
            ? '0' + new Date().getHours()
            : new Date().getHours()
        }:${
          /^[0-9]/.test(new Date().getMinutes()) &&
          new Date().getMinutes().length === 1
            ? new Date().getMinutes()
            : '0' + new Date().getMinutes()
        }${
          newDefaults.setTimestamp
            ? new Date().getHours() >= '12'
              ? 'PM'
              : 'AM'
            : ''
        }`}`;
        // remember to return here

        callback(preformattedTime);
        return preformattedTime;
      }
      publicAPIS.getPreformattedTime = function (options, callback) {
        getPreformattedTime(options, callback);
      };

      return publicAPIS;
    };
    return UwadieConstructor;
  }
);
const getTime = new Uwadie();
getTime.getPreformattedTime({}, (time) => console.log(time));

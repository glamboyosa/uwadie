function Uwadie() {
  function getPreformattedTime(options) {
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
        ? '0' + new Date().getMinutes()
        : new Date().getMinutes()
    }${
      newDefaults.setTimestamp
        ? new Date().getHours() >= '12'
          ? 'PM'
          : 'AM'
        : ''
    }`}`;
    // remember to return here
    console.log(preformattedTime);
  }
  getPreformattedTime({ setTimestamp: false });
}
Uwadie();

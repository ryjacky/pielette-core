import { configure, getLogger } from 'log4js';

configure({
  appenders: {
    devConsole: { type: 'console' },
    devFile: { type: 'file', filename: 'debug.log' },
    production: { type: 'file', filename: 'info.log' },
    productionFilter: {
      type: 'logLevelFilter',
      appender: 'production',
      level: 'info',
    },
  },
  categories: {
    default: {
      appenders: ['productionFilter', 'devConsole', 'devFile'],
      level: 'trace',
    },
    main: {
      appenders: ['productionFilter', 'devConsole', 'devFile'],
      level: 'trace',
    },
    renderer: {
      appenders: ['productionFilter', 'devConsole', 'devFile'],
      level: 'trace',
    },
    addon: {
      appenders: ['productionFilter', 'devConsole', 'devFile'],
      level: 'trace',
    },
  },
});
export const Log = {
  main: getLogger('main'),
  renderer: getLogger('renderer'),
  addon: getLogger('addon')
};

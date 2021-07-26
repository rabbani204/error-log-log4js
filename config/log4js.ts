import * as path from 'path';
 const baseLogPath = path.resolve(__dirname,'../../logs'); // Which directory to write the log to
 
const log4jsConfig = {
  appenders: {
    console: {
             type:'console', // will print to the console
    },
    access: {
             type:'dateFile', // will write to the file and sort it by date
             filename: `${baseLogPath}/access/access.log`, // The name of the log file, which will be named: access.20200320.log
      alwaysIncludePattern: true,
      pattern: 'yyyyMMdd',
      daysToKeep: 60,
      numBackups: 3,
      category: 'http',
             keepFileExt: true, // Whether to keep the file suffix
    },
    app: {
      type: 'dateFile',
      filename: `${baseLogPath}/app-out/app.log`,
      alwaysIncludePattern: true,
      layout: {
        type: 'pattern',
        pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
      },
             // The log file is cut by date (day)
      pattern: 'yyyyMMdd',
      daysToKeep: 60,
      // maxLogSize: 10485760,
      numBackups: 3,
      keepFileExt: true,
    },
    errorFile: {
      type: 'dateFile',
      filename: `${baseLogPath}/errors/error.log`,
      alwaysIncludePattern: true,
      layout: {
        type: 'pattern',
        pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
      },
             // The log file is cut by date (day)
      pattern: 'yyyyMMdd',
      daysToKeep: 60,
      // maxLogSize: 10485760,
      numBackups: 3,
      keepFileExt: true,
    },
    errors: {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: 'errorFile',
    },
  },
  categories: {
    default: {
      appenders: ['console', 'app', 'errors'],
      level: 'DEBUG',
    },
    info: { appenders: ['console', 'app', 'errors'], level: 'info' },
    access: { appenders: ['console', 'app', 'errors'], level: 'info' },
    http: { appenders: ['access'], level: 'DEBUG' },
  },
     pm2: true, // When using pm2 to manage the project, open
     pm2InstanceVar:'INSTANCE_ID', // will be distinguished according to the id assigned by pm2 to avoid conflicts when writing logs
};
 
export default log4jsConfig;
 

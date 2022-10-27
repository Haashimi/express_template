const winston = require("winston");



const logConfiguration = {
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({level: 'warn'}),
        new winston.transports.Console({level: 'debug'}),
        new winston.transports.File({level: 'error', filename: './logs/error.log'})



        ]
        
    
    };




const logger = winston.createLogger(logConfiguration);

module.exports = logger;
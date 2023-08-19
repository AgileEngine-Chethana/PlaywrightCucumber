const winston = require('winston');
const { transports, format } = require('winston');

function options(scenarioName) {
    return {
        transports: [
            new transports.File({
                /* eslint-disable quotes */
                filename: `test-results/logs/logReport.log`,
                level: 'info',
                handleExceptions: true,
                json: false,
                colorize: true,
                maxsize: 5242880, // 5MB
                maxFiles: 5,
                format: format.combine(
                    // format.colorize(),
                    format.label({ label: process.env.GITHUB_WORKFLOW }),
                    format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                    format.align(),
                    format.printf((info) => `${info.label} ${info.level}: ${[info.timestamp]}: ${info.message}`),
                ),
            }),
            new transports.Console({
                level: 'info',
                handleExceptions: true,
                json: false,
                colorize: true,
                format: format.combine(
                    format.colorize(),
                    format.label({ label: process.env.GITHUB_WORKFLOW }),
                    format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                    format.prettyPrint(),
                    format.printf((info) => `${info.label} ${info.level}: ${[info.timestamp]}: ${info.message}`),
                ),
            }),
        ],
    };
}

const logger = winston.createLogger(options());

module.exports = { options, logger };
// require('dotenv').config();
const { dotenv, config } = require('dotenv');

const getEnv = () => {
    config({
        override: true,
        path: `src/helper/env/.env.${process.env.ENV}`,
    });
};

module.exports = { getEnv };

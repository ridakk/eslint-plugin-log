/**
 * @fileoverview Prevent sensitive information from being logged in the log messages
 * @author Kadir Goktas
 */
"use strict";

// import all rules in lib/rules
module.exports.rules = {
  'no-json-stringify': require('./rules/no-json-stringify'),
};

module.exports.configs = {
  recommended: {
    rules: {
      'log/no-json-stringify': 2,
    },
  },
};


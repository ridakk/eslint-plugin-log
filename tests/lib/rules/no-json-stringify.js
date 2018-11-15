/**
 * @fileoverview Prevent JSON.stringify usage in logs
 * @author Kadir Goktas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-json-stringify");
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    }
});
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-json-stringify", rule, {

    valid: [
        'logger.warn(\'anything without containing JSON.stringify as a parameter\')',
    ],

    invalid: [
        {
            code: 'logger.info(\'test obj: %s\', JSON.stringify({a:1}));',
            errors: [{
                message: 'Do not use JSON.stringify'
            }]
        }, 
        {
            code: 'logger.error(JSON.stringify({ a: 1 }));',
            errors: [{
                message: 'Do not use JSON.stringify'
            }]
        }, 
        {
            code: 'logger.fatal(`test ${JSON.stringify({ a: 1 })}`);',
            errors: [{
                message: 'Do not use JSON.stringify'
            }]
        }, 
        {
            code: 'logger.debug(JSON.stringify({a:1}) + obj);',
            errors: [{
                message: 'Do not use JSON.stringify'
            }]
        }, 
        {
            code: 'logger.debug(\'test\' + JSON.stringify({a:1}) + obj);',
            errors: [{
                message: 'Do not use JSON.stringify'
            }]
        },
        {
            code: 'logger.debug(\'test\' + JSON.stringify({a:1}) + \'test\');',
            errors: [{
                message: 'Do not use JSON.stringify'
            }]
        },
        {
            code: 'logger.trace(JSON.stringify({a:1}) + \'test\');',
            errors: [{
                message: 'Do not use JSON.stringify'
            }]
        }, 
        {
            code: 'logger.trace(obj + JSON.stringify({a:1}) + \'test\');',
            errors: [{
                message: 'Do not use JSON.stringify'
            }]
        }, 
        {
            code: 'logger.error({ err: err, asd:qwe, }, JSON.stringify({a:1}))',
            errors: [{
                message: 'Do not use JSON.stringify'
            }]
        }
    ]
});

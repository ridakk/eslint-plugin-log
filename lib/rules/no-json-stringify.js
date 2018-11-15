/**
 * @fileoverview Prevent JSON.stringify usage in logs
 * @author Kadir Goktas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const defaultObjectName = 'logger';
const defaultMethods = ['fatal', 'error', 'warn', 'info', 'debug', 'trace'];

module.exports = function(context) {
  const objectName = context.options.object || defaultObjectName;
  const methods = context.options.methods || defaultMethods;

  return {
    CallExpression: function(node) {
      if(node.callee &&
         node.callee.type &&
         node.callee.type === 'MemberExpression' &&
         node.callee.object &&
         node.callee.object.name &&
         node.callee.object.name === objectName &&
         node.callee.property &&
         node.callee.property.name &&
         methods.indexOf(node.callee.property.name) !== -1) {
          node.arguments.forEach(function(argument) {
            function check(arg) {
              if (arg.left) {
                check(arg.left)
              }

              if (arg.right) {
                check(arg.right)
              }

              if (arg.callee && arg.callee.type === 'MemberExpression' && arg.callee.object.name === 'JSON' && arg.callee.property.name === 'stringify') {
                context.report({node, message: 'Do not use JSON.stringify'});
              }
            }

            if (argument.expressions) {
              argument.expressions.forEach(check);
            }

            check(argument)
          });
      }
    }
  };
};

module.exports.schema = [];

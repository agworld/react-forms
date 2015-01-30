/**
 * @jsx React.DOM
 */
'use strict';

var React             = require('react/addons');
var cloneWithProps    = React.addons.cloneWithProps;
var utils             = require('./utils');
var schema            = require('./schema');
var Field             = require('./Field');
var Fieldset          = require('./Fieldset');
var RepeatingFieldset = require('./RepeatingFieldset');
var createElementFrom = require('./createElementFrom');

/**
 * Create a component which represents provided schema node
 *
 * @private
 * @param {SchemaNode} node
 * @returns {ReactComponent}
 */
function createComponentFromSchema(node) {
  var props = {key: node.name, name: node.name};

  if (node.props.component) {
    return createElementFrom(node.props.component, props);
  }

  if (schema.isList(node)) {
    return React.createElement(RepeatingFieldset, props);
  } else if (schema.isSchema(node)) {
    return React.createElement(Fieldset, props);
  } else if (schema.isProperty(node)) {
    return React.createElement(Field, props);
  } else {
    utils.invariant(false, 'invalid schema node: ' + node);
  }
}

module.exports = createComponentFromSchema;

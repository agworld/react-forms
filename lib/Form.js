/**
 * @jsx React.DOM
 */
'use strict';

var React     = require('react/addons');
var cx        = React.addons.classSet;
var FormMixin = require('./FormMixin');
var FormFor   = require('./FormFor');
var v         = require('./validation');
var createElementFrom = require('./createElementFrom');

var Form = React.createClass({
  mixins: [FormMixin],

  propTypes: {
    component: React.PropTypes.constructor,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  render: function() {
    var className = cx({
      'rf-Form': true,
      'rf-Form--invalid': v.isFailure(this.value().validation)
    });
    var formElement = (
      <form {...this.props} className={cx(this.props.className, className)}>
        <FormFor />
      </form>
    );

    if (this.props.component) {
      return createElementFrom(this.props.component, formElement);
    } else {
      return formElement;
    }
  },

  valueUpdated: function(value, update) {
    var isSuccess = v.isSuccess(value.validation);
    if (this.props.onUpdate) {
      this.props.onUpdate(value.value, isSuccess, update);
    }
    if (this.props.onChange && isSuccess) {
      this.props.onChange(value.value, update);
    }
  }
});

module.exports = Form;

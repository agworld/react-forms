/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var cx = require('classnames');

var Label = React.createClass({

  propTypes: {
    schema: React.PropTypes.object,
    label: React.PropTypes.string,
    hint: React.PropTypes.string
  },

  render: function() {
    var schema = this.props.schema;
    var label = this.props.label ? this.props.label : schema.props.label;
    var hint = this.props.hint ? this.props.hint : schema.props.hint;
    if (!hint && !label) {
      return <span />;
    }
    return (
      <label {...this.props} className={cx(this.props.className, "rf-Label")}>
        {label}
        {hint && <Hint hint={hint} />}
      </label>
    );
  }
});

var Hint = React.createClass({

  propTypes: {
    hint: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <span {...this.props} className={cx(this.props.className, "rf-Hint")}>{this.props.hint}</span>
    );
  }
});

module.exports = Label;

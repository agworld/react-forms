/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var cx = require('classnames');

var Message = React.createClass({

  render: function() {
    return (
      <span {...this.props} className={cx(this.props.className, "rf-Message")}>
        {this.props.children}
      </span>
    );
  }
});

module.exports = Message;

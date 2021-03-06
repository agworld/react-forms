var React = require('react/addons')
var cloneWithProps = React.addons.cloneWithProps
var isElement = React.isValidElement || React.isValidComponent

function createElementFrom(component, props) {
  if (isElement(component)) {
    return cloneWithProps(component, props)
  } else {
    return React.createElement(component, props)
  }
}

module.exports = createElementFrom

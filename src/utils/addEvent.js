import $ from './querySelector.js'

const addEventListener = (type, selector, handler) => {
  $(selector).addEventListener(type, handler)
}

export default addEventListener

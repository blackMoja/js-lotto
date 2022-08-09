const $ = (selector) => {
  const $el = document.querySelectorAll(selector)
  const isQuerySelector = $el.length === 1

  return isQuerySelector ? $el[0] : $el
}

export default $

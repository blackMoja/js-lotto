import { setState } from '../core/state.js'
import $ from '../utils/querySelector.js'
import addEvent from '../utils/addEvent.js'
import CONSTANTS from '../utils/constants.js'

const getLottoTicket = () => {
  const totalPrice = $('input[name=totalPrice]').value
  return totalPrice / CONSTANTS.LOTTO_TICKET_PRICE
}

const getLottoNumber = () => {
  const lottoNumbers = []

  while (lottoNumbers.length < 7) {
    const number = Math.floor(Math.random() * 100) + 1

    if (lottoNumbers.indexOf(number) === -1) {
      lottoNumbers.push(number)
    }
  }

  return lottoNumbers
}

// alert을 어떻게 해볼깡.. 여기서 어떻게  alert을 넘기지 흠
const checkValidate = () => {
  if (!isPriceInteger()) {
    alert('로또 구입 금액을 1,000원 단위로 입력해 주세요.')
    return false
  }

  return true
}

const isPriceInteger = () => {
  const totalPrice = Number($('input[name=totalPrice]').value)
  const isTotalPriceValid = totalPrice >= CONSTANTS.LOTTO_TICKET_PRICE

  if (isTotalPriceValid) {
    return Number.isInteger(totalPrice / CONSTANTS.LOTTO_TICKET_PRICE)
  }
}

const handleSubmitButton = (e) => {
  e.preventDefault()

  if (!checkValidate()) {
    return
  }

  setState({
    ticketCount: getLottoTicket(),
  })
}

const handleToggle = (e) => {
  const isChecked = e.target.checked
  const $lottoNumber = $('span[name="lotto-number"]')

  if (isChecked) {
    $lottoNumber.forEach((el) => el.classList.remove('hidden'))
  } else {
    $lottoNumber.forEach((el) => el.classList.add('hidden'))
  }
}

const handlers = () => {
  addEvent('submit', '#lottoPriceForm', handleSubmitButton)
  addEvent('change', '.lotto-numbers-toggle-button', handleToggle)
}

const init = () => {
  handlers()
}

init()

export { getLottoNumber }

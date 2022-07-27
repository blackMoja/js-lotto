import { updateLottoResultForm } from './lottoResult.js'

const $lottoPriceForm = document.querySelector('#lottoPriceForm')
const $lottoResultForm = document.querySelector('#lottoResultForm')
const $lottoNumberForm = document.querySelector('#lottoNumberForm')

const $lottoPriceInput = document.querySelector('input[name="lottoPriceInput"]')

const PREFIX = 1000

const getLottoCount = () => $lottoPriceInput.value / PREFIX

const handleFormSubmit = (e) => {
  e.preventDefault()

  if (!checkValidate()) {
    return
  }

  updateStyle()
  updateLottoResultForm(getLottoCount())
}

const checkValidate = () => {
  if (!isPriceInteger()) {
    return false
  }

  return true
}

const isPriceInteger = () => {
  const price = Number($lottoPriceInput.value)

  if (price >= PREFIX) {
    return Number.isInteger(price / PREFIX)
  }
}

const updateStyle = () => {
  if (isPriceValidate) {
    $lottoResultForm.style.display = 'block'
    $lottoNumberForm.style.display = 'block'
  }
}

$lottoPriceForm.addEventListener('submit', handleFormSubmit)

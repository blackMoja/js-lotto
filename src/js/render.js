import { state } from '../core/state.js'
import { getLottoNumber } from './lotto.js'
import $ from '../utils/querySelector.js'

const $lottoPurchaseForm = $('#lottoPurchaseForm')
const $lottoNumberForm = $('#lottoNumberForm')

const renderLottoForm = () => {
  $lottoPurchaseForm.classList.remove('hidden')
  $lottoNumberForm.classList.remove('hidden')

  $('#ticketCount').innerHTML = `총 ${state.ticketCount}개를 구매하였습니다.`
}

const makeLottoTicket = () => {
  let dom = ''

  for (let i = 0; i < state.ticketCount; i++) {
    dom += `
      <div class="mx-1 text-4xl lotto-ticket-contianer">
        <span>🎟️ </span>
        <span class="lotto-number hidden" name="lotto-number">${getLottoNumber()}</span>
      </div>
    `
  }

  return dom
}

const renderLotttoTicket = () => {
  $('#lottoTicket').innerHTML = makeLottoTicket()
}

const render = () => {
  renderLottoForm()
  renderLotttoTicket()
}

export default render

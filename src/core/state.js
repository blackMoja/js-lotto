import observer from './observer.js'
import render from '../js/render.js'

const state = {
  gameStatus: '',
  ticketCount: '',
}

const setState = (newState) => {
  Object.keys(state).forEach((key) => (state[key] = newState[key] ?? ''))

  observer.fire()
}

observer.subscribe(render)

export { state, setState }

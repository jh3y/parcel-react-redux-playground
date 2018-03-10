import constants from '../constants/network.constants'

const initialState = {
  busy: false,
}

const NetworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.NETWORK_UPDATE:
      return Object.assign({}, state, {
        busy: action.busy,
      })
    case constants.NETWORK_TOGGLE:
      return Object.assign({}, state, {
        busy: !state.busy,
      })
    default:
      return state
  }
}

export default NetworkReducer

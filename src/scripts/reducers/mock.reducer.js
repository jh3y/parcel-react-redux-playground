import constants from '../constants/mock.constants'

const initialState = {
  data: [],
}

const MockReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.DATA_RECEIVED:
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
      })
    default:
      return state
  }
}

export default MockReducer

import constants from '../constants/mock.constants'

import { toggleNetwork } from './network.actions'

const receiveData = (data) => ({
  type: constants.DATA_RECEIVED,
  data,
})

const generateData = () => {
  return new Promise((resolve) => {
    const data = []
    for (let n = 0; n < Math.floor(Math.random() * 10 + 1); n++) {
      data.push('blergerger')
    }
    setTimeout(() => resolve(data), 5000)
  })
}

const getData = () => dispatch => {
  dispatch(toggleNetwork())
  return new Promise((resolve) => {
    generateData().then((newData) => {
      dispatch(receiveData(newData))
      dispatch(toggleNetwork())
    })
  })
}

export {
  getData,
  receiveData,
}
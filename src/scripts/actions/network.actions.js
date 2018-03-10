import constants from '../constants/network.constants'

const toggleNetwork = () => ({
  type: constants.NETWORK_TOGGLE
})

const updateNetwork = (busy) => ({
  type: constants.NETWORK_UPDATE,
  busy,
})

export {
  toggleNetwork,
  updateNetwork
}
import { combineReducers } from 'redux'
import mock from './mock.reducer'
import network from './network.reducer'

const AppReducer = combineReducers({
  mock,
  network,
})

export default AppReducer
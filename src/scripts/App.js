import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import Home from './containers/Home'
import About from './containers/About'
import { container } from '../styles/index.styl'
import boilerplateApp from './reducers/boilerplate.reducer'

const store = createStore(boilerplateApp, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <Router>
      <div className={container}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  </Provider>
)
export default App

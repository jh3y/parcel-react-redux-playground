import PropTypes from 'prop-types'
import React, { createContext, Component, Fragment } from 'react'
import ThemeContext from '../../contexts/theme.context'

const Button = ({ text }) => (
  <ThemeContext.Consumer>
    {theme => (
      <button
        style={{
          background: theme === 'dark' ? '#fff' : '#111',
        }}>
        {text}
      </button>
    )}
  </ThemeContext.Consumer>
)

class DataTable extends Component {
  static defaultProps = {
    getData: () => {},
  }
  render = () => {
    const { data, onClick, busy } = this.props
    return (
      <Fragment>
        <ul>
          {data.map((item, idx) => <li key={`table-item--${idx}`}>{item}</li>)}
        </ul>
        <Button text="Hey" />
        <button disabled={busy} onClick={() => onClick()}>
          {busy ? "Gettin' it" : 'Get data'}
        </button>
      </Fragment>
    )
  }
}
export default DataTable

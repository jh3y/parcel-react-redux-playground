import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ThemeContext from '../../contexts/theme.context'
import * as NetworkActions from '../../actions/network.actions'
import * as MockActions from '../../actions/mock.actions'
import { Page } from '../../components/Common/'
import NetworkIndicator from '../../components/NetworkIndicator'
import Title from '../../components/Title/'
import Content from '../../components/DataTable'
import styled from 'styled-components'

const pos = args => {
  const [top, right, bottom, left] = args.split(' ')
  return { top, right, bottom, left }
}

const Emoji = styled.div.attrs({ chosen: p => (p.chosen ? p.chosen : '🦄') })`
  &:after {
    content: "${p => p.chosen}";
    font-size: 10rem;
    position: fixed;
    ${pos('50% null 20vh null')}
  }
`
class Home extends Component {
  state = {
    theme: 'light',
  }
  render = () => {
    const { busy, data, getData } = this.props
    const { theme } = this.state
    return (
      <ThemeContext.Provider value={theme}>
        <Page>
          <Title text="Home" />
          <NetworkIndicator active={busy} />
          <Content busy={busy} data={data} onClick={getData} />
          <Emoji chosen="🦄" />
          <button
            onClick={() =>
              this.setState({
                theme: theme === 'light' ? 'dark' : 'light',
              })
            }>
            Toggle theme
          </button>
        </Page>
      </ThemeContext.Provider>
    )
  }
}
const mapStateToProps = state => ({
  busy: state.network.busy,
  data: state.mock.data,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MockActions, ...NetworkActions }, dispatch)
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer

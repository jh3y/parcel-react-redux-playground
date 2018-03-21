import PropTypes from 'prop-types'
import React, { Component } from 'react'

import ThemeContext from '../../contexts/theme.context'
import { Indicator } from './networkindicator.style'

import styled from 'styled-components'

const NetworkActivityIndicator = styled.div.attrs({ pos: 20, size: 3 })`
  position: fixed;
  right: ${p => p.pos}px;
  top: ${p => p.pos}px;
  &:after {
    content: "${p => (p.active ? '😅' : '😴')}";
    font-size: ${p => p.size}rem;
  }
`
export default NetworkActivityIndicator

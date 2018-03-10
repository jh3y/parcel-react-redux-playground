import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Page } from '../../components/Common/'
import Title from '../../components/Title/'

class About extends Component {
  render = () => {
    return (
      <Page>
        <Title text="About"/>
      </Page>
    )
  }
}

export default About
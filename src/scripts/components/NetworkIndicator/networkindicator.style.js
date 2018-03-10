import styled from 'styled-components'

const Indicator = styled.div`
  font-size: 4rem;
  background-color: ${p => p.theme === 'light' ? 'black' : 'white'};
`

export {
  Indicator
}
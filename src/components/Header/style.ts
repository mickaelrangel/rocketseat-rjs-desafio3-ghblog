import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme['base-profile']};
  height: 296px;
  margin: 0 auto;

  justify-content: center;
  align-items: center;
`

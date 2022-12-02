import styled from 'styled-components'

export const PostDetailHeader = styled.section`
  width: 864px;
  margin: 0 auto;
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-profile']};
  margin-top: -5rem;
  border-radius: 10px;

  z-index: 100;
  position: relative;

  border: 1px solid ${(props) => props.theme.blue};

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
  }
`

export const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 0.5rem;
  gap: 1.5rem;

  span {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostDetailContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 864px;
`

export const Description = styled.div`
  padding: 2.5rem 2rem;
  text-align: justify;
  color: ${(props) => props.theme['base-text']};

  a {
    color: ${(props) => props.theme.blue};
  }
`

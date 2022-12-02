import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2.5rem;

  display: flex;
  flex-direction: row;
  gap: 2rem;

  background: ${(props) => props.theme['base-profile']};
  margin-top: -5rem;
  border-radius: 10px;

  z-index: 100;
  position: relative;

  border: 1px solid ${(props) => props.theme.blue};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border: 0;
    border-radius: 8px;
  }
`

export const ProfileDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue};
    }
  }
`

export const Details = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 0.5rem;

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

export const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 2.5rem;
  gap: 1.5rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

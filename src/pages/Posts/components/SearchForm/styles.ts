import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostLabel = styled.label`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Input = styled.input`
  flex: 1;
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    box-shadow: none;
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme.blue};
  }
`

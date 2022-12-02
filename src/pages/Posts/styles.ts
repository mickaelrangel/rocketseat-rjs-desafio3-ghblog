import styled from 'styled-components'

export const PostsContainer = styled.main`
  width: 864px;
  margin: 4.5rem auto 0;
  display: flex;
  flex-direction: column;
`

export const CardsSection = styled.section`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  a {
    text-decoration: none;
  }
`

export const CardsGrid = styled.div`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  height: 260px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
  }
`

export const CardTitle = styled.div`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.25rem;
  font-weight: bold;
`

export const CardTime = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme['base-span']};
  white-space: nowrap;
`

export const CardDescription = styled.div`
  margin-top: 1.25rem;
  color: ${(props) => props.theme['base-text']};
  text-align: justify;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  overflow: hidden;
  -webkit-box-orient: vertical;
`

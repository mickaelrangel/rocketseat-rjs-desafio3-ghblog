import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Profile } from '../../components/Profile'
import { BlogContext } from '../../contexts/BlogContext'
import { capitalizeFirstLetter } from '../../util/formatter'
import { SearchForm } from './components/SearchForm'
import {
  CardDescription,
  CardsGrid,
  CardsSection,
  CardTime,
  CardTitle,
  PostsContainer,
} from './styles'

export function Posts() {
  const { issues } = useContext(BlogContext)
  return (
    <div>
      <Profile />

      <PostsContainer>
        <SearchForm />
        <CardsSection>
          {issues.map((issue) => {
            return (
              <nav key={issue.id}>
                <NavLink to={{ pathname: `/post/${issue.id}` }}>
                  <CardsGrid>
                    <header>
                      <CardTitle>{issue.title}</CardTitle>
                      <CardTime>
                        {capitalizeFirstLetter(issue.updatedAt)}
                      </CardTime>
                    </header>
                    <CardDescription>{issue.description}</CardDescription>
                  </CardsGrid>
                </NavLink>
              </nav>
            )
          })}
        </CardsSection>
      </PostsContainer>
    </div>
  )
}

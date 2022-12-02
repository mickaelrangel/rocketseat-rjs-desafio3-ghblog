import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { BlogContext } from '../../../../contexts/BlogContext'
import { Input, LabelContainer, PostLabel, SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { searchIssues, totalSearchedIssues } = useContext(BlogContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function searchAction(data: SearchFormInputs) {
    searchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(searchAction)}>
      <LabelContainer>
        <PostLabel>Publicações</PostLabel>
        <div>{totalSearchedIssues} publicações</div>
      </LabelContainer>
      <Input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { publishedDateRelativeToNow } from '../util/formatter'

interface ProfileProps {
  id: number
  login: string
  name: string
  company: string
  bio: string
  avatarUrl: string
  githubUrl: string
  followers: number
}

interface IssueProps {
  id: number
  title: string
  description: string
  updatedAt: string
}

interface IssueDetailProps {
  login: string
  title: string
  description: string
  updatedAt: string
  githubUrl: string
  quantityComments: number
}

interface BlogContextType {
  profile: ProfileProps
  issues: IssueProps[]
  issueDetail: IssueDetailProps
  totalSearchedIssues: number
  searchIssues: (query?: string) => Promise<void>
  getIssueByNumber: (id: number) => Promise<void>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)
  const [issues, setIssues] = useState<IssueProps[]>([])
  const [issueDetail, setIssueDetail] = useState<IssueDetailProps>(
    {} as IssueDetailProps,
  )
  const [totalSearchedIssues, setTotalSearchedIssues] = useState(0)

  const fecthProfile = useCallback(async () => {
    const response = await api.get('users/mickaelrangel')
    const dataFromGithub = response.data
    const profile: ProfileProps = {
      id: dataFromGithub.id,
      login: dataFromGithub.login,
      name: dataFromGithub.name,
      company: dataFromGithub.company,
      bio: dataFromGithub.bio,
      avatarUrl: dataFromGithub.avatar_url,
      githubUrl: dataFromGithub.html_url,
      followers: dataFromGithub.followers,
    }

    setProfile(profile)
  }, [])

  const searchIssues = useCallback(async (query?: string) => {
    const q = query || ''
    const response = await api.get('search/issues', {
      params: {
        q: `${q} repo:mickaelrangel/rocketseat-rjs-desafio1-todo`,
        _sort: 'updated_at',
        _order: 'desc',
      },
    })

    const searchedIssues = response.data.items.map((item: any) => {
      const issue: IssueProps = {
        id: item.number,
        title: item.title,
        description: item.body,
        updatedAt: publishedDateRelativeToNow(item.updated_at),
      }

      return issue
    })

    setIssues(searchedIssues)
    setTotalSearchedIssues(searchedIssues.length)
  }, [])

  const getIssueByNumber = useCallback(async (id: number) => {
    const response = await api.get(
      'repos/mickaelrangel/rocketseat-rjs-desafio1-todo/issues/' + id,
    )
    const dataFromGithub = response.data
    const issue: IssueDetailProps = {
      login: dataFromGithub.user.login,
      title: dataFromGithub.title,
      description: dataFromGithub.body,
      updatedAt: publishedDateRelativeToNow(dataFromGithub.updated_at),
      quantityComments: dataFromGithub.comments,
      githubUrl: dataFromGithub.html_url,
    }

    setIssueDetail(issue)
  }, [])

  useEffect(() => {
    fecthProfile()
    searchIssues()
  }, [fecthProfile, searchIssues])

  return (
    <BlogContext.Provider
      value={{
        profile,
        issues,
        issueDetail,
        totalSearchedIssues,
        searchIssues,
        getIssueByNumber,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

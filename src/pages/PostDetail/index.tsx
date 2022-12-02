import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { NavLink, useParams } from 'react-router-dom'
import { BlogContext } from '../../contexts/BlogContext'
import {
  Description,
  Info,
  Links,
  PostDetailContainer,
  PostDetailHeader,
} from './styles'

export function PostDetail() {
  const { id } = useParams()
  const { getIssueByNumber, issueDetail } = useContext(BlogContext)

  useEffect(() => {
    getIssueByNumber(Number(id))
  }, [id, getIssueByNumber])

  return (
    <>
      <PostDetailHeader>
        <Links>
          <nav>
            <NavLink to="/">
              <FontAwesomeIcon icon={faChevronLeft} /> &nbsp;VOLTAR
            </NavLink>
          </nav>
          <a href={issueDetail.githubUrl} target="_blank" rel="noreferrer">
            VER NO GITHUB &nbsp;{' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Links>
        <div>
          <span>{issueDetail.title}</span>
        </div>
        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" />
            &nbsp;&nbsp;
            <span>{issueDetail.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />
            &nbsp;&nbsp;
            <span>{issueDetail.updatedAt}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} color="#3A536B" />
            &nbsp;&nbsp;
            <span>{issueDetail.quantityComments} comentários</span>
          </div>
        </Info>
      </PostDetailHeader>
      <PostDetailContainer>
        <Description>
          <ReactMarkdown>{issueDetail.description}</ReactMarkdown>
        </Description>
      </PostDetailContainer>
    </>
  )
}

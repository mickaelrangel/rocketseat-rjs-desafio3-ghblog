import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Details, Info, ProfileContainer, ProfileDetails } from './style'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

export function Profile() {
  const { profile } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <img src={profile.avatarUrl} alt="" />
      <ProfileDetails>
        <header>
          <span>{profile.name}</span>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GITHUB &nbsp; <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <Details>
          <span>{profile.bio}</span>
          <Info>
            <div>
              <FontAwesomeIcon icon={faGithub} color="#3A536B" />
              &nbsp;&nbsp;
              <span>{profile.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} color="#3A536B" />
              &nbsp;&nbsp;
              <span>{profile.company}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} color="#3A536B" />
              &nbsp;&nbsp;
              <span>{profile.followers} seguidores</span>
            </div>
          </Info>
        </Details>
      </ProfileDetails>
    </ProfileContainer>
  )
}

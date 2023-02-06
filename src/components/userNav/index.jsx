/* eslint-disable react/prop-types */
import {
  UserNavArea,
  UserNavContainer,
  UserActionContainer,
  UserNavInfo,
  UserNavImage,
  UserName,
  LastSeen,
  UserNavDetail
} from './style'
import { MdOutlineLocalPhone, MdOutlineSearch } from 'react-icons/md'
import { BsThreeDotsVertical } from 'react-icons/bs'

const UserNav = ({ userName, userPhoto }) => {
  return (
    <UserNavArea>
      <UserNavContainer>
        <UserNavInfo>
          <UserNavImage src={userPhoto} alt="Profile Image" />
          <UserNavDetail>
            <UserName>{userName}</UserName>
            <LastSeen>Last seen recently</LastSeen>
          </UserNavDetail>
        </UserNavInfo>
        <UserActionContainer>
          <MdOutlineSearch size={25} color="#aaa" className="menu-icon" />
          <MdOutlineLocalPhone size={25} color="#aaa" className="menu-icon" />
          <BsThreeDotsVertical size={25} color="#aaa" className="menu-icon" />
        </UserActionContainer>
      </UserNavContainer>
    </UserNavArea>
  )
}

export default UserNav

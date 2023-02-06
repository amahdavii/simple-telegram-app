/* eslint-disable react/prop-types */
import { BiMenu } from 'react-icons/bi'
import Search from '@/components/Search'
import { SideBarHeaderArea, SideBarHeaderMenu } from './style'

const SideBarHeader = ({ setSearch }) => {
  return (
    <SideBarHeaderArea>
      <SideBarHeaderMenu>
        <BiMenu size={28} color="#aaa" />
      </SideBarHeaderMenu>
      <Search setSearch={setSearch} />
    </SideBarHeaderArea>
  )
}

export default SideBarHeader

/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { SideBarArea } from './style'
import SideBarHeader from './header'
import ChatItems from '@/components/chatItems'
import { useState } from 'react'

const SideBar = ({ data, setActive }) => {
  const [search, setSearch] = useState()
  return (
    <SideBarArea>
      <SideBarHeader setSearch={setSearch} />
      <ChatItems search={search} data={data} setActive={setActive} />
    </SideBarArea>
  )
}

export default SideBar

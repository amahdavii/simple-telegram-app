/* eslint-disable no-undef */
import SideBar from '@/components/sidebar'
import InnerChat from '@/components/InnerChat'
import { HomePageContainer } from './style'
import { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [userData, setUserData] = useState([])
  const [selectItem, setSelectItem] = useState()

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/users`).then((res) => setUserData(res?.data))
  }, [])

  return (
    <HomePageContainer>
      <SideBar data={userData} setActive={setSelectItem} />
      {selectItem && <InnerChat activeItem={selectItem} />}
    </HomePageContainer>
  )
}

export default HomePage

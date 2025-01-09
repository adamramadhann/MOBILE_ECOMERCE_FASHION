import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './login/Home'
import GetStartedPage from './login/GetStartedPage'
import SearchScreen from './screen/SearchScreen'
import Layout from './layout/Layout'
import Notivication from './screen/NotivicationHome'
import HomeScreen from './screen/HomeScreen'
import OrderScreen from './screen/OrderScreen'
import ProfileScreen from './screen/ProfileScreen'
import DetailsCard from './components/DetailsCard'
import MyOrder from './screen/MyOrder'
// import DarkMode from './DarkMode'

const App = () => {
  return (
  // <DarkMode>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/getStarted' element={<GetStartedPage/>} />
      <Route path='/detailProduck/:id' element={<DetailsCard/>} />
      <Route path='/layout' element={<Layout/>} >
        <Route index element={<HomeScreen/>} />
        <Route path='notif' element={<Notivication/>} />
        <Route path='search' element={<SearchScreen/>} />
        <Route path='order' element={<OrderScreen/>} />
        <Route path='profile' element={<ProfileScreen/>} />
        <Route path='order' element={<MyOrder/>} />
      </Route>
    </Routes>
  // </DarkMode>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './login/Home'
import GetStartedPage from './login/GetStartedPage'
import SearchScreen from './screen/SearchScreen'
import Layout from './layout/Layout'
import HomeScreen from './screen/HomeScreen'
import OrderScreen from './screen/OrderScreen'
import DetailsCard from './components/DetailsCard'
import Notivication from './components/NotivicationHome'
import MyCard from './screen/checkouth/MyCard'
import CheckouthLayouth from './layout/CheckouthLayouth'
import Step from './screen/checkouth/step_checkouth/Step'
import Step2 from './screen/checkouth/step_checkouth/Step2'
import Step3 from './screen/checkouth/step_checkouth/Step3'
import DetailCheckout from './components/order/DetailCheckout'
import Rate from './components/order/Rate'
import TrackOther from './components/TrackOther'
import MyWhistList from './screen/MyWhistList'
import Setting from './components/Setting'
import Profile from './screen/profile/Profile'
import About from './components/About'
import Address from './screen/setting/Address'
import Vocher from './screen/setting/Vocher'
import RattingSettingProfile from './screen/setting/RattingSettingProfile'

const App = () => {
  
  return (
  // <DarkMode>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/getStarted' element={<GetStartedPage/>} />
      <Route path='/detailProduck' element={<DetailsCard/>} />
      <Route path='/myCard' element={<MyCard/>} />
      <Route path='/rate' element={<Rate/>} />
      <Route path='/rating' element={<RattingSettingProfile/>} />
      <Route path='/address' element={<Address/>} />
      <Route path='/vocher' element={<Vocher/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/myWhistlist' element={<MyWhistList/>} />
      <Route path='/track_order' element={<TrackOther/>} />
      <Route path='/detailCheckout' element={<DetailCheckout/>} />
      <Route path='/checkout' element={< CheckouthLayouth />} >
      <Route index element={<Step/>}/>
      <Route path='step2' element={<Step2/>}/>
      <Route path='step3' element={<Step3/>}/>
      </Route>
      <Route path='/layout' element={<Layout/>}  >
        <Route index element={<HomeScreen/>} />
        <Route path='notif' element={<Notivication/>} />
        <Route path='search' element={<SearchScreen/>} />
        <Route path='order' element={<OrderScreen/>} />
        <Route path='profile' element={<Setting/>} />
      </Route>
    </Routes>
  // </DarkMode>
  )
}

export default App
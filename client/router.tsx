/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Start from './components/Start'
import Home from './components/Home'
import PetProfile from './components/PetProfile'
import Login from './components/Login'



const router = createBrowserRouter(
  createRoutesFromElements([
      <Route path="/" element={<App />}>
      <Route index element = {<Start />}/>
        <Route path="SignUp" element={<Home />}/>
        <Route path="Profile" element={<PetProfile />}/>
        <Route path="Login" element={<Login />}/>

  </Route> ])
)

export default router

import { useFruits } from '../hooks/useFruits.ts'
import PetProfile from './PetProfile.tsx'
import UploadAvatar from './Avatar.tsx'
import Checkbox from './Checkbox.tsx'
import Home from './Home.tsx'
import Start from './Start.tsx'
import Avatar from 'react-avatar-edit'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
    <div className="center-screen">
   
      <div className="app">
      
        
     <Outlet />
     

        

      </div>
    </div>
    </>
  )
}

export default App

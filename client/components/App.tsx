import { useFruits } from '../hooks/useFruits.ts'
import PetProfile from './PetProfile.tsx'
import UploadAvatar from './Avatar.tsx'
import Checkbox from './Checkbox.tsx'
import Home from './Home.tsx'


function App() {
  return (
    <>
      <div className="app">
      
        <PetProfile />

        <Home />

      </div>
    </>
  )
}

export default App

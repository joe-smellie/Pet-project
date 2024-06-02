import { useFruits } from '../hooks/useFruits.ts'
import PetProfile from './PetProfile.tsx'
import UploadAvatar from './Avatar.tsx'
import Checkbox from './Checkbox.tsx'
import Landing from './Landing.tsx'

function App() {
  return (
    <>
      <div className="app">
      

        <PetProfile />

        <Landing />

        <UploadAvatar />
      </div>
    </>
  )
}

export default App

import Checkbox from "./Checkbox"
import UploadAvatar from "./Avatar"


// Pet name
// Profile picture
// date that updates
// checkoxes for feeding and walk

function PetProfile() {
    return (
    <>
    <div className = "name">
        <h1>Otis</h1>
    </div>

    <div className = "avatar">
       <img src="client/images/Otis.png" alt = "placeholder"></img>
    </div>

 
    <div className="haveya">
        <Checkbox />
    </div>
     </>
    )   
}

export default PetProfile
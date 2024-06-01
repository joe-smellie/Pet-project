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
       <img src="client/images/Otis.png" alt = "profile"></img>
       
    </div>

    <div className="feeding">
        <h3>Feeding</h3>
        <Checkbox label = "Morning" />
        <Checkbox label = "Evening" />
    </div>

    <div className= "exercise">
        <h3>Exercise</h3>
        <Checkbox label="Walk" />
     </div>
     </>
    )   
}

export default PetProfile
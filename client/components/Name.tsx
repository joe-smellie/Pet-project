
import { useState } from "react";


function PetName () {
    const [name, setName] = useState("")


return (
    <>
    <h2>What is your pets name?</h2>
    <div className="name">
        <input
            type="text"
            placeholder="e.g Otis"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
    </div>
    
    </>
)

}

export default PetName
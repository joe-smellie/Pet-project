import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Start() {
    const navigate = useNavigate()

return (
    <>
     <div className="header">
        <img src="client/images/Petmind.png" alt="petmind"></img>
    </div>
        <h1>Share your best friends care</h1>
        <div className="start">
            <button onClick={() => navigate("SignUp")}>Start here</button>
        </div>
            <p>Already have an account?<Link to="Login">Login here</Link> </p>
    
    </>
)
}


export default Start

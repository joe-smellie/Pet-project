import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp() {
    const navigate = useNavigate()

    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")


    return (
        <>
        <h2>Create Account</h2>
        <form className="signUp">
            <input 
                type="firstname" 
                placeholder="First Name" 
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                />
            <input
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            <input
                type="password" 
                placeholder="Create password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
            type="location" 
            placeholder="City" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            />
        </form>
        </>
    )
}

export default SignUp
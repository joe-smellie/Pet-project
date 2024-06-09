import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login () {
    const navigate = useNavigate()

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault()
}

return (
    <> 
    <div className="header">
    <img src="client/images/Petmind.png" alt="petmind"></img>
    </div>
     
    <div className="login">
    <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
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
        {/*Alert for if password is incorrect
        What about a stay signed in?
         */}
        </form>
        <button onClick={() => navigate("/Profile")}>Login</button>
        </div>
    </>
)
}
export default Login
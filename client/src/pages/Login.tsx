import { SyntheticEvent, useState } from "react"
import axios from 'axios';
import { Navigate } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)


const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
 
        const response = await axios.post('login', {       
            email: email,
            password: password,
   
        })
    setRedirect(true)
    }

    if (redirect) {
        return <Navigate replace={true} to="/" />
    }

    return (
        <div>
            <main className="form-signin">
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <input type="email" className="form-control mb-2" placeholder="email" required
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <input type="password" className="form-control mb-2" placeholder="Password" required
                    onChange={e=>setPassword(e.target.value)}
                    />
 
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
        </div>
    )
}

export default Login

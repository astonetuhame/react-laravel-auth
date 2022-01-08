import { SyntheticEvent, useState } from "react"
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";


const Reset = () => {
const {token} = useParams()
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [redirect, setRedirect] = useState(false)


const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    
 
        await axios.post('reset', {       
            token,
            password,
            password_confirm: passwordConfirm

   
        })
    setRedirect(true)
    
 
    }

    if (redirect) {
        return <Navigate replace={true} to="/login" />
    
}


    return (
          <main className="form-signin">
        <form onSubmit={submit}>
            
            <h1 className="h3 mb-3 fw-normal">Reset your password</h1>

                    <input type="password" className="form-control mb-2" placeholder="Password" required
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <input type="password" className="form-control mb-2" placeholder="Password Confirm" required
                    onChange={e=>setPasswordConfirm(e.target.value)}
                    />
                   
            
            <button className="w-100 btn btn-lg btn-primary" type="submit">Reset Password</button>
        </form>
    </main>


    )
}

export default Reset

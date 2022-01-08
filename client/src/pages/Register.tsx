import { SyntheticEvent, useState } from "react"
import axios from 'axios';
import { Navigate } from "react-router-dom";

const Register = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setpasswordConfirm] = useState("")
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await axios.post('register', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirm: passwordConfirm

 
    
        }   )

        setRedirect(true)
 
    }

    if (redirect) {
        return <Navigate replace={true} to="/login" />
    }

    return (
       
           <main className="form-signin">
        <form onSubmit={submit}> 
            <h1 className="h3 mb-3 fw-normal">Please register </h1>

                <input type="text" className="form-control mb-2" placeholder="First Name" required
                onChange={e=>setFirstName(e.target.value)}
                />
                <input type="text" className="form-control mb-2" placeholder="Last Name" required
                onChange={e=>setLastName(e.target.value)}
                
                />
                <input type="email" className="form-control mb-2" placeholder="email" required
                onChange={e=>setEmail(e.target.value)}
                
                />
                <input type="password" className="form-control mb-2" placeholder="Password" required
                onChange={e=>setPassword(e.target.value)}
                
                />
                <input type="password" className="form-control mb-2" placeholder="Password Confirm" required
                onChange={e=>setpasswordConfirm(e.target.value)}
                
                />
 
            <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
        </form>
    </main>
    )
}

export default Register

import { SyntheticEvent, useState } from "react"
import { Navigate, Link } from "react-router-dom";
import axios from 'axios'

const Forgot = () => {
    const [email, setEmail] = useState("")
    const [notify, setNotify] = useState({
        show: false,
        error: false,
        message: ''
    })
    
    
    const submit = async(e:SyntheticEvent) => {
        e.preventDefault()
        try {
        await axios.post('forgot', {email})
            setNotify({
                show: true,
                error: false,
                message: 'Email was sent'
            })
        } catch (error) {
            setNotify({
                show: true,
                error: true,
                message: 'Email doesnot exist'
            })
        }
    }

    let info;
    if (notify.show)
    {
        info = (
            <div role="alert" className={notify.error ? 'alert alert-danger': 'alert alert-success'}>
            {notify.message}
            </div>
        )
        }

    return (
     
        
         <main className="form-signin">
            <form onSubmit={submit}>
                {info}
            <h1 className="h3 mb-3 fw-normal">Please set your email</h1>

                    <input type="email" className="form-control mb-2" placeholder="email" required
                    onChange={e=>setEmail(e.target.value)}
                    />
                   
            
            <button className="w-100 btn btn-lg btn-primary" type="submit">Send email</button>
        </form>
    </main>
    )
}

export default Forgot

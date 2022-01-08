const Register = () => {
    return (
           <main className="form-signin">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please register </h1>

                <input type="text" className="form-control mb-2"  placeholder="First Name" required/>
                <input type="text" className="form-control mb-2"  placeholder="Last Name" required/>


                <input type="email" className="form-control mb-2"  placeholder="email" required/>
                <input type="password" className="form-control mb-2"  placeholder="Password" required/>
                <input type="password" className="form-control mb-2"  placeholder="Password Confirm" required/>
 
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
    )
}

export default Register

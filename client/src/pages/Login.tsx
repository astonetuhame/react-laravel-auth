const Login = () => {
    return (
        <div>
            <main className="form-signin">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <input type="email" className="form-control mb-2"  placeholder="email" required/>
                <input type="password" className="form-control mb-2"  placeholder="Password" required/>
 
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
        </div>
    )
}

export default Login

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <main className="form-signin">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <input type="email" className="form-control"  placeholder="email" required/>
                <input type="password" className="form-control"  placeholder="Password" required/>
 
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>

    </div>
  );
}

export default App;

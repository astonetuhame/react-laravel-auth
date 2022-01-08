import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null)
  const[loginValue, setLogin] = useState(false)
  
   useEffect(() => {
        (
            async () => {
                try {
                    const response = await axios.get('user')
                  const user = response.data
                  setUser(user)
                } catch (error) {
                  setUser(null)
                }
               
            }
        )()
   },[loginValue])
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Nav user={ user} setLogin={ ()=> setLogin(false)}/>
        
        <Routes>
          <Route path="/" element={<Home user={ user}/>} />
        <Route path="/login" element={<Login setLogin={ ()=> setLogin(true)}/>} />
        <Route path="/register" element={<Register />} />

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;


import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {

  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App

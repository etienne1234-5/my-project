
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/register'
import Login from './components/login'
import Dashboard from './components/Dashboard'

//make app.jsx  to display register and login components
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;

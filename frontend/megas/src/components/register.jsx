//create register
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import axios from 'axios';
const Register = () => {
    const [email,setEmail] = useState('');
    const [fullname,setFullname] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : email;
        const trimmedFullname = typeof fullname === 'string' ? fullname.trim() : fullname;
        try {
            const response = await axios.post('/api/register', {
                email: normalizedEmail,
                fullname: trimmedFullname,
                password
            });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error registering user', error);
            alert('Registration failed: ' + (error.response?.data?.message || 'Unknown error'));
        }
    }
    return (
        <div className="register-container ">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
}
export default Register;
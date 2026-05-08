//create register
import  { useState } from 'react';
import './register.css';``
import axios from 'axios';
const Register = () => {
    const [email,setEmail] = useState('');
    const [fullname,setFullname] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('api/register', {
                email,
                fullname,
                password
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error registering user', error);
        }
    }
    return (
        <div className="register-container ">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            

                <button type="submit" method="post" onclick="handleSubmit">Register</button>
            </form>
        </div>
    );
}
export default Register;
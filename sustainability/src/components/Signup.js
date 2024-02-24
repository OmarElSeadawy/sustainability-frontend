import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Authentication/AuthContext';

export const Signup = () => {

    const { register } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        register(username, password)
            .then(() => {
                navigate('/login');
            })
            .catch(error => {
                setError('Registration failed');
            });
    };
    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <form className="register-form" onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" id="username" name="username" className="form-control" placeholder="Full Name" value={username} onChange={e => setUsername(e.target.value)} required />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Create Account</button>
                                {error && <p>{error}</p>}
                                <p className="message mt-3">Already registered? <a href="/login">Sign In</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
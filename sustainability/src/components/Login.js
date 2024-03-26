import { useState, useContext } from 'react';
import AuthContext from '../Authentication/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const { login, isLoggedin, user } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError('Invalid username or password');
            });
    };

    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <form className="login-form" onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" id="username" name="username" className="form-control" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}  required />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                {error && <p color='red'>{error}</p>}
                                <p className="message mt-3">Not registered? <a href="/signup">Create an account</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
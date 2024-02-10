import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const BASE_URL = 'http://127.0.0.1:8000/auth';

    const handleSubmit = async (e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append("email", e.target.email.value);
        bodyFormData.append("password", e.target.password.value);
        const from = location.state?.from || '/home';
        
        axios({
            method: "post",
            url: `${BASE_URL}/login/`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
        })
            .then(function (response) {
                // Handle successful login here, e.g. storing the user data or token
                console.log(response);
                localStorage.setItem('authToken', response.data.token);
                // After successful login, redirect the user back to the page they were trying to access
                navigate(from);
            })
            .catch(function (response) {
                // Handle error here
                console.log(response);
            });
    }


    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <form className="login-form" onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" id="email" name="email" className="form-control" placeholder="Email" required />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Password" required />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <p className="message mt-3">Not registered? <a href="/signup">Create an account</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
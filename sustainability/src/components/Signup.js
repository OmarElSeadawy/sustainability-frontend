import axios from 'axios';

export const Signup = () => {

    const BASE_URL = 'http://127.0.0.1:8000/auth';

    const handleSubmit = async (e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append("name", e.target.name.value);
        bodyFormData.append("email", e.target.email.value);
        bodyFormData.append("password", e.target.password.value);
        axios({
            method: "post",
            url: `${BASE_URL}/register/`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (response) {
                console.log(response)

            });
    }

    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <form className="register-form" onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Full Name" required />
                                    <label htmlFor="name">Full Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" id="email" name="email" className="form-control" placeholder="Email" required />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Password" required />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Create Account</button>
                                <p className="message mt-3">Already registered? <a href="/login">Sign In</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
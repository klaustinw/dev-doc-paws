import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import SwalToast from '../../../App/components/SwalToast';
import { base_url } from '../../../variables';

const SignIn = () => {
  const history = useHistory();
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: ""
  });
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${base_url}/admin/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: loginCred.email,
					password: loginCred.password
				})
			});
      if (response.status == 200) {
        const { token } = await response.json();
        SwalToast.fire('Login Success', '', 'success');
        localStorage.setItem("token", token);
        localStorage.setItem("username", loginCred.email);
        history.push("/");
      } else {
        throw null;
      }
    } catch (error) {
      SwalToast.fire('Login Failed', '', 'error');
    }
  };

  return (
    <>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" />
              </div>
              <form onSubmit={e => handleLogin(e)}>

                <h3 className="mb-4">Login</h3>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" onChange={
                    e => setLoginCred({ ...loginCred, email: e.target.value })
                  } />
                </div>
                <div className="input-group mb-4">
                  <input type="password" className="form-control" placeholder="password" onChange={
                    e => setLoginCred({ ...loginCred, password: e.target.value })
                  } />
                </div>
                {/* <div className="form-group text-left">
                <div className="checkbox checkbox-fill d-inline">
                  <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                  <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                </div>
              </div> */}
                <button className="btn btn-primary shadow-2 mb-4" type="submit">Login</button>
                {/* <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
              <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
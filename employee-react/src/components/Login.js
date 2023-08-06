import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();    


    const loginEmployee = async (e) => {
        e.preventDefault();
        try {
        await axios.post("http://localhost:8080/api/login", 
        {
            email,
            password
        });
        navigate("/employee");
        } catch (error) {
        console.log(error);
        }
    }

    

        return (
            <div className="app">
                <div className="login-form">
                    <div className="title">Sign In</div>
                        <div className="form">
                            <form onSubmit={loginEmployee}>
                                <div className="input-container">
                                <label>Email </label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john.doe@gmail.com"
                                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                    title="Harus mengandung satu simbol @ dan simbol (.) titik minimal satu atau lebih"
                                required />
                                {/* {renderErrorMessage("uname")} */}
                                </div>
                                <div className="input-container">
                                <label>Password </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Abcde12345"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
					                title="Harus mengandung paling tidak satu angka, satu huruf besar, satu huruf kecil, dan minimal berisi 8 karakter atau lebih"
                                required />
                                {/* {renderErrorMessage("pass")} */}
                                </div>
                                <div className="button-container">
                                <input type="submit" />
                                </div>
                            </form>
                        </div>
                </div>
            </div>


            // <div className="auth-form-container">
            //     <h2>Login</h2>
            //     <form onSubmit={loginEmployee}>
            //         <div className="field">
            //             <label className="label">Email</label>
            //             <div className="control">
            //             <input
            //                 type="text"
            //                 className="input"
            //                 value={email}
            //                 onChange={(e) => setEmail(e.target.value)}
            //                 placeholder="Email"
            //             />
            //             </div>
            //         </div>
            //         <div className="field">
            //             <label className="label">Password</label>
            //             <div className="control">
            //             <input
            //                 type="text"
            //                 className="input"
            //                 value={password}
            //                 onChange={(e) => setPassword(e.target.value)}
            //                 placeholder="Password"
            //             />
            //             </div>
            //         </div>
            //     <button type="submit" className="button is-success">Login</button>
            //     </form>
            // </div>


        // <div className="auth-form-container">
        //     <h2>Login</h2>
        //     <form className="login-form" onSubmit={loginEmployee}>
        //         <label htmlFor="email">email</label>
        //         <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        //         <label htmlFor="password">password</label>
        //         <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        //         <button type="submit">Log In</button>
        //     </form>
        // </div>
        );
};

export default Login
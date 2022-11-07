import Link from "next/link";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/AppContext";
const Login = () => {
    const AppContextData = useContext(AppContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        AppContextData.UserLoginFunction(data.email, data.password);
    };
    return (
        <section id="LoginPage">
            <div className="main">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card">
                        <label>Email:</label>
                        <input
                            type="email"
                            value="jashan@j.com"
                            {...register("email", { required: true })}
                            placeholder="your@email.com"
                        />
                        {errors.email && (
                            <p className="text-red-600">Please Enter email</p>
                        )}
                    </div>
                    <div className="card">
                        <label> password:</label>
                        <input
                            placeholder="*****"
                            value="5"
                            type="password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <p className="text-red-600">
                                Please Enter your password
                            </p>
                        )}
                    </div>
                    <div className="urls">
                        <p>
                            <Link href="/register">
                                <a>
                                    Don't have account? <span>SignUp</span>
                                </a>
                            </Link>
                        </p>
                        <p>
                            <Link href="#">
                                <a>
                                    Don't remember yout password?
                                    <span>Forget Password</span>
                                </a>
                            </Link>
                        </p>
                    </div>
                    <div className="button">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;

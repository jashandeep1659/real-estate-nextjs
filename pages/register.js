import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    return (
        <section id="LoginPage">
            <div className="main">
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card">
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "Please enter email",
                            })}
                        />{" "}
                        {errors.email && (
                            <p className="text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="card">
                        <label> password:</label>
                        <input
                            type="password"
                            placeholder="*****"
                            {...register("password", {
                                required: "Please enter password",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Password must have at least 8 characters",
                                },
                            })}
                        />
                        {errors.password ? (
                            <p className="text-red-600">
                                {errors.password.message}
                            </p>
                        ) : null}
                    </div>
                    <div className="urls">
                        <p>
                            <Link href="/login">
                                <a>
                                    Already have account? <span>Login</span>
                                </a>
                            </Link>
                        </p>
                        <p>
                            <Link href="#">
                                <a>
                                    By creating an account, you agree to our
                                    <span>Terms and conditions</span>
                                </a>
                            </Link>
                        </p>
                    </div>
                    <div className="button">
                        <button>SignUp</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;

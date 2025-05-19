import { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";

export default function Login() {
    const isLoggedIn = localStorage.getItem("ecom-token");

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            return;
        }
        if (!password) {
            return;
        }
        if (email === "Sus@gmail.com" && password === "1234") {
            localStorage.setItem("ecom-token", "Sushan's token");
            navigate("/");
        }
        else if (email === "admin@gmail.com" && password === "1234") {
            localStorage.setItem("ecom-token", "admin");
            navigate("/admin/dashboard");
        }
        else {
            alert("Wrong credentials");
        }
    };

    if (isLoggedIn) {
        return <Navigate to={"/"} />;
    }

    return (
        <>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-br from-indigo-100 via-white to-purple-100">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <NavLink to="/">
                        <img
                            alt="Your Company"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="mx-auto h-10 w-auto"
                        />
                    </NavLink>
                    <h2 className="mt-10 text-center text-3xl font-bold text-indigo-600">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{" "}
                        <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Start a 14-day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

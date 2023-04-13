import React, { useEffect, useState } from "react";
import {
	Link,
	useLocation,
} from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigateMessage = useLocation();

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(email, password);
		setEmail("");
		setPassword("");
	};

	useEffect(() => {
		setError(true);
		if (email && password) {
			setError(false);
		}
	}, [email, password]);

	return (
		<section className="login-page">
			<h2>Sign in to your account</h2>
			<p className="re-direct">
				{navigateMessage.state?.message}
			</p>
			<form
				onSubmit={submitHandler}
				className="login-form form"
			>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="email"
					placeholder="Email address"
					aria-label="email-address"
					autoComplete="off"
					className="login-input input"
					value={email}
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					name="password"
					placeholder="Password"
					aria-label="password"
					autoComplete="off"
					className="login-input input"
					value={password}
				/>
				<button
					disabled={error}
					className={`link-btn btn ${
						error ? "disabled-btn" : "btn hover-btn"
					}`}
				>
					Sign In
				</button>
				<p className="re-direct">
					Don’t have an account ?
					<Link to="/"> Create one now</Link>
				</p>
			</form>
		</section>
	);
};

export default Login;

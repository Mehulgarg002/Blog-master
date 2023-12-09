// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Login = () => {
// 	const [data, setData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = `https://blogpost-yu02.onrender.com/api/auth`;
// 			const { data: res } = await axios.post(url, data);
// 			localStorage.setItem("userId", res.data._id);
// 			localStorage.setItem("token", res.data.token);
// 			window.location = "/";
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<section className="text-center text-lg-start">
// 			<div className="container py-4">
// 				<div className="row g-0 align-items-center">
// 					<div className="col-lg-6 mb-5 mb-lg-0">
// 						<div className="card cascading-right" style={{
// 							background: "hsla(0, 0%, 100%, 0.55)",
// 							backdropFilter: 'blur(30px)'
// 						}}>
// 							<div className="card-body p-5 shadow-5 text-center">
// 								<h2 className="fw-bold mb-5">Sign up now</h2>
// 								<form onSubmit={handleSubmit}>
// 									<div className="form-outline mb-4">
// 										<input
// 											type="email"
// 											placeholder="Email"
// 											name="email"
// 											onChange={handleChange}
// 											value={data.email}
// 											required
// 										/>
// 									</div>

// 									<div className="form-outline mb-4">
// 										<input
// 											type="password"
// 											placeholder="Password"
// 											name="password"
// 											onChange={handleChange}
// 											value={data.password}
// 											required
// 										/>
// 									</div>
// 									<button type="submit" className="btn btn-primary btn-block mb-4">
// 										Sign In
// 									</button>
// 									{error && <div className={styles.error_msg}>{error}</div>}
// 									<div className="text-center">
// 										<h1>New Here ?</h1>
// 										<Link to="/signup">
// 											<p>sign up </p>
// 										</Link >
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="col-lg-6 mb-5 mb-lg-0">
// 						<img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
// 							alt="" />
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Login;


import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://blogpost-yu02.onrender.com/api/auth`;
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("userId", res.data._id);
			localStorage.setItem("token", res.data.token);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1 style={{color:'black'}}>New Here ?</h1>
					<Link to="/signup">
						<h4 style={{color:'white'}}>
							Sign Up
						</h4>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;




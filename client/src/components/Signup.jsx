// import { useState } from "react";
// import { signUp } from "../auth/signup";

// export default function Signup() {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await signUp(email, password);
//             alert("signed up!")
//         }
//         catch (err) {
//             alert(err.message);
//         }
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
//                 <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
//                 <button type="submit">Sign up</button>
//             </form>
//         </>
//     )
// } 


import { useState } from "react";
import { signUp } from "../auth/signup";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            await signUp(email, password);
            // Redirect would happen in the signUp function or here
        } catch (err) {
            setError(err.message || "Failed to sign up. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Create Account</h1>
                    <p>Sign up to get started</p>
                </div>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating account..." : "Sign Up"}
                    </button>
                </form>

                <div className="auth-footer">
                    Already have an account? <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    );
}
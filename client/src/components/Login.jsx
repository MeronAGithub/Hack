// import { useState } from "react";
// import { login } from "../auth/login";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await login(email, password);
//             alert("Signed up successfully!");
//         } catch (err) {
//             alert(err.message);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" onChange={(e) => setEmail(e.target.value)} />
//             <input type="password" onChange={(e) => setPassword(e.target.value)} />
//             <button type="submit">Log In</button>
//         </form>
//     );
// }


import { useState } from "react";
import { login } from "../auth/login";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            await login(email, password);
            // Redirect would happen in the login function or here
        } catch (err) {
            setError(err.message || "Failed to log in. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Log In</h1>
                    <p>Please enter your credentials to continue</p>
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
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="forgot-password">
                        <Link to="/reset-password">Forgot password?</Link>
                    </div>

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Log In"}
                    </button>
                </form>

                <div className="auth-footer">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/authService";

function Login() {
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        email:"",
        password:"",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await login(form);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Attendance System Login</h2>
                <p stlye={{
                    textAlign: "center",
                    color: "#6b7280",
                    marginTop: "10px",
                    marginBottom: "20px",
                }}> Sign in to your account</p>

                <input 
                type="email"
                placeholder="Email"
                style={styles.input}
                onChange={(e) => setForm({ ...form, email: e.target.value })
                }
                />

                <input 
                type="password"
                placeholder="Password"
                style={styles.input}
                onChange={(e) => setForm({ ...form, password: e.target.value})
                }
                />

                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fb",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "40px",
        width: "400px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#b91c1c",
        fontSize: "28px",
    },
    input: {
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        outline: "none",
    },
    button: {
        padding: "12px",
        backgroundColor: "#b91c1c",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    },
};

export default Login;
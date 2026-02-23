import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(StudentContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    login(username, password);
    navigate("/");
  }

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.btn}>
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "300px",
    margin: "80px auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "8px"
  },
  btn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px",
    cursor: "pointer"
  }
};

export default Login;
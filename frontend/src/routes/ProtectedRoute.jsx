import { Navigate } from "react-router-dom";

function ProtectedRoute({ childern }) {
    const token = localStorage.getItem("token");

    console.log("TOKEN:", token);

    return token ? childern : <Navigate to="/" />;
}

export default ProtectedRoute;
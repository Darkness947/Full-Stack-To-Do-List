import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
    const { user, loading } = useAuth();

    // We also check for loading state to prevent flickering
    // While the user's token is being verified on initial load
    if (loading) {
        return <div>Loading...</div>;
    }

    // If user is authenticated, render the child routes
    // Otherwise, redirect to login page
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

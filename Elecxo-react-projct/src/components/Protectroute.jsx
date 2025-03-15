import React from 'react'
import { useAuth } from '../context/Authcontext'
import { Navigate, Outlet } from 'react-router-dom'

function Protectroute() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export default Protectroute;

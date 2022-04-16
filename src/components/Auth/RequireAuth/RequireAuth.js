import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import {Navigate, useLocation, useNavigate} from 'react-router-dom'

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);

    const location = useLocation();
    const navigate = useNavigate();

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children
};

export default RequireAuth;
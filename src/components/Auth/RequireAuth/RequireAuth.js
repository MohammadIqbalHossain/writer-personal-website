import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import Spinner from '../../Shared/Spinner/Spinner';

const RequireAuth = ({children}) => {
    const [user,loading, error] = useAuthState(auth);

    const location = useLocation();
    const navigate = useNavigate();

    if(loading){
        return <Spinner />
    }
   
    
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    

    return children
};

export default RequireAuth;
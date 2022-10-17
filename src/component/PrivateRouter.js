import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext, { AuthContext } from '../Context/UserContext';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return<div>loding...</div>
    }
    if(user && user.uid)
    return children;
    
    return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;
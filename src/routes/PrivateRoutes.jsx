import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}
export default PrivateRoutes;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    console.log('context',user);

    const handleSignOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to ='/' className="btn btn-ghost normal-case text-xl">Awesome auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
               {user?.displayName && <span>Welcome,{user.displayName}</span>}
               {user?.email && <span>Welcome,{user.email}</span>}

               {
                user?.email?
                <button onClick={handleSignOut} className="btn btn-sm">Sing  out</button>
                 :<Link to='/login'>
                    Login
                    <button className='btn-btn-small'></button></Link>
               }

            </div>
        </div>
    );
};

export default Header;
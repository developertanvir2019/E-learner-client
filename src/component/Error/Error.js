import React from 'react';
import { Link } from 'react-router-dom';
import('./Error.css')
const Error = () => {
    return (
        <div className='error d-flex justify-content-center align-items-center'>
            <div>
                <h1 className='text-white'>404</h1>
                <h3 className='text-white'>page is not found</h3>
                <Link to={'/'} className='btn btn-danger'> Go to home</Link>
            </div>
        </div>
    );
};

export default Error;
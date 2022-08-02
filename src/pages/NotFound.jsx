import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex m-10 justify-center items-center flex-col'>
            <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
                alt="404"
            />
            <p>You have reach the edge of universe</p>
            <Link to="/">Take me home!</Link>
        </div>
    )
}

export default NotFound;
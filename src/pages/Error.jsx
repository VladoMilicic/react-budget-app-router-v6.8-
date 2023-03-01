import React from 'react'
import { useNavigate, useRouteError } from 'react-router'
import { Link } from 'react-router-dom'
import { ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/solid'
const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();
  return (
    <div className='error'>
        <p>{error.message || error.statusText}</p>
        <div className="flex-md">
            <button className='btn btn--dark' onClick={()=>{navigate(-1)}}>
                <ArrowUturnLeftIcon width={20} />
            </button>
            <Link to="/" className='btn btn--dark'>
                <HomeIcon width={20} />
                <span>Go Home</span>
            </Link>
        </div>
    </div>
  )
}

export default Error;
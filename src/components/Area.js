import React from 'react'
import { Link } from 'react-router-dom'
import "./Other.css";

const Area = () => {
  return (
    <>
    <Link className='area-links'>  Man's Fashion </Link>
    <Link className='area-links'> Female's Fashion</Link>
    <Link className='area-links'> Electronics</Link>
    <Link className='area-links'>Home & LifeStyle</Link>
    <Link className='area-links'>Sports</Link>
    <Link className='area-links'>Medicine</Link>
    <Link className='area-links'>Toys</Link>
    </>
  )
}

export default Area
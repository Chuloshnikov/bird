import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import ActionButton from './ActionButton'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-10 border-b'>
        <Logo/>
        <Navigation/>
        <ActionButton/>
    </header>
  )
}

export default Navbar
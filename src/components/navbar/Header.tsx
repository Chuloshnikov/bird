import React from 'react'
import Logo from './Logo'
import { NavigationMenuBar } from './NavigationMenuBar'
import ActionButton from './ActionButton'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-10 border-b h-40'>
        <Logo/>
        <NavigationMenuBar/>
        <ActionButton/>
    </header>
  )
}

export default Header;
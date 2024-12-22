import React from 'react'

const namespace = 'app-navbar'

const Navbar = ({appName}) => {
  return (
    <nav className={namespace}>
      <h2 className={`${namespace}__title`}>{appName}</h2> 
    </nav>
  )
}

export default Navbar

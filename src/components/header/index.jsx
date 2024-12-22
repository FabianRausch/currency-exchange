import React from 'react'

const namespace = 'app-header';

const Header = ({title}) => {
  return (
    <header className={namespace}>
      <h1 className={`${namespace}__title`}>{title}</h1>
    </header>
  )
}

export default Header

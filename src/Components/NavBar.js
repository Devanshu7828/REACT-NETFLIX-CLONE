import React, { useState, useEffect } from 'react'
import './NavBar.css'
function NavBar () {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
        alt='netflix logo '
        className='nav__logo'
      />
      <img
        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
        alt='netflix avatar '
        className='nav__avatar'
      />
    </div>
  )
}

export default NavBar

import React from 'react'

import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

function Footer () {
  return (
    <footer className='footer-container'>
      <div className='footer'>
        <p>@weResonate</p>
      </div>
      <div>
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiFillInstagram />
      </div>
    </footer>
  )
}

export default Footer

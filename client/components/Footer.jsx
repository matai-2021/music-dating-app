import React from 'react'

import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

function Footer () {
  return (
    <>
      <div className='footer'>
        <p>@weResonate</p>
      </div>
      <div>
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiFillInstagram />
      </div>
    </>
  )
}

export default Footer

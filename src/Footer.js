import React from 'react'
import './Footre.css'
function Footer() {
  return (
    <div>
        <div className='con'>
            <div className='der row'>
                <div className='cl col-12 col-md-4  text-white'>
                    <h3 className='df-df'>SIXTEEN CLOTHING</h3>
                    <ul className='ul1'>
                        <li className='df'>A108 Adam Street</li>
                        <li className='df'>sr 648424, ly</li>
                        <li className='df'>Phone: +218 944521536</li>
                        <li className='df'>Email:a21808385@gmail.com</li>
                       
                    </ul>
                </div>
                <div className='cl col-12 col-md-4   text-white'>
                <h3 className='df-df'>Useful Links</h3>
                <ul className='ul1'>
                        <li className='df'>Home</li>
                        <li className='df'>Electronics</li>
                        <li className='df'>Contact</li>
                        <li className='df'>Pages</li>
                       
                    </ul>
                </div>
                <div className='cl col-12 col-md-4   text-white'>
                <h3 className='df-df'>Our Newsletter</h3>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <from>
                <input type='search' />
                <button className='btn nm'>search</button>
              </from>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
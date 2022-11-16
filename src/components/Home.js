import React from 'react';
import logo from "../images/chucknorris_logo_coloured_small@2x.png"

export default function Home() {
  return (
    <section>
        <div className='logo'>
            <img src={logo} alt='chuck norris'/>
        </div>
    </section>
  )
}

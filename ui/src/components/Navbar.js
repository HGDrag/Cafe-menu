import React from 'react';
import {useState} from 'react';
const Navbar = () => {

  const [menu, setMenu] = useState('hidden');
  return (
    <>
    <nav className='nav'>
        <h2>Hriteria</h2>
        <div className='nav_hamburger' onClick={() => setMenu('active')}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
    <aside className={`sideNav ${menu}`} >
      <h3 className='hideNav' onClick={() => setMenu('hidden')}>Menu</h3>
        <div className='typesList'>
          <a href='/'>Hot Drinks</a>
          <a href='/'>Non-alcohol drinks</a>
          <a href='/'>Alcohol drinks</a>
          <a href='/'>Deserts</a>
        </div>
      </aside>
    </> 
  );
}

export default Navbar
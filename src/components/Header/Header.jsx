import React from 'react';

const Header = () => {
  return (
    <nav className='w-full  bg-none justify-center items-center flex h-[20vh] sm:[15vh] md:[20vh] absolute z-10  '>
      <div className='bg-black/90 text-white p-4 px-2 pl-4 flex  justify-around items-center h-[80px] w-[95vw] sm:w-[74vw] rounded-full border-white/40' style={{fontFamily: "Orbitron, 'Orbitron Placeholder', sans-serif" , fontSize:"18px",borderWidth:"1px"}}>
      <div className='w-full sm:w-[142px]'>
        <img src='public\asset 0.svg' className='w-[142px] h-[36px] text-xl' />
      </div>
      <div className='w-[50vw] '>
        <ul className='lg:flex hidden justify-around' style={{color:"#96979c"}} >
          <li>Home</li>
          <li>About</li>
          <li className='flex'>Our Services<img src='public\asset 1.svg' className='w-[30px]'/></li>
          <li>Benefits</li> 
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='bg-red-600 p-4 px-6 rounded-full lg:flex hidden justify-around'>
        Join us now
      </div>
      <div className='rounded-full border-2 border-black block lg:hidden  '>
        <img src="src\assets\atIEQjQ5QDx1TzUHLSEdkAOUig.svg" className='w-[60px] h-[40px] p-[2px]'/>
      </div>
      </div>
    </nav>
  );
}

export default Header;

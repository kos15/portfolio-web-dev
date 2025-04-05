import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

function NavBar({isDarkMode, setIsDarkMode}) {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () =>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () =>{
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () =>{
            setIsScroll(scrollY > 50);
        });
    },[])
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full'></Image>
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 x1:px-[8%] py-4 flex items-center justify-between z-50
            ${isScroll ? 'backdrop-blur-lg shadow-sm bg-opacity-50 dark:bg-[#11001F] dark:shadow-white/20':'' }`}>
            <a href='#top'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt='logo'></Image>
            </a>

            <ul className={`hidden md:flex items-center gap-6 1g:gap-8 rounded-full px-12 py-3
                 ${isScroll ? '':'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                <li className='font-Ovo'><a href='#top'>Home</a></li>
                <li className='font-Ovo'><a href='#about'>About</a></li>
                <li className='font-Ovo'><a href='#service'>Services</a></li>
                <li className='font-Ovo'><a href='#work'>My Work</a></li>
                <li className='font-Ovo'><a href='#contact'>Contact</a></li>
            </ul>

            <div className='flex items-center gap-4'>

                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    <Image src={isDarkMode ? assets.sun_icon :assets.moon_icon} alt='' className='w-6'></Image>
                </button>
                <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>
                    Contact
                    <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3 cursor-pointer' alt='arrow-icon'></Image>
                </a>
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'></Image>
                </button>
            </div>

            {/* mobile menu */}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white'>
                <div className='absolute right-6 top-6'  onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'></Image>
                </div>
                <li className='font-Ovo'><a href='#home' onClick={closeMenu}>Home</a></li>
                <li className='font-Ovo'><a href='#about' onClick={closeMenu}>About</a></li>
                <li className='font-Ovo'><a href='#service' onClick={closeMenu}>Services</a></li>
                <li className='font-Ovo'><a href='#work' onClick={closeMenu}>My Work</a></li>
                <li className='font-Ovo'><a href='#contact' onClick={closeMenu}>Contact</a></li>
            </ul>

        </nav>
    </>
  )
}

export default NavBar


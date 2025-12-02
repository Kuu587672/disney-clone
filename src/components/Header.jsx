import React, {useState, useRef, useEffect} from 'react'

// Importing Components
import HeaderItem from './HeaderItem.jsx'

// Import logos
import logoWhite from './../assets/images/disneyPlus.png'

// Import Icons
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from 'react-icons/hi2'
import {
    HiPlus,
    HiDotsVertical
} from 'react-icons/hi'
import { FaUser } from "react-icons/fa"

function Header() {

    // Constant state for dropdown menu
    const [toggle, setToggle] = useState(false);
    const toggleRef = useRef(null)

    // Creating a constant menu list for icons
    const menu = [
        { name: 'HOME', icon: HiHome },
        { name: 'SEARCH', icon: HiMagnifyingGlass },
        { name: 'WATCHLIST', icon: HiPlus },
        { name: 'ORIGINALS', icon: HiStar },
        { name: 'MOVIES', icon: HiPlayCircle },
        { name: 'SERIES', icon: HiTv }
    ]

    // Close dropdown menu on outside click
    useEffect(() => {
        const onDocClick = (e) => {
            if (toggleRef.current && !toggleRef.current.contains(e.target)) {
                setToggle(false);
            }
        }
        document.addEventListener("click", onDocClick);
        return () => document.removeEventListener("click", onDocClick);
    }, [])

    return (
        <div className='flex items-center justify-between gap-6 md:gap-10 p-5' >
            {/* <div className='flex items-center gap-6 md:gap-15' > */}
                <img src={logoWhite} className='w-20 sm:w-20 md:w-[115px] lg:w-[150px] object-cover' alt="" />

                {/* Desktop Menu */}
                <div className='hidden md:flex gap-8 md:gap-10'>
                    {menu.map((item) => (
                        <HeaderItem key={`desktop-${item.name}`} name={item.name} Icon={item.icon} />
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className='md:hidden flex gap-8 pt-4'>

                    {/* Show 3 icons */}
                    {menu.slice(0, 3).map((item, index) => (
                        <HeaderItem 
                        key={`mobile-top-${index}-${item.name || 'icon'}`} 
                        name={''} 
                        Icon={item.icon} 
                        />
                    ))}

                    {/* More icon */}
                    <div
                        ref={toggleRef}
                        className='relative'    // important for dropdown absolute positioning
                    >
                        <div
                            onClick={() => setToggle((s) => !s)}
                            aria-expanded = {toggle}
                            aria-label="Open more menu"
                            className='focus:outline-none'
                        >
                            <HeaderItem name={''} Icon={HiDotsVertical} />
                        </div>

                        {toggle && (
                            <div className='absolute right-0 mt-3 bg-[#121212] pt-5 pb-1 pl-6 pr-5 border border-gray-700 rounded-lg z-50'>
                                {menu.slice(3).map((item, index) => (
                                    <HeaderItem 
                                    key={`mobile-dropdown-${index}-${item.name}`} 
                                    name={item.name} 
                                    Icon={item.icon} 
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            {/* </div> */}
            <FaUser className='text-white w-5 h-5 cursor-pointer' />
        </div>
    );
}

export default Header;
import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/images/logo.png'
import { IoSearchSharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';
function Header() {
    const [toggle, setToggle] = useState(true);
    const {theme,setTheme}=useContext(ThemeContext);

    useEffect(()=>{
        console.log("Theme",theme)
    },[])
    


    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={70} height={70} alt="" />
            <div className='flex bg-slate-200 p-2 w-full 
        mx-5 rounded-full items-center'>
                <IoSearchSharp />
                <input 
                type="text" placeholder='Search Games'
                 className='px-2 bg-transparent  outline-none' />
            </div>
            <div>
                    {theme=='light' ? <IoMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}} /> :
                    <MdSunny onClick={() => {setTheme('light');;localStorage.setItem('theme','dark')}} className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                    />}
            </div>
        </div>
    )
}

export default Header
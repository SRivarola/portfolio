import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { motion, useCycle } from 'framer-motion'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import HomeLink from "./HomeLink";
import OtherLinks from "./OtherLinks";

const open = {
    height: '80px',
}
const closed = {
    height: '0px',
    transition: {
      duration: 0.75,
      delay: 0.5,
    }
}

const DesktopNavBar = () => {

    const [isOpen, toggleOpen] = useCycle(false, true)
    const [icon, setIcon] = useState(<IoMdArrowDropup className="text-primary text-2xl"/>)
    
    const handleToggle = () => {
      toggleOpen()
    }

    useEffect(() => {
      setTimeout(() => {
        isOpen && setIcon(<IoMdArrowDropup className="text-primary text-2xl"/>)
      }, 750)
      setTimeout(() => {
        !isOpen && setIcon(<IoMdArrowDropdown className="text-primary text-2xl"/>)
      }, 1000)
    }, [isOpen])
    
    
  return (
    <nav className="hidden sm:inline fixed w-full rounded-b-2xl h-fit">
        <motion.div
            initial={false}
            animate={isOpen ? open : closed}
            transition={{ duration: 0.75 }}
            className='bg-black/50 rounded-b-xl flex items-center justify-between px-24'
        >
            <HomeLink isOpen={isOpen} handleToggle={handleToggle}/>
            <OtherLinks isOpen={isOpen} handleToggle={handleToggle}/>
        </motion.div>
        <div className="w-full h-6 flex justify-center">
            <button
                onClick={() => handleToggle()} 
                className="flex items-center bg-secondary/80 px-10 rounded-b-md"
            >
              {icon}
            </button>
        </div>
    </nav>
  )
}
export default DesktopNavBar
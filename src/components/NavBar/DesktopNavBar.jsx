import { NavLink } from "react-router-dom"
import { motion, useCycle } from 'framer-motion'
import { IoMdArrowDropdown } from "react-icons/io";
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
  
    const handleToggle = () => {
      toggleOpen()
    }
    
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
                className="flex items-center bg-[#161b12]/80 px-10 rounded-b-md"
            >
            <IoMdArrowDropdown className="text-[#14d85c] text-2xl"/>
            </button>
        </div>
    </nav>
  )
}
export default DesktopNavBar
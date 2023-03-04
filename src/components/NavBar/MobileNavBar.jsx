import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs'
import { TbMessageCircle } from 'react-icons/tb'

const MobileNavBar = () => {
  return (
    <nav className="absolute bottom-7 sm:hidden w-screen h-20 z-50">
        <motion.div
            initial={{opacity: 0, y: 150}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            className="h-full w-[90%] mx-auto rounded-[100px] bg-black/70 flex items-center justify-center"
        >
            <ul className="w-full flex justify-evenly text-3xl">
                <motion.li whileTap={{ scale: 0.75 }} ><NavLink to='/' className={({isActive}) => isActive ? 'text-[#14d85c]' : 'text-white'}><AiOutlineHome /></NavLink></motion.li>
                <motion.li whileTap={{ scale: 0.75 }} ><NavLink to='/about' className={({isActive}) => isActive ? 'text-[#14d85c]' : 'text-white'}><AiOutlineUser /></NavLink></motion.li>
                <motion.li whileTap={{ scale: 0.75 }} ><NavLink to='/portfolio' className={({isActive}) => isActive ? 'text-[#14d85c]' : 'text-white'}><BsBriefcase /></NavLink></motion.li>
                <motion.li whileTap={{ scale: 0.75 }} ><NavLink to='/contact' className={({isActive}) => isActive ? 'text-[#14d85c]' : 'text-white'}><TbMessageCircle /></NavLink></motion.li>
            </ul>
        </motion.div>
    </nav>
  )
}
export default MobileNavBar
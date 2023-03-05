import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom"

const open = {
    opacity: 1,
    y: 0,
    transition: {
        delay: 0.7,
        duration: 0.7,
    },
}
const open1 = {
    opacity: 1,
    y: 0,
    transition: {
        delay: 0.9,
        duration: 0.7,
    },
}
const open2 = {
    opacity: 1,
    y: 0,
    transition: {
        delay: 1.1,
        duration: 0.9,
    },
}
const closed = {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      delay: 0.3
    }
}
const closed1 = {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      delay: 0.15
    }
}
const closed2 = {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
    }
}

const OtherLinks = ({ isOpen, handleToggle }) => {
  return (
    <ul className='flex gap-16 text-xl text-white'>
        <motion.li
            initial={{y: -20}}
            animate={ isOpen ? open : closed }
        >
            <NavLink 
                to='/about' 
                className={({isActive}) => 
                    isActive    ? 'text-primary font-semibold' 
                                : 'hover:text-primary'
                }
                onClick={handleToggle}
            >
                Sobre mí
            </NavLink>
        </motion.li>
        <motion.li
            initial={{y: -50}}
            animate={ isOpen ? open1 : closed1 }
        >
            <NavLink 
                to='/portfolio' 
                className={({isActive}) => 
                    isActive    ? 'text-primary font-semibold' 
                                : 'hover:text-primary'
                }
                onClick={handleToggle}
            >
                Portfolio
            </NavLink>
        </motion.li>
        <motion.li
            initial={{y: -50}}
            animate={ isOpen ? open2 : closed2 }
        >
            <NavLink 
                to='/contact' 
                className={({isActive}) => 
                    isActive    ? 'text-primary font-semibold' 
                                : 'hover:text-primary'
                }
                onClick={handleToggle}
            >
                Contacto
            </NavLink>
        </motion.li>
    </ul>
  )
}
export default OtherLinks
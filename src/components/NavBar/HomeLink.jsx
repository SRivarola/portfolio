import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom"

const open = {
    opacity: 1,
    x: 0,
    transition: {
        delay: 0.5,
        duration: 0.75,
    },
}
const closed = {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.6,
    }
}

const HomeLink = ({ isOpen, handleToggle }) => {
  return (
    <motion.div
        initial={{x: -50}}
        animate={ isOpen ? open : closed }
    >
        <NavLink 
          to='/' 
          className={({isActive}) => 
            isActive  ? 'font-bold text-3xl text-primary text-shadow transition ease-in' 
                      : 'font-bold text-3xl text-white text-shadow transition ease-in hover:text-primary'
          }
          onClick={handleToggle}
        >
          Santiago Rivarola
        </NavLink>
    </motion.div>
  )
}
export default HomeLink